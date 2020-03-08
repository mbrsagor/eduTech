import * as Types from '../types/Types';
import Axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export const fetchLocation = () => dispatch => {
    Axios.get(`${API_URL}/api/article/location/`)
        .then(response => {
            // console.log(response.data)
            dispatch({
                type: Types.FETCH_LOCATION,
                payload: {
                    locations: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}
