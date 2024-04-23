// Header //

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import './Header.css';

function Header() {
    return (
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/" className="logo">ZEN</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/classes">CLASSES</Nav.Link>
                    <Nav.Link as={Link} to="/calendar">CALENDAR</Nav.Link>
                    <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                    <Nav.Link as={Link} to="/profile">PROFILE</Nav.Link>
                    <Nav.Link as={Link} to="/admin">ADMIN</Nav.Link>
                </Nav>
                <LoginButton />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
