import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React from "react";


export default function Login() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = React.useState({
    name: "",
    password: ""
  });

  const handleForm = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const doLogin = (e) => {
    e.preventDefault();

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, {
      email: formLogin.email,
      password: formLogin.password
      
    });
    console.log("enviei",formLogin.email,formLogin.password);
    promise.then((res) => {
      console.log(res.data);
      alert("login efetuado com sucesso")
      //setFormLogin(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  };

  return (
    <>
      <Container>
        <Text> Nome da Loja </Text>
        <Link to={`/`} style={linkStyle}>
          <p>Voltar a Loja</p>
        </Link>
        <Form>
          <form onSubmit={doLogin}>
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
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
`;
const Container = styled.div`
  height: 1300px;
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
