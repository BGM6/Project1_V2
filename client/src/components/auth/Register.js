import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {connect} from 'react-redux';
import {register} from '../../actions/auth';

import Modal from '../UI/Modal';

import {Form, Button} from 'react-bootstrap';
import classes from './Register.module.css';

const Register = ({register, isAuthenticated, alert}) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [errorModal, setErrorModal] = useState(null);
	const [userExists, setUserExists] = useState(null);

	useEffect(() => {
		if (alert.err) {
			setUserExists({
				title: 'Registration Error',
				message: 'Email already exists.'
			});
		}
	}, [alert.err]);

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/calculate');
		}
	}, [isAuthenticated, navigate]);

	const formSubmitHandler = event => {
		event.preventDefault();
		if (password !== password2) {
			setErrorModal({
				title: 'Registration Error',
				message: 'Passwords do not match.'
			});

		} else {
			register({email, password});
		}
	};

	const errorHandler = () => {
		setErrorModal(null);
		setPassword('');
		setPassword2('');
	};

	const userExistsHandler = () => {
		setUserExists(null);
	};

	const emailInputHandler = event => setEmail(event.target.value);
	const passwordInputHandler = event => setPassword(event.target.value);
	const password2InputHandler = event => setPassword2(event.target.value);

	return (
		<div>
			{errorModal && <Modal title={errorModal.title} message={errorModal.message} onConfirm={errorHandler}/>}
			{userExists && <Modal title={userExists.title} message={userExists.message} onConfirm={userExistsHandler}/>}
			<h1 className={classes.heading}>Register</h1>
			<Form onSubmit={formSubmitHandler} className={`${classes.form} ${classes.boxShadow}`}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email"
						value={email}
						type="email"
						onChange={emailInputHandler}
						placeholder="Enter email"
						required/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						value={password}
						type="password"
						onChange={passwordInputHandler}
						placeholder="Password"
						required/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword2">
					<Form.Label>Re-enter password</Form.Label>
					<Form.Control
						name="password2"
						value={password2}
						type="password"
						onChange={password2InputHandler}
						placeholder="Re-enter password"
						required/>
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

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	alert: state.alert
});

export default connect(mapStateToProps, {register})(Register);