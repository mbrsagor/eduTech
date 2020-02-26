import { combineReducers } from 'redux'
import tagReducer from './TagReducer'

const rootReducer = combineReducers({
    tags: tagReducer,
})

export default rootReducer
