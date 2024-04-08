// Path: client/src/pages/LoginPage.js

import React from 'react';
import { Form, Button } from 'react-bootstrap';

function LoginPage() {
    return (
        <div>
        <h1>Login</h1>
        <Form>
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




