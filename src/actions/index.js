import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_SUCCESS"
export const ADD_SMURF = "ADD_SMURF"
export const ERROR_VALUE = "ERROR_VALUE"
export const SET_ERROR = "SET_ERROR"
export const ADD_START = "ADD_START"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_ERROR = "ADD_ERROR"

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START})
        console.log({})
        axios
            .get('http://localhost:3333/smurfs/')
            .then((res)=>{
                console.log({res})
                dispatch({ type:FETCH_SMURF_SUCCESS, payload:res.data })
                
            })
            .catch((err)=>{
                console.log({err})
                dispatch({ type:FETCH_SMURF_FAILURE, payload: err.message })
            })
    }
}
export const addSmurf = (addedSmurf) => {
    console.log({addedSmurf})
    return dispatch => {
        dispatch ({ type: ADD_START})
        
        axios
            .post('http://localhost:3333/smurfs/', addedSmurf)
            .then((res) => {
                console.log({res})
                dispatch({ type:ADD_SUCCESS, payload:res.data})
            })
            .catch((err) => {
                console.log({err})
                dispatch({ type: ADD_ERROR, payload: err.message})
            })
    }
}

export const addStart = () => {
    return {type: ADD_START}
}

export const addSuccess = () => {
    return {type: ADD_SUCCESS}
}

export const addError = () => {
    return {type: ADD_ERROR}
}

export const errorMessage = (errorValue) => {
    return { type:ERROR_VALUE, payload: errorValue}
}

export const setError = (setError) => {
    return { type: SET_ERROR, payload: setError }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.