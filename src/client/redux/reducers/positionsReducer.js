import { positions as mock } from '../../../mock';

export default (state = mock || [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};
