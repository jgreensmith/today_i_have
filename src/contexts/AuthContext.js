import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(false);

    const login = () => {
        if (!sessionStorage.getItem('auth-token')) {
            console.log('no auth token');
        } else {
            const authToken = '1234thisisatoken';
            if (sessionStorage.getItem('auth-token') === authToken) {
                console.log('token works');
                setUser(true);
            } else {
                console.log('bad-token');
            }
        }
    };

    const logout = () => {
        setUser(false);
        console.log('you just logged out');
    }

    return (
        <AuthContext.Provider value={{user, logout, login}}>
        {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
