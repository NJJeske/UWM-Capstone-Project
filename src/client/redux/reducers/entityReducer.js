import { actions } from '../actions/entityActions';
import { omit } from 'lodash';
import { data as mock } from '../../../mock';

export default (state = mock || {}, action) => {
    const { type, entityType } = action;

    switch (type) {
        case actions.ENTITY_CREATE: {
            const { newEntity } = action;
            return {
                ...state,
                [entityType]: state[entityType].concat(newEntity),
            };
        }
        case actions.ENTITY_UPDATE: {
            const { updatedEntity } = action;
            return {
                ...state,
                [entityType]: state[entityType].map(entity => {
                    return entity.id === updatedEntity.id ? updatedEntity : entity;
                }),
            };
        }
        case actions.ENTITY_DELETE: {
            const { entityId } = action;
            return {
                ...state,
                [entityType]: state[entityType].filter(entity => entity.id === entityId),
            };
        }
        case actions.ENTITY_ERROR: {
            // If passed an error then bind to entity. Otherwise clear entity of errors.
            const { entityId, error } = action;
            return {
                ...state,
                [entityType]: state[entityType].map(entity => {
                    if (entity.id === entityId) {
                        if (error) {
                            return { ...entity, error };
                        } else {
                            return omit(entity, 'error');
                        }
                    }
                    return entity;
                }),
            };
        }
        default:
            return state;
    }
};
