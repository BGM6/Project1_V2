import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

const initialState = {err: null};

const alertReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case SET_ALERT:
			return {
				...state,
				...payload,
				err: true
			};
		case REMOVE_ALERT:
			return initialState;
		default:
			return state;
	}
};

export default alertReducer;