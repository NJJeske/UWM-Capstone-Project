import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import concatenationReducer from './concatenation_reducer';
import palindromeReducer from './palindrome_reducer';
import projectReducer from './projectReducer';

export default combineReducers({
    concatenationReducer,
    palindromeReducer,
    projectReducer
});
