import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import userSlice from '../../store/UserSlice';
import {Form, Button} from 'react-bootstrap';
import classes from './Register.module.css';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {isFetching, isSuccess, isError, errorMessage} = useSelector(state => state.user);

	return (
		<div>
			<h1 className={classes.heading}>Register</h1>
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
						Register
					</Button>
					<p>
						Already have an account? <Link to="/api/login">Login</Link>
					</p>
				</div>
			</Form>
		</div>
	);
};

export default Register;