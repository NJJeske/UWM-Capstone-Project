import axios from 'axios';

export const API_PATH = '/api/projects';

export const actions = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    RETRIEVE_PROJECT: 'RETRIEVE_PROJECT',
    UPDATE_PROJECT: 'UPDATE_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    ERROR_PROJECT: 'ERROR_PROJECT',
};

const dispatchError = (dispatch, message, error) => dispatch({ type: actions.ERROR_PROJECT, message, error });

// Assumes newProject is already loaded with userId - may want to move that
// request preparing here instead (userId, auth stuff if needed, ...)
export const createProject = newProject => async dispatch => {
    try {
        const result = await axios.post(API_PATH, newProject);
        dispatch({
            type: actions.CREATE_PROJECT,
            newProject: result.data,
        });
    } catch (error) {
        dispatchError(dispatch, 'Error creating project through API', error);
    }
};
