// import { Form } from "react-router-dom";
// import Header from "./Header";
// import React from "react";
// const Register = () => {
//     const handelSignup = ()=>{

//     };
//   return (
//     <>
//       <Header />
//       <form onSubmit={handelSignup}></form>
//       <div
//         className="container box p-6 mt-6
//                 has-background-light"
//       >
//         <h1
//           className="title has-text-centered 
//                  has-text-black"
//         >
//           Become A Memeber
//         </h1>
//         <h2 className="subtitle has-text-centered">
//           you are one step away from sending you a quotation
//         </h2>
//         <form action="">
//           <div className="field">
//             <label className="label">Name</label>
//             <div
//               className="control has-icons-left 
//                       has-icons-right"
//             >
//               <input
//                 className="input"
//                 type="text"
//                 placeholder="Enter your name"
//               />
//               <span className="icon is-small is-left">
//                 <i className="fas fa-user"></i>
//               </span>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Last Name</label>
//             <div
//               className="control has-icons-left 
//                       has-icons-right"
//             >
//               <input
//                 className="input "
//                 type="text"
//                 placeholder="Enter your last name"
//               />
//               <span className="icon is-small is-left">
//                 <i className="fas fa-user"></i>
//               </span>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Email</label>
//             <div
//               className="control has-icons-left 
//                       has-icons-right"
//             >
//               <input
//                 className="input is-danger"
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//               />
//               <span className="icon is-small is-left">
//                 <i className="fas fa-envelope"></i>
//               </span>
//             </div>
//             <p class="help is-danger">This email is invalid</p>
//           </div>

//           <div className="field">
//             <label className="label">Password</label>
//             <div
//               className="control has-icons-left 
//                       has-icons-right"
//             >
//               <input
//                 className="input is-danger"
//                 type="password"
//                 placeholder="Enter your password"
//               />
//               <span className="icon is-small is-left">
//                 <i className="fas fa-key"></i>
//               </span>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Phone Number</label>
//             <div
//               className="control has-icons-left 
//                       has-icons-right"
//             >
//               <input
//                 className="input is-danger"
//                 type="password"
//                 placeholder="Enter your phone number"
//               />
//               <span className="icon is-small is-left">
//                 <i class="fa-solid fa-phone"></i>
//               </span>
//             </div>
//           </div>

//           <div className="field is-grouped">
//             <div className="control">
//               <button type="submit" className="button is-dark">
//                 Sign up
//               </button>
//             </div>
//             <div className="control">
//               <button className="button  is-light">Cancel</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Register;

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from './Header';

function Register() {
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
            const response = await axios.post('/api/v1/auth/register', {
                username: formData.username,
                firstname: formData.firstname,
                lastname: formData.lastname,
                password: formData.password,
                email: formData.email,
            });

            if (response.status === 200) {
                setUserCreated(true);
                setNewUserInfo(response.data);
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
            <Header />
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

export default Register;

