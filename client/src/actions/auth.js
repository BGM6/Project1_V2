import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT
} from './types';

//Register User
export const register = ({email, password}) => async dispatch => {
	const config = {headers: {'Content-Type': 'application/json'}};
	const body = JSON.stringify({email, password});

	try {
		const response = await axios.post('/api/register', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			//Returns the token
			payload: response.data
		});

	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			console.log(errors, 'ERROR IN USER REGISTER');
			return;
			// errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			types: REGISTER_FAIL
		});
	}
};