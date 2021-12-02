import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

import {Container, Nav, Navbar} from 'react-bootstrap';
import classes from './Header.module.css';

const Header = ({isAuthenticated, logout}) => {

	const guessLinks = (
		<div className={classes.links}>
			<Nav.Link href="/calculate">Calculate</Nav.Link>
			<Nav.Link href="/register">Register</Nav.Link>
			<Nav.Link href="/login">Login</Nav.Link>
		</div>
	);

	const authLinks = (
		<div className={classes.links}>
			<Nav.Link href="/calculate">Calculate</Nav.Link>
			<Nav.Link href="/saved">Saved</Nav.Link>
			<Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>
		</div>
	);
	return (
		<Fragment>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand>OVP</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{isAuthenticated ? authLinks : guessLinks}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Header);