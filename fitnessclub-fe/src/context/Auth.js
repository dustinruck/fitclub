import { createContext, useState } from "react";
// import axios from "../api/axiosConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
    const [auth, setAuth] = useState({
        // user: null,
        // token: null,
        // error: null,
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}