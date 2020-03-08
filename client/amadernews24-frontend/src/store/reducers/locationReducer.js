import * as Types from '../types/Types';

const locationReducer = (state=[], action) => {
    switch (action.type) {
        case Types.FETCH_LOCATION:
            return action.payload.locations
        default: return state
    }
}

export default locationReducer
