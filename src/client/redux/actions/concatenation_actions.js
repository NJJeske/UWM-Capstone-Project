import axios from 'axios';
export const CONCATENATION_RESULT = 'CONCATENATION_RESULT';
const API_CONCAT = '/api/concatenate';

export const createConcatenation = (val1, val2) =>
    async dispatch => {
        try {
            const result = await axios.get(`${API_CONCAT}/${val1}/${val2}`);
            if (result.data) {
                dispatch({
                    type: CONCATENATION_RESULT,
                    concatValue: result.data
                });
            }
        } catch (err) {
            console.log(err);
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };
