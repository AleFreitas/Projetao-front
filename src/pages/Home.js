import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../img/user.png";
import bag from "../img/bag.png";

export default function Rota() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/products`;
    const promise = axios.get(URL);
    promise.then((res) => setProducts(res.data));
    promise.catch((err) => console.log(err.data));
  }, []);
  if (products === undefined) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Container>
        <img src={user} alt={user} />
        <p> Nome da loja </p>
        <img src={bag} alt={bag} />
      </Container>

      <Products>
        {products.map((product) => (
          <Product key={product.name}>
            <Link to={`/products/${product._id}`} style={linkStyle}>
              <img src={product.image} alt={product.name} />
              <p>
                {product.name} {product.price}
              </p>
              {/* {product.description} */}
            </Link>
          </Product>
        ))}
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
const Product = styled.div`
  width: 200px;
  height: 360px;
  margin-left: 70px;
  margin-bottom: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  justify-content: center;
  img {
    margin-top:10px;
    width: 150px;
    height: 300px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #0a334e;
  }
`;
