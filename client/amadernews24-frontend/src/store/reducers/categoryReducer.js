import * as Types from '../types/Types'

const categoryReducer = (status = [], action) => { 
    switch (action.type) {
        case Types.FETCH_CATEGORY:
            return action.payload.categorys
        default: return status
    }
}

export default categoryReducer;
