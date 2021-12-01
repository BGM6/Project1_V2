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
			const response = await axios.post('/api/register', body, config);
			console.log(response.data);

		} catch (err) {
			console.log('Error', err.response.data);
			return thunkAPI.rejectWithValue(err.response.data);
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
	reducers: {
		clearState: state => {
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;
			return state;
		}
	},
	extraReducers: {
		[signupUser.fulfilled]: (state, {payload}) => {
			state.isFetching = false;
			state.isSuccess = true;
			state.email = payload.user.email;
		},
		[signupUser.pending]: (state) => {
			state.isFetching = true;
		},
		[signupUser.rejected]: (state, {payload}) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload.message;
		}
	}
});

export default userSlice;
export const userAction = userSlice.actions;