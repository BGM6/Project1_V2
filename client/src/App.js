import React, {Fragment} from 'react';
import {Route, Routes, Navigate, Link} from 'react-router-dom';

import Header from './components/layouts/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const App = () => {
	return (
		<Fragment>
			<Header/>
			<div className="container">
				<Routes>
					<Route path="/api/register" element={<Register/>}/>
					<Route path="/api/login" element={<Login/>}/>
				</Routes>
			</div>
		</Fragment>
	);
};

export default App;