import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

import classes from './Header.module.css';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const guessLinks = (
		<div className={classes.links}>
			<Nav.Link href="/api/calculate">Calculate</Nav.Link>
			<Nav.Link href="/api/register">Register</Nav.Link>
			<Nav.Link href="/api/login">Login</Nav.Link>
		</div>
	);

	const authLinks = (
		<div className={classes.links}>
			<Nav.Link href="/api/calculate">Calculate</Nav.Link>
			<Nav.Link href="/api/saved">Saved</Nav.Link>
			<Nav.Link href="api/logout">Logout</Nav.Link>
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
							{isLoggedIn ? authLinks : guessLinks}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default Header;