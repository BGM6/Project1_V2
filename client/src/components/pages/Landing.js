import React from 'react';

import {Link} from 'react-router-dom';

import classes from './Landing.module.css';
import Card from '../UI/Card';

const Landing = () => {
	return (
		<Card className={classes.card}>
			<div className={classes.main}>
				<h1>Welcome To GramsCal</h1>
				<p>You must create an account/login to save your calculation
					or click <Link to="/calculation"><span className={`${classes.btn} bg-primary`}>here</span></Link> to do basic
					calculation.</p>
			</div>
		</Card>
	);
};

export default Landing;