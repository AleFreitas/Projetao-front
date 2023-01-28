// import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import React, { useContext } from "react";
// import { AuthContext } from "../components/AuthContext";

// export default function Cadastro() {
//   const navigate = useNavigate();
//   const { cadastro, setCadastro } = useContext(AuthContext);

//   const handleCadastro = (e) => {
//     setCadastro({
//       ...cadastro,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const fazerCadastro = (e) => {
//     e.preventDefault();

//     const requisicao = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, cadastro);
    
//     requisicao.then((req) => {
//       console.log(req.data)
//       setCadastro(req.data);
//       navigate("/");
//     });

//     requisicao.catch((err) => {
//       alert(err.response.data.message);
//     });
//   };

//   return (
//     <>
//       <Container>
//         <Text> MyWallet </Text>
//         <form onSubmit={fazerCadastro}>
//           <input
//             type="name"
//             name="name"
//             placeholder="Nome"
//             onChange={handleCadastro}
//             value={cadastro.name}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             onChange={handleCadastro}
//             value={cadastro.email}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Senha"
//             onChange={handleCadastro}
//             value={cadastro.password}
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirme a senha"
//             onChange={handleCadastro}
//             value={cadastro.confirmPassword}
//             required
//           />

//           <button type="submit">CADASTRAR</button>
//         </form>

//         <Div>
//           <Link to="/">
//             <TextLink>Já tem uma conta? Entre agora!</TextLink>
//           </Link>
//         </Div>
//       </Container>

//       <Link to="/Home">
//         <TextLink>Home</TextLink>
//       </Link>
//       <Link to="/nova-entrada">
//         <TextLink>Nova Entrada</TextLink>
//       </Link>
//       <Link to="/nova-saida">
//         <TextLink>Nova Saida</TextLink>
//       </Link>
//     </>
//   );
// }

// const Text = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 326px;
//   height: 50px;
//   font-family: "Saira Stencil One";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 32px;
//   line-height: 50px;
//   color: #ffffff;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   input {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: nowrap;
//     width: 100%;
//     margin-top: 13px;
//     width: 326px;
//     height: 58px;
//     font-family: "Raleway";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 23px;
//     border-radius: 8px;
//     box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
//     border-bottom: 0px;
//     border: none !important;
//     background-color: white !important;
//   }
//   button {
//     background-color: #a328d6;
//     margin-top: 13px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 18px 122px;
//     width: 326px;
//     height: 46px;
//     border-radius: 8px;
//     box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
//     border-bottom: 0px;
//     border: none !important;
//     font-family: "Raleway";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 20px;
//     line-height: 16px;
//     color: #ffffff;
//   }
// `;

// const TextLink = styled.label`
//   text-align: center;
//   text-decoration-line: underline;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 16px;
//   text-decoration-line: underline;
//   color: #ffffff;
// `;

// const Div = styled.div`
//   margin-top: 20px;
//   width: 299px;
//   height: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;