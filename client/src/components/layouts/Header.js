import React, {Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Header = () => {
	return (
		<Fragment>
			<Navbar bg="light"   expand="lg">
				<Container>
					<Navbar.Brand href="#home">OVP</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Calculate</Nav.Link>
							<Nav.Link href="#link">Saved</Nav.Link>
							<Nav.Link href="#link">Login</Nav.Link>
							<Nav.Link href="#link">Sign Out</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default Header;