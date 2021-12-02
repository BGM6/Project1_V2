import React, {Fragment, useEffect} from 'react';
import {Route, Routes, Navigate, Link} from 'react-router-dom';

import Header from './components/layouts/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

//Redux
import {Provider} from 'react-redux';
import store from '../src/store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		store.dispatch(loadUser());
	}, [localStorage.token]);

	return (
		<Fragment>
			<Provider store={store}>
				<Header/>
				<div className="container">
					<Routes>
						<Route path="/register" element={<Register/>}/>
						<Route path="/login" element={<Login/>}/>
					</Routes>
				</div>
			</Provider>
		</Fragment>
	);
};

export default App;