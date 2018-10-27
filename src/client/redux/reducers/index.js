import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import educationReducer from './educationReducer';
import positionsReducer from './positionsReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
    education: educationReducer,
    positions: positionsReducer,
    projects: projectsReducer
});
