import * as Types from '../types/Types'

const tagReducer = (state = [], action) => {
    switch (action.type) {
        case Types.FETCH_TAG:
            return action.payload.tags
        case Types.CREATE_TAG:
            return [...state, action.payload]
        default: return state
    }
}

export default tagReducer
