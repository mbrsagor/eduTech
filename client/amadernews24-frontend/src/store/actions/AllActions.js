import * as Types from '../types/Types';
import axios from 'axios';
const API_URL = 'http://127.0.0.0.1:8000';


export const fetchTag = () => async dispatch => {
    try {
        const resp = axios.get(`${API_URL}/api/article/tag/`)
        dispatch({
            type: Types.FETCH_TAG,
            payload: {
                tags: resp.data
            }
        })
    } catch (error) {
        console.error(error)
    }
}
