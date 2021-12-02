import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {connect} from 'react-redux';
import {register} from '../../actions/auth';

import {Form, Button} from 'react-bootstrap';
import classes from './Register.module.css';

const Register = ({register, isAuthenticated}) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/calculate');
		}
	}, [isAuthenticated]);

	const formSubmitHandler = event => {
		event.preventDefault();
		if (password !== password2) {
			alert('Password do not match.');
			setEmail('');
			setPassword('');
			setPassword2('');
		} else {
			register({email, password});
			setEmail('');
			setPassword('');
			setPassword2('');
		}
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
						placeholder="Enter email"
						required/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						value={password}
						type="password"
						onChange={event => setPassword(event.target.value)}
						placeholder="Password"
						required/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword2">
					<Form.Label>Re-enter password</Form.Label>
					<Form.Control
						name="password2"
						value={password2}
						type="password"
						onChange={event => setPassword2(event.target.value)}
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
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register})(Register);