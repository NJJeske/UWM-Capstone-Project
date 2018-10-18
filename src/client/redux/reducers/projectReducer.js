import { actions } from '../actions/projectActions';
import { projects as mock } from '../../../mock';

export default (state = mock || {}, action) => {
    switch (action.type) {
        case actions.CREATE_PROJECT:
            return { ...state, projects: state.projects.concat(action.newProject) };
        default:
            return state;
    }
};
