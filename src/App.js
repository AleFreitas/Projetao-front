import React from "react";
import styled from "styled-components";
import { AuthContext } from "../src/components/AuthContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const [cadastro, setCadastro] = useState({
    email: "",
    name: "",
    password: "",
    confirmPpassword: "",
  });

  return (
    <AuthContext.Provider
      value={{
        form,
        setForm,
        user,
        setUser,
        cadastro,
        setCadastro,
        token,
        setToken,
      }}
    >
      <Container>
        projeto 15
        {/* <RoutersComponents /> */}
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
  justify-content: center;
`;

