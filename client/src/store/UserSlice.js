import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
	'users/signupUser',
	async ({email, password}, thunkAPI) => {
		try {
			const body = JSON.stringify({email, password});
			const config = {
				headers: {'Content-Type': 'application/json'}
			};

			const response = await axios.post('localhost:5000/api/register', body, config);
			console.log(response.data);
		} catch (err) {
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: {
		email: '',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
	},
	reducers: {},
	extraReducers: {}
});

export default userSlice;
export const userAction = userSlice.actions;