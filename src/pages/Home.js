import styled from "styled-components";
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import user from "../img/user.png";
import bag from "../img/bag.png";
import { AuthContext } from "../providers/AuthContext";
import CartItems from "../components/CartItems";

export default function Rota() {
  const { token } = React.useContext(AuthContext)
  const { setToken } = React.useContext(AuthContext)
  const [products, setProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsPrice, setItemsPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/products`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setProducts(res.data.dados);
      setToken(res.data.token);
    });
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
        <Cartimg src={bag} alt={bag} onClick={()=>{setCartDisplay(true)}} />
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

      <Cart display={cartDisplay ? "" : "none"}>
        <CartTitle>
          <p>Shopping Cart</p>
          <ion-icon name="close-outline" onClick={()=>{setCartDisplay(false)}}></ion-icon>
        </CartTitle>
        <CartItems token={token} setPrice={setItemsPrice}/>
        <CartCheckoutDiv>
          <Details>
            <div>
              <h1>Subtotal</h1>
              <p>Shipping and taxes calculated at checkout.</p>
            </div>
            <p>{`$${cartItemsPrice.toFixed(2)}`}</p>
          </Details>
          <CheckoutRedirect>
            <button onClick={()=>{navigate("/checkout")}}>Checkout</button>
          </CheckoutRedirect>
        </CartCheckoutDiv>
      </Cart>
    </>
  );
}

const Cart = styled.div`
  display:${props => props.display};
  background-color: red;
  position:fixed;
  right:0;
  top:0;
  width:500px;
  height:100%;
  min-height:100vh;
  border-radius:20px;
  box-sizing:border-box;
  padding:20px;
`;

const CartTitle = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }ion-icon{
    font-weight: 700;
    font-size:30px;
    cursor:pointer;
  }
`;

const CartCheckoutDiv = styled.div`
  display:flex;
  flex-direction: column;
  background-color: green;
  width:100%;
  height:100px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-size: 18px;
  }
  div{
    h1{
      font-size:18px;
      line-height: 5px;
    }
    p{
      font-size:13px;
      line-height: 5px;
    }
  }
`;

const CheckoutRedirect = styled.div`
  display: flex;
  background-color: blue;
  justify-content: center;
  button{
    border:none;
    width:250px;
    height: 40px;
    font-size: 25px;
    border-radius: 5px;
    cursor:pointer
  }
`;


const Cartimg = styled.img`
  cursor:pointer;
`;

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
