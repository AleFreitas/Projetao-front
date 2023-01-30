import React from "react";
import styled from "styled-components";
import { AuthContext } from "./providers/AuthContext";
import { useState } from "react";
import RoutersComponents from "./RoutersComponents";
import GlobalStyle from "./styles/GlobalStyle";
export default function App() {
  const [token, setToken] = useState("");
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const [formCadastro, setFormCadastro] = useState({
    email: "",
    name: "",
    password: "",
    confirmPpassword: "",
  });
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
      <GlobalStyle/>
      <Container>
        <RoutersComponents />
      </Container>
    </AuthContext.Provider>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: f9f9f9f;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;
