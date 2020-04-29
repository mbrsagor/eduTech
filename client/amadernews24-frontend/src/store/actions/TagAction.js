import * as Types from '../types/Types';
import Axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

// Fetch tag
export const fetchTagAction = () => dispatch => {
    Axios.get(`${API_URL}/api/article/tag/`)
        .then(response => {
            dispatch({
                type: Types.FETCH_TAG,
                payload: {
                    tags: response.data
                }
            })
        })
        .catch(error => {
            console.log(error);
        })
}

// Create tag
export const createTagAction = (name) => dispatch => {
    Axios.post(`${API_URL}/api/article/tag/`, {name})
        .then(response => {
            dispatch({
                type: Types.CREATE_TAG,
                data:response.data
            })
        })
        .catch(error => {
            throw(error)
        })
}
