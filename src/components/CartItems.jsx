import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function CartItems(props) {
    const [cartItems, setCartItems] = useState([])
    const config = {
        headers: {
            "Authorization": `Bearer ${props.token}`
        }
    }
    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/cart-items`;
        const promise = axios.get(URL, config);
        promise.then((res) => {
            setCartItems(res.data);
        });
        promise.catch((err) => console.log(err.data));
    }, []);
    console.log(cartItems)

    return (
        <CartItemsDiv>
            {cartItems.length === 0 ? <p>Ainda não há itens no carrinho</p> : cartItems.map(i =>
                <CartItem>
                    <img src={i.image} />
                    <ProductDetails>
                        <div>
                            <h1>{i.name}</h1>
                            <p className="price">{`R$${i.price}`}</p>
                        </div>
                        <div>
                            <p className="quantity">{`Quantity ${i.quantity}`}</p>
                            <p className="remove">Remove</p>
                        </div>
                    </ProductDetails>
                </CartItem>
            )}

        </CartItemsDiv>
    );
}

const CartItemsDiv = styled.div`
  background-color: blue;
  width:100%;
  height:70%;
`;

const CartItem = styled.div`
    display:flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
    img{
        width:80px;
        height:90px;
        border-radius: 7px;
    }
`;
const ProductDetails = styled.div`
    display:flex;
    flex-direction: column;
    padding-left:10px;
    div{
        width:340px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
            font-size: 20px;
        }
        .remove{
            font-weight:700;
        }
        .price{
            font-weight: 400;
        }
        .quantity{

        }
    }
`;