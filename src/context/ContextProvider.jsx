import React, { createContext } from 'react';

export const AuthContext = createContext()
const ContextProvider = ({children}) => {
    const arman = {'arman':'Samrat'}
    const authInfo = {arman}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;