import { combineReducers } from 'redux';
import tagReducer from './TagReducer';
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
    tags: tagReducer,
    categorys: categoryReducer,
    locations: locationReducer,
})

export default rootReducer
