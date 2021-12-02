import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import classes from './Register.module.css';
import {Button, Form} from 'react-bootstrap';

const Login = ({isAuthenticated, login}) => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/calculate');
		}
	}, [isAuthenticated]);

	const formSubmitHandler = event => {
		event.preventDefault();
		login(email, password);
		setEmail('');
		setPassword('');
	};

	const emailInputHandler = event => setEmail(event.target.value);
	const passwordInputHandler = event => setPassword(event.target.value);

	return (
		<div>
			<h1 className={classes.heading}>Login</h1>
			<Form onSubmit={formSubmitHandler} className={`${classes.form} ${classes.boxShadow}`}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={emailInputHandler}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={passwordInputHandler}
						required/>
				</Form.Group>
				<div className={classes.actions}>
					<Button variant="success" type="submit">
						Login
					</Button>
					<p>
						Don't have an account? <Link to="/register">Register</Link>
					</p>
				</div>
			</Form>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {login})(Login);