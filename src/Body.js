import React ,{useEffect, useReducer} from 'react'
import './Body.css'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';

import Detailed from './Detailed'
import { InitialState, reducer } from './reducer';


function Body() {

    const[{value, isLoading, details}, dispatch] = useReducer(reducer, InitialState)

    const handleChange = (e) => {
        dispatch({
            type:'SET_VALUE',
            value : e.target.value
        })
    }


    const handleClick = async() => {
        dispatch({
            type:'SET_LOADING',
            value:true
        })
        let got = value;
        got.length ?
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${got}&appid=69930d644c2b1777fb23288b4c827118`).then((res)=>{
            dispatch({
                type:'SET_LOADING',
                value:false
            })
           return res;
        }).then((res)=>{
            console.log("RES", res)
            dispatch({
                type: 'SET_DETAILS',
                value : res
            })
            console.log("Details", details)
        })
        .catch((e)=>console.log("error", e))
        :alert("Enter City"); 
    }


    return (
        <div className="body">
            <div className="body__input" >
                <div onClick={handleClick} ><SearchIcon fontSize="Large"/></div>
                <input value={value} onChange={handleChange} placeholder="Nashik" type="text"  />
            </div>
            <div className="location">
                {   details ?
                    isLoading ? <CircularProgress style={{color: '#ffffff'}} /> : <Detailed details = {details} /> : <br/>
                }
            </div>
            {
                details ? 
                isLoading? <br/> : 
                <div className="detail">
                <div className="detail_des">
                    <h1>{Math.round(details.data.main.temp-273.15)}&#176;C </h1>
                    <hr style={{color:"#823cf0", width:"80%" }}/>
                    <h2>{details.data.weather[0].main}</h2>
                </div>
                <div className="detail_des">
                    <h2>Humidity : {details.data.main.humidity}</h2>
                    <hr style={{color:"#823cf0", width:"80%" }}/>
                    <h2>Pressure : {details.data.main.pressure}</h2>
                </div>
                </div>: <br/>
            }
        </div>
    )
}

export default Body
