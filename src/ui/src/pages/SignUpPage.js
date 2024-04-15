// // Path: client/src/pages/SignUpPage.js

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
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
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirmation) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post('/api/users', {
                username: formData.username,
                firstname: formData.firstname,
                lastname: formData.lastname,
                password: formData.password,
                email: formData.email,
            });
            console.log(response.data);
            setUserCreated(true);
            setNewUserInfo(response.data);
        } catch (error) {
            console.error("Sign up error", error.response.data);
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
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
            </Form.Group>
            {/* Last Name Field */}
            <Form.Group controlId="lastName">
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


// import React from 'react';
// import { Form, Button } from 'react-bootstrap';

// function SignUpPage() {
//     return (
//         <div>
//         <h1>Sign Up</h1>
//         <Form>
//             <Form.Group controlId="formBasicFirstName">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control type="text" placeholder="First Name" />
//             </Form.Group>
//             <Form.Group controlId="formBasicLastName">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control type="text" placeholder="Last Name" />
//             </Form.Group>

//             <Form.Group controlId="formBasicUsername">
//             <Form.Label>Username</Form.Label>
//             <Form.Control type="text" placeholder="Username" />
//             </Form.Group>

//             <Form.Group controlId="formBasicPhoneNumber">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control type="text" placeholder="Phone Number" />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//             </Form.Text>
//             </Form.Group>
    
//             <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
    
//             <Form.Group controlId="formBasicPasswordConfirmation">
//             <Form.Label>Password Confirmation</Form.Label>
//             <Form.Control type="password" placeholder="Password Confirmation" />
//             </Form.Group>
    
//             <Button variant="primary" type="submit">
//             Submit
//             </Button>
//         </Form>
//         </div>
//     );
//     }


// export default SignUpPage;