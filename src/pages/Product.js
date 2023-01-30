import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../img/user.png";
import bag from "../img/bag.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

export default function Usuario() {
  const params = useParams();
  const { token } = React.useContext(AuthContext);
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/products/${params.id}`;
    const promise = axios.get(URL);
    promise.then((res) => setProduct(res.data));
    promise.catch((err) => console.log(err.data));
  }, []);

  if (product === undefined) {
    return <div>Carregando... </div>;
  }
  return (
    <>
      <Container>
        <Link to={`/sign-in`} style={linkStyle}>
          <img src={user} alt={user} />
        </Link>
        <Text> Nome da Loja </Text>
        <img src={bag} alt={bag} />
      </Container>

      <Link to={`/`} style={linkStyle}>
        <p>Voltar a Loja</p>
      </Link>

      <Products>
        <img src={product.image} alt={product.name} />
        <h1>
          {product.name} R$ {product.price},00
        </h1>
        <p>{product.description} </p>
        <button
          onClick={() => {
            const body = {
              "product":{
              "name":product.name,
              "price":product.price,
              "description":product.description,
              "image":product.image,
              "quantity":1
              }
            }
            const URL = `${process.env.REACT_APP_API_URL}/post-item`;
            const promise = axios.post(URL,body,config);
            promise.catch((err) => console.log(err.data));
          }}
        >
          Adicionar ao Carrinho
        </button>
      </Products>
    </>
  );
}

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
const linkStyle = {
  margin: "5px",
  textDecoration: "none",
  color: "#80b4a9",
};
const Container = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 120px;
  background: #80b4a9;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
`;
const Products = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;
  height: 600px;
  background: #ffffff;
  text-decoration: none;
  color: #0a334e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400 bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #0a334e;
  img {
    width: 300px;
    height: 600px;
  }
  h1 {
    width: 300px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400 bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #0a334e;
  }
  p {
    width: 300px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400 bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #0a334e;
  }
  button {
    border: none;
    width: 300px;
    height: 60px;
    font-size: 18px;
    border-radius: 5px;
    background-color: #0a334e;
    color: #ffffff;
    cursor: pointer;
  }
`;