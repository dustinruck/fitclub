// Path: client/src/pages/LoginPage.js

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import
'bootstrap/dist/css/bootstrap.min.css';
// import './LoginPage.css';
// import auth from '../auth';
import { useHistory } from 'react-router-dom'; //


function LoginPage() {
    // const history = useHistory();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     auth.login(() => {
    //         history.push('/classes');
    //     });
    // };
    
    return (
        <div>
        <h1>Login</h1>
        <Form>
        {/* <Form onSubmit={handleSubmit}> */}
            <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
    }


export default LoginPage;




