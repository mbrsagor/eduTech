import * as Types from '../types/Types';
import Axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export const categoryFetchAction = () => dispatch => {
    Axios.get(`${API_URL}/api/article/category/`)
        .then(response => {
            dispatch({
                type: Types.FETCH_CATEGORY,
                payload: {
                    categorys: response.data
                }
            })
        })
        .catch(error => {
            console.log(error);
        })
}
