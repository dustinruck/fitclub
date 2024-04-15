// Home //

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
// import { useAuth } from '../context/Auth';
import LogoutButton from '../components/LogoutButton';
import SignupButton from '../components/SignupButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyCarousel from '../components/Carousel';

function HomePage() {
    // const { authTokens } = useAuth();
    return (
        <div>
            <Header />
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Home</Navbar.Brand>
            </Navbar>
            
            <div>
                <MyCarousel />
                {/* {authTokens ? <LogoutButton /> : <SignupButton />} */}
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;