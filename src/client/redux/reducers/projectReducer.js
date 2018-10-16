import { actions } from '../actions/projectActions';

export default (state = {}, action) => {
    switch (action.type) {
        case actions.CREATE_PROJECT:
            return { ...state, projects: state.projects.concat(action.newProject) };
        default:
            return state;
    }
};
