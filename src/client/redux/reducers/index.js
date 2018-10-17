import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import projectsReducer from './projectsReducer';

export default combineReducers({
    projects: projectsReducer
});
