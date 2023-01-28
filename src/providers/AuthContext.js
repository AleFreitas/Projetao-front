import React from "react";

export const AuthContext = React.createContext({});

export function AuthProvider(props){
    const [token,setToken] = React.useState({});

    return (
        <AuthContext.Provider value={{ token,setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}