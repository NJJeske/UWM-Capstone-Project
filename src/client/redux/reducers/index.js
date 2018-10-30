import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import entityReducer from './entityReducer';

export default combineReducers({
    data: entityReducer
});
