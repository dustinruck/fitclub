// Header //

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </Nav>
                <LoginButton />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

