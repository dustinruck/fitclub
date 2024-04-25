import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function SignUpPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        passwordConfirmation: '',
    });
    const [userCreated, setUserCreated] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirmation) {
            setError("Passwords do not match!");
            return;
        }
        try {
            const response = await fetch('/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    password: formData.password,
                    email: formData.email,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserCreated(true);
                setNewUserInfo(data);
            } else {
                setError("Error during sign up.");
            }
        } catch (error) {
            console.error("Sign up error", error);
            setError("Error during sign up.");
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                {/* Username Field - Already Provided */}
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
                </Form.Group>
                {/* Email Field */}
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* First Name Field */}
                <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
                </Form.Group>
                {/* Last Name Field */}
                <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                </Form.Group>
                {/* Password Field */}
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </Form.Group>
                {/* Password Confirmation Field */}
                <Form.Group controlId="passwordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {userCreated && (
                <Alert variant="success">
                    User Created Successfully! Username: {newUserInfo.username}, Email: {newUserInfo.email}
                </Alert>
            )}
        </div>
    );
}

export default SignUpPage;
