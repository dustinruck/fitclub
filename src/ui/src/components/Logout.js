// Logout.js //

import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { LOGOUT } from '../context/Types';

const Logout = () => {
    const { user } = useContext(AuthContext);
    const { dispatch } = useContext(AuthContext);

    
    const handleLogout = () => {
        dispatch({
            type: LOGOUT,
        });
    }
    
    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
