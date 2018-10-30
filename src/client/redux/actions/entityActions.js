import axios from 'axios';

export const actions = {
    CREATE_ENTITY: 'CREATE_ENTITY',
    RETRIEVE_ENTITY: 'RETRIEVE_ENTITY',
    UPDATE_ENTITY: 'UPDATE_ENTITY',
    DELETE_ENTITY: 'DELETE_ENTITY',
    ERROR_ENTITY: 'ERROR_ENTITY',
};

const dispatchError = (dispatch, message, error) => dispatch({ type: actions.ERROR_ENTITY, message, error });

export const createEntity = ({ apiPath, entityRoot, newEntity }) => async dispatch => {
    try {
        const result = await axios.post(apiPath, newEntity);
        dispatch({
            type: actions.CREATE_ENTITY,
            entityRoot,
            newEntity: result.data,
        });
    } catch (error) {
        dispatchError(dispatch, 'Error creating project through API', error);
    }
};
