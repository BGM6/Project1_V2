import {SET_ALERT} from '../actions/types';

const initialState = {
	msg: '',
	userExists: false,
	id: null,
};

const alertReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_ALERT:
			return {
				...state,
				...payload,
				msg: 'User already exists',
				userExists: true
			};
		default:
			return state;
	}
};

export default alertReducer;