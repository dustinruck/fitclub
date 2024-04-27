import { useRef, useState, useEffect } from 'react';

// Reactstrap
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";
import Header from './Header';
import Footer from './Footer';

import axios from '../api/axiosConfig';
const LOGIN_URL = '/auth/login';

const Login = ({ props }) => {

    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState(props.email ? props.email : '');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
               { email, password }
            );
            console.log(JSON.stringify(response?.data));

            const token = response?.data?.token;
            const refreshToken = response?.data?.refreshToken;
            // const isAdmin = response?.data?.isAdmin;
            const userId = response?.data?.userId;
            const email = response?.data?.email;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('refreshToken', refreshToken);
            // sessionStorage.setItem('isAdmin', isAdmin);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('email', email);


            setEmail('');
            setPassword('');
            setSuccess(true);

            props.onSubmitProp(true, "Logged in successfully!", email);

        } catch (err) {

            if (!err?.response) {
                props.onSubmitProp(false, 'No Server Response', null);
            } else if (err.response?.data?.message) {
                console.log(err);
                console.log(err.response.data.message);
                props.onSubmitProp(false, err.response.data.message, null);
            } else {
                console.log(err);
                props.onSubmitProp(false, "Login failed", null);
            }
            errRef.current.focus();
        } 
    }

    return (
        <>
            <Header />
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    defaultValue={props.email ? props.email : ''}
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

                {/* <p>
                    Don't have an account?<br />
                    <span className="line">
                        <a href="#">Sign Up</a>
                    </span>
                </p> */}
            </div>  
            <Footer />
        </>
    )
}

export default Login;