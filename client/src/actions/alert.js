import {SET_ALERT} from './types';

export const setAlert = (msg, userExists) => dispatch => {
	dispatch({
		type: SET_ALERT,
		payload: {msg, userExists}
	});
};

