import React from 'react'
import './Detailed.css'

function Detailed({details}) {
    let d = new Date()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year =d.getFullYear();

    console.log("Name", details.data.name)
    return (
        <div className="detailCon">
            <div>
            <h1>{details.data.name}, {details.data.sys.country}</h1>
            <hr style={{color:"#823cf0", width:"80%" }}/>
            <p>{day}, {date} {month} {year} </p>
            </div>
        </div>
    )
}

export default Detailed
