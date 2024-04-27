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
        // need to add submit logic here
        console.log('Submit result:', success, message, email);
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
