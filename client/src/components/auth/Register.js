import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import userSlice from '../../store/UserSlice';
import {Form, Button} from 'react-bootstrap';
import classes from './Register.module.css';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {isFetching, isSuccess, isError, errorMessage} = useSelector(state => state.user);

	const formSubmitHandler = event => {
		event.preventDefault();
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<h1 className={classes.heading}>Register</h1>
			<Form onSubmit={formSubmitHandler} className={`${classes.form} ${classes.boxShadow}`}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email"
						value={email}
						type="email"
						onChange={event => setEmail(event.target.value)}
						placeholder="Enter email"/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						value={password}
						type="password"
						onChange={event => setPassword(event.target.value)}
						placeholder="Password"/>
				</Form.Group>
				<div className={classes.actions}>
					<Button variant="primary" type="submit">
						Register
					</Button>
					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</div>
			</Form>
		</div>
	);
};

export default Register;