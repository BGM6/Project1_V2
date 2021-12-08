import React from 'react';

import {Link} from 'react-router-dom';

import classes from './Landing.module.css';

const Landing = () => {
	return (
		<div className={classes.main}>
			<h1>Welcome</h1>
			<p>Create an account or login to save your calculation or click <Link to="/calculation">here</Link> to do basic
				calculation.</p>
		</div>
	);
};

export default Landing;