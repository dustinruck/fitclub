// LoginForm.jsx // src/component/LoginForm.jsx

import { useRef, useState, useEffect } from 'react';

// Reactstrap
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";
// import Header from './Header';
// import Footer from './Footer';

import axios from '../api/axiosConfig';
const LOGIN_URL = '/api/v1/auth/authenticate';

const LoginForm = ({ email, onSubmitProp }) => {
    const userRef = useRef();
    const errRef = useRef();
    const [userEmail, setUserEmail] = useState(email || '');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);

    useEffect(() => {
        setErrorMessage('');
    }, [userEmail, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, { email: userEmail, password });
            console.log(JSON.stringify(response?.data));

            const { token, refreshToken, userId } = response?.data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('refreshToken', refreshToken);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('email', userEmail);

            setUserEmail('');
            setPassword('');
            setSuccess(true);

            if (typeof onSubmitProp === 'function') {
                onSubmitProp(true, "Logged in successfully!", userEmail);
            } else {
                console.error('onSubmitProp is not a function');
            }
            
        } catch (err) {
            if (!err?.response) {
                onSubmitProp(false, 'No Server Response', null);
            } else if (err.response?.status === 400) {
                setErrorMessage('Invalid Email or Password');
                errRef.current.focus();
            } else {
                console.log(err);
                onSubmitProp(false, "Login failed", null);
                setErrorMessage('Login failed');
                errRef.current.focus();
            }
        }
    };

    return (
        <div className="content">
            <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="pr-md-1">
                        <FormGroup>
                            <label htmlFor="email">Email:</label>
                            <Input
                                type="text"
                                id="email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUserEmail(e.target.value)}
                                value={userEmail}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-md-1">
                        <FormGroup>
                            <label htmlFor="password">Password:</label>
                            <Input
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pl-md-1">
                        <button className='btn btn-success'>Sign In</button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default LoginForm;
