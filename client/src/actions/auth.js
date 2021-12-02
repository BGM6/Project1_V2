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

//Load User
//We need to check if theres a token in localstorage
//We do this by setting a global header by creating
// setAuthToken.js and set x-auth-token
export const loadUser = () => async dispatch => {
	//check if there is a token in localstorage
	//This sets the header with the token
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const response = await axios.get('/api/getuser');

		dispatch({
			type: USER_LOADED,
			payload: response.data
		});

		dispatch(loadUser);
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

//Login User
export const login = (email, password) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({email, password});

	try {
		const response = await axios.post('/api/login', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			//Returns the token
			payload: response.data
		});

		//This will loadUser right after submitting
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			console.log(err, 'Error in the user login');
		}
		dispatch({
			type: LOGIN_FAIL
		});
	}
};