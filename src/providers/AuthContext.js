import React from "react";

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
  const [token, setToken] = React.useState({});
  const [formLogin, setFormLogin] = React.useState({});
  const [formCadastro, setFormCadastro] = React.useState({});
  
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        formLogin,
        setFormLogin,
        formCadastro,
        setFormCadastro,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
