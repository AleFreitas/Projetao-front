import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

export default function Login() {
  const { token } = React.useContext(AuthContext);
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  const navigate = useNavigate();
  const { formLogin, setFormLogin } = useContext(AuthContext);

  const handleForm = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const fazerLogin = (e) => {
    e.preventDefault();

    const requisicao = axios.post(
      `${process.env.REACT_APP_API_URL}/sign-in`,
      formLogin,
      config
    );

    requisicao.then((req) => {
      console.log(req.data);
      setFormLogin(req.data);
      localStorage.removeItem("")
      navigate('/')
    });

    requisicao.catch((err) => {
      alert(err.response.data);
    });
  };

  return (
    <>
      <Container>
        <Text> Serenity </Text>
        <Link to={`/`} style={linkStyle}>
          <p>Voltar a Loja</p>
        </Link>
        <Form>
          <form onSubmit={fazerLogin}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleForm}
              value={formLogin.email}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleForm}
              value={formLogin.password}
              required
            />

            <button type="submit">Entrar</button>
          </form>
        </Form>

        <Div>
          <Link to="/sign-up">
            <TextLink>Primeira vez? Cadastre-se!</TextLink>
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
  margin-bottom:50px;
  line-height: 50px;
  color: #ffffff;
  text-shadow: 2px 2px #0a334e;
`;
const Container = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #80b4a9;
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