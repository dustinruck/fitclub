// Auth.js //

import React, { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

// initial state
const initialState = {
  user: null,
};

// create context
export const AuthContext = createContext(initialState);

// provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


