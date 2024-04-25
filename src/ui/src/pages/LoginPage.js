import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/auth/authenticate', {
                username: formData.username,
                password: formData.password,
            });

            if (response.status === 200) {
                // Save JWT token to local storage or session storage
                localStorage.setItem('token', response.data.token);
                // Redirect to desired page, for example '/classes'
                history.push('/classes');
            } else {
                setError("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error", error);
            setError("Invalid username or password");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;
