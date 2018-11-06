import { combineReducers } from "redux";
import educationReducer from "./educationReducer";
import positionsReducer from "./positionsReducer";
import projectsReducer from "./projectsReducer";
import entityReducer from "./entityReducer";

export default combineReducers({
  education: educationReducer,
  positions: positionsReducer,
  projects: projectsReducer,
  data: entityReducer
});
