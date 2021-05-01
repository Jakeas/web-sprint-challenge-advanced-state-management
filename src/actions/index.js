import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const ADD_START = "ADD_START"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAILURE = "ADD_FAILURE"
export const SET_ERROR = "SET_ERROR"

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCH_START})
    
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_FAILURE, payload: err.message})
        })
    }
}

export const addSmurfs = (addedSmurf) => {
    return dispatch => {
        dispatch({type: ADD_START})

    axios
        .post(`http://localhost:3333/smurfs`, addedSmurf)
        .then(res => {
            dispatch({type: ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ADD_FAILURE, payload: err.message})
        })
    }
}

export const setError = (err) => {
    return dispatch => {
        dispatch({type: SET_ERROR, payload: err})
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.