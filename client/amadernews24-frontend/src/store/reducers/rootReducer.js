import { combineReducers } from 'redux';
import tagReducer from './TagReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    tags: tagReducer,
    categorys: categoryReducer,
})

export default rootReducer
