import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

export default function Cadastro() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
 
  function doRegister(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("senhas diferentes");
    }
    
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, {
      name: form.name,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword 
    });
    promise.then((res) => console.log(res.data));
    promise.catch((err) => alert(err.response.data.message));
  }
  
  return (
    <>
      <Container>
        <Text> Serenity </Text>
        <Link to={`/`} style={linkStyle}>
          <p>Voltar a Loja</p>
        </Link>
        <Form>
          <form onSubmit={doRegister}>
            <input
              type="text"
              name="name"
              required
              placeholder="Nome"
              onChange={handleForm}
              value={form.name}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleForm}
              value={form.email}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleForm}
              value={form.password}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
              onChange={handleForm}
              value={form.confirmPassword}
              required
            />

            <button type="submit">CADASTRAR</button>
          </form>
        </Form>

        <Div>
          <Link to="/sign-in">
            <TextLink>Já tem uma conta? Entre agora!</TextLink>
          </Link>
        </Div>
      </Container>
    </>
  );
}
const linkStyle = {
  margin: "5px",
  textDecoration: "none",
  color: "#0a334e",
};
const Text = styled.div`
  display: flex;
  justify-content: center;
  width: 326px;
  height: 50px;
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 50px;
  margin-bottom:30px;
  color: #ffffff;
  text-shadow: 2px 2px #0a334e;
`;
const Container = styled.div`
  height:100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: #80b4a9;
`;
const Form = styled.div`
  input {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    margin-top: 13px;
    width: 326px;
    height: 58px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
    border-bottom: 0px;
    border: none !important;
    background-color: white !important;
  }
  button {
    background-color: #0a334e;
    margin-top: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    width: 326px;
    height: 46px;
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
    border-bottom: 0px;
    border: none !important;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 16px;
    color: #ffffff;
  }
`;

const TextLink = styled.label`
  margin-top: 46px;
  text-align: center;
  text-decoration-line: underline;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #0a334e;
`;

const Div = styled.div`
  margin-top: 20px;
  width: 299px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
