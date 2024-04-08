// Path: client/src/pages/SignUpPage.js

import React from 'react';
import { Form, Button } from 'react-bootstrap';

function SignUpPage() {
    return (
        <div>
        <h1>Sign Up</h1>
        <Form>
            <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
    
            <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password Confirmation" />
            </Form.Group>
    
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
    }


export default SignUpPage;