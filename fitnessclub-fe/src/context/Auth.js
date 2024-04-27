import { createContext, useState } from "react";
// import axios from "../api/axiosConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        email: null
    });

    // Function to update auth state
    const login = (token, email) => {
        setAuth({ token, email });
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', email);
        setAuth({ token, email });

    };

    const logout = () => {
        setAuth({ token: null, email: null });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        setAuth({ token: null, email: null });
    };

    const onSubmitProp = (success, message, email) => {
        if (success) {
            console.log("Login successful:", message);
            // we fetch user details here, or they are returned in the login response hopefully??
            login('token_received_from_server', { email: email, name: 'User Name' });
        } else {
            console.error("Login failed:", message);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
