// Login.js //

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../context/Types';

const Login = () => {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(AuthContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === ' [email protected]' && password === 'password') {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { email },
            });
        }
        else {
            dispatch({
                type: LOGIN_FAIL,
            });
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <button type="submit">Login</button> */}
            </form>
        </div>
    );
}

export default Login;
