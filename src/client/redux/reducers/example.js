
import { UPDATE } from '../actions/example';

const initialState = '';
const exampleReducer = (state = initialState, action) => {
  switch (action.type){
    case UPDATE:
      return 'Action was called and reducer fired.';
    default:
      return state;
    }
};

export default exampleReducer;
