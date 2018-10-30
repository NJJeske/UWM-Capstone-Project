import { actions } from '../actions/entityActions';
import { data as mock } from '../../../mock';

export default (state = mock || {}, action) => {
    const { type, entityType } = action;

    switch (type) {
        case actions.CREATE_ENTITY: {
            return {
                ...state,
                [entityType]: state[entityType].concat(action.newEntity),
            };
        }
        default:
            return state;
    }
};
