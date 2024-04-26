// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import Header from "./Header";
// import  '../css/login.css';
// const Login = () => {
//   return (
//     <>
//       <Header />

//       <div className="login-container ">
//         <div className="field">
//           <p className="control has-icons-left has-icons-right">
//             <input
//               className="input is-medium"
//               type="email"
//               placeholder="Email"
//             />
//             <span className="icon is-medium is-left">
//               <FontAwesomeIcon icon={faEnvelope} />
//             </span>
//             <span className="icon is-small is-right">
//               <FontAwesomeIcon icon={faCheck} />
//             </span>
//           </p>
//         </div>
//         <div className="field">
//           <p className="control has-icons-left">
//             <input
//               className="input is-medium"
//               type="password"
//               placeholder="Password"
//             />
//             <span className="icon is-small is-left">
//               <FontAwesomeIcon icon={faLock} />
//             </span>
//           </p>
//         </div>
//         <div className="field">
//           <p className="control">
//             <button className="button is-dark is-fullwidth">Login</button>
//           </p>
//         </div>
//         <div className="field">
//           <p className="control">
//               <a className="has-text-black has-text-weight-semibold">
//                 Forget Password
//               </a>
//               <p>  </p>
//               <a className="has-text-black has-text-weight-semibold">
//                 Create Account
//               </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
                localStorage.setItem('token', response.data.token);
                navigate('/classes');  // Use navigate instead of history.push
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
            <Header />
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

export default Login;
