import axios from 'axios';
import config from '../config';
const { serverURL } = config;

export const actions = {
    ENTITY_CREATE: 'ENTITY_CREATE',
    ENTITY_FETCH: 'ENTITY_FETCH',
    ENTITY_UPDATE: 'ENTITY_UPDATE',
    ENTITY_DELETE: 'ENTITY_DELETE',
    ENTITY_ERROR: 'ENTITY_ERROR',
    ENTITY_FETCH_ERROR: 'ENTITY_FETCH_ERROR',
};

export const fetchEntities = entityType => async dispatch => {
    try {
        const result = await axios.get(`${serverURL}/${entityType}`);
        dispatch({
            type: actions.ENTITY_FETCH,
            entityType,
            loadedEntities: result.data,
        });
    } catch (error) {
        error.message = `Error loading entities of type '${entityType}' through API`;
        dispatch({
            type: actions.ENTITY_FETCH_ERROR,
            entityType,
            error
        });
    }
};

export const createEntity = (entityType, newEntity) => async dispatch => {
    try {
        const result = await axios.post(`${serverURL}/${entityType}`, { newEntity });
        dispatch({
            type: actions.ENTITY_CREATE,
            entityType,
            newEntity: result.data,
        });
    } catch (error) {
        error.message = `Error creating entity of type '${entityType}' through API`;
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
        await axios.put(`${serverURL}/${entityType}/${updatedEntity.id}`, { updatedEntity });
        dispatch({
            type: actions.ENTITY_UPDATE,
            entityType,
            updatedEntity
        });
    } catch (error) {
        error.message = `Error updating entity of type '${entityType}' through API`;
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
        await axios.delete(`${serverURL}/${entityType}/${entityId}`);
        dispatch({
            type: actions.ENTITY_DELETE,
            entityType,
            entityId
        });
    } catch (error) {
        error.message = `Error deleting entity of type '${entityType}' through API`;
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
