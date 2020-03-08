import * as Types from '../types/Types';
import Axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

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
