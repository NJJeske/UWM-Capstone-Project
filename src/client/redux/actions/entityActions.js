import axios from 'axios';

export const actions = {
    ENTITY_CREATE: 'ENTITY_CREATE',
    ENTITY_UPDATE: 'ENTITY_UPDATE',
    ENTITY_DELETE: 'ENTITY_DELETE',
    ENTITY_ERROR: 'ENTITY_ERROR',
};

export const createEntity = (entityType, newEntity) => async dispatch => {
    try {
        const result = await axios.post(`/${entityType}`, newEntity);
        dispatch({
            type: actions.ENTITY_CREATE,
            entityType,
            newEntity: result.data,
        });
    } catch (error) {
        error.message = `Error creating entity in '${entityType}' through API`;
        dispatch({
            type: actions.ENTITY_ERROR,
            entityType,
            entityId: newEntity.id,
            error
        });
    }
};

export const updateEntity = (entityType, updatedEntity) => async dispatch => {
    try {
        await axios.put(`/${entityType}/${updatedEntity.id}`, updatedEntity);
        dispatch({
            type: actions.ENTITY_UPDATE,
            entityType,
            updatedEntity
        });
    } catch (error) {
        error.message = `Error updating entity in '${entityType}' through API`;
        dispatch({
            type: actions.ENTITY_ERROR,
            entityType,
            entityId: updatedEntity.id,
            error
        });
    }
};

export const deleteEntity = (entityType, entityId) => async dispatch => {
    try {
        await axios.delete(`/${entityType}/${entityId}`);
        dispatch({
            type: actions.ENTITY_DELETE,
            entityType,
            entityId
        });
    } catch (error) {
        error.message = `Error deleting entity in '${entityType}' through API`;
        dispatch({
            type: actions.ENTITY_ERROR,
            entityType,
            entityId,
            error
        });
    }
};

// When no error is passed along reducer will interpret that as a request to clear.
export const clearErrorEntity = (entityType, entityId) => ({ type: actions.ENTITY_ERROR, entityType, entityId });
