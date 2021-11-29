import React from 'react';

import {Link} from 'react-router-dom';
import classes from './Register.module.css';
import {Button, Form} from 'react-bootstrap';

const Login = () => {
	return (
		<div>
			<h1 className={classes.heading}>Login</h1>
			<Form className={`${classes.form} ${classes.boxShadow}`}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password"/>
				</Form.Group>
				<div className={classes.actions}>
					<Button variant="primary" type="submit">
						Login
					</Button>
					<p>
						Don't have an account? <Link to="/api/register">Register</Link>
					</p>
				</div>
			</Form>
		</div>
	);
};

export default Login;