import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Fetch Success", res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log("Fetch Error!", err)
            dispatch({ type: FETCH_FAIL, payload: err })
        })

}

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postSmurfs = (smurf) => (dispatch) => {
    dispatch({ type: POST_DATA })
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log("Post Success!", res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log("Error Posting!", err);
            dispatch({ type: POST_FAIL, payload: err })
        })
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";


export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_DATA })
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log("Delete Success!")
            dispatch({ type: DELETE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log("Error Deleting!")
            dispatch({ type: DELETE_FAIL, payload: err })
        })
}








