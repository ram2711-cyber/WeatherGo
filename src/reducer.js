export const InitialState = {
    value: "Nashik",
    isLoading: false,
    details: {
        data : {
            name: "Nashik",
            sys:{
                country: "IN"
            },
            main:{
                temp:274,
                humidity: 20,
                pressure: 1002
            },
            weather: [{
                main:"Clear"
            }]
        }
    },

}

export const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_VALUE': return{
            ...state,
            value : action.value
        }

        case 'SET_LOADING': return{
            ...state,
            isLoading : action.value
        }

        case 'SET_DETAILS': return{
            ...state,
            details : action.value
        }
        
    }
}