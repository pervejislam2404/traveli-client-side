import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';


export const travelContext = createContext()

const AuthContext = ({children}) => {

    const myValue = UseFirebase()
    return (
        <travelContext.Provider value={myValue}>
            {children}
        </travelContext.Provider> 
    );
};

export default AuthContext;