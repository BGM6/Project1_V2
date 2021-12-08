import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

import {Container, Nav, Navbar} from 'react-bootstrap';
import classes from './Header.module.css';

const Header = ({isAuthenticated, logout}) => {

	const guessLinks = (
		<Fragment>
			<Nav.Link><Link to="/calculate">Calculate</Link></Nav.Link>
			<Nav.Link><Link to="/register">Register</Link></Nav.Link>
			<Nav.Link><Link to="/login">Login</Link></Nav.Link>
		</Fragment>
	);

	const authLinks = (
		<Fragment>
			<Nav.Link><Link to="/calculate">Calculate</Link></Nav.Link>
			<Nav.Link><Link to="/saved">Saved</Link></Nav.Link>
			<Nav.Link onClick={logout}> <Link to="/logout">Logout</Link></Nav.Link>
		</Fragment>
	);
	return (
		<Fragment>
			<Navbar bg="dark" variant="dark">
				<Container className={classes.navContainer}>
					<div>
						<Navbar.Brand><Link to="/"><span style={{color: 'white'}}>OVP</span></Link></Navbar.Brand>
					</div>
					<div>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className={`${classes.links}`}>
								{isAuthenticated ? authLinks : guessLinks}
							</Nav>
						</Navbar.Collapse>
					</div>
				</Container>
			</Navbar>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Header);