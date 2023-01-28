import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../img/user.png";
import bag from "../img/bag.png";
import { useNavigate } from "react-router-dom";

export default function Usuario() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/products/`;
    const promise = axios.get(URL ,{ params: {id:`${productId}`} });
    promise.then((res) => setProduct(res.data));
    promise.catch((err) => console.log(err.data));
  }, []);

  if (product === undefined) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Container>
        <img src={user} alt={user} />
        <p> Nome da loja </p>
        <img src={bag} alt={bag} />
      </Container>

      <Link to={`/`} style={linkStyle}>
        <p>Voltar a Loja</p>
      </Link>
      <Products>
        <img src={product.image} alt={product.name} />
        <p>
          {product.name} {product.price}
        </p>
        {product.description}
      </Products>
    </>
  );
}

const linkStyle = {
  margin: "1rem",
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
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.04em;
    color: #0a334e;
  }
`;
const Products = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 95%;
  height: 600px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  text-decoration: none;
  color: #0a334e;
`;
