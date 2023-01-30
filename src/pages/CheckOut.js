import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthContext.js";

export default function CheckOut() {
  const [form, setForm] = useState({});
  const [products, setProducts] = useState([]);
  const [balance, setBalance] = useState(0);
  const nav = useNavigate();
  const { token } = useContext(AuthContext);
  console.log(token);

  useEffect(() => {
    if (!token) {
      nav("/sign-in");
    }
    const authorization = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(authorization)
    axios
      .get(`${process.env.REACT_APP_API_URL}/cart-items`, authorization)
      .then((res) => {
        setProducts(res.data);
      });
      const URL = `${process.env.REACT_APP_API_URL}/total-price`;
      const promise = axios.get(URL, authorization);
      promise.then((res) => {
          setBalance(res.data.price);
      });
  }, [balance]);

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  function saveOrder(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/checkout`, form,  {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert("compra concluida")
        nav("/");
      });
  }

  return (
    <Container>
      <Header>
        <Text>Serenity</Text>
      </Header>
      <SubTitle>CHECKOUT</SubTitle>
      <BoxContainer>
        <Form>
          <Label>Informações de contato</Label>
          <Field
            placeholder={"E-mail"}
            name="email"
            type="email"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Field
            placeholder={"Telefone"}
            name="TelNumber"
            type="tel"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Field
            placeholder={"Primeiro Nome"}
            name="FirstName"
            type="text"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Field
            placeholder={"Último Sobrenome"}
            name="LastName"
            type="text"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Label>Informações de Entrega</Label>
          <Field
            placeholder={"CEP"}
            name="ZIPCode"
            type="number"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Field
            placeholder={"Endereço"}
            name="AddressDescription"
            type="text"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Field
            placeholder={"Número da Casa/Prédio"}
            name="AddressNumber"
            type="number"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Field
            placeholder={"Complemento (Opcional)"}
            name="AdressComplement"
            type="text"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <ConfirmOrder onClick={saveOrder}>Confirmar Compra</ConfirmOrder>
        </Form>
        <CartProducts>
          <h1>Itens Selecionados</h1>
          <ProdSubs>
            <h1>Item</h1>
            <h2>Qtd.</h2>
            <h3>Valor</h3>
          </ProdSubs>
          <Border></Border>
          {products.map((product, i) => (
            <>
              <ProdDetails>
                <img src={product.image} />
                <div>{product.name}</div>
                <h3>{product.quantity}</h3>
                <h4>R$: {product.price}</h4>
              </ProdDetails>
              <Border></Border>
            </>
          ))}
          <p>Subtotal: R$:{balance.toFixed(2)}</p>
          <h5>Frete: GRÁTIS!</h5>
        </CartProducts>
      </BoxContainer>
    </Container>
  );
}

const Header = styled.div`
  width: 100%;
  height: 120px;
  background: #80b4a9;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  width: 326px;
  height: 50px;
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 50px;
  color: #ffffff;
  text-shadow: 2px 2px #0a334e;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const SubTitle = styled.h1`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito";
  font-style: bold;
  font-weight: 700;
  font-size: 32px;
  line-height: 20px;
  letter-spacing: 0.04em;
`;
const Label = styled.label`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
`;
const Field = styled.input`
  width: 600px;
  height: 40px;
  padding-left: 15px;
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  ::placeholder {
    color: gray;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  width: 680px;
  padding: 40px;
  height: 100%;
  background-color: white;
`;

const ConfirmOrder = styled.button`
  margin-top: 20px;
  background-color: #e49882;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 20px;
  line-height: 23px;
  border: none;
  border-radius: 6px;
  height: 60px;
  width: 600px;
  :hover {
    cursor: pointer;
  }
`;
const Border = styled.div`
  width: 98%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 2px;
  background-color: lightgrey;
`;

const BoxContainer = styled.div`
  display: flex;
`;
const CartProducts = styled.div`
  padding: 20px;
  margin-left: 20px;
  width: 620px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.04em;
  }
  p {
    display: flex;
    justify-content: right;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
  }
  h5 {
    display: flex;
    justify-content: right;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #80b4a9;
  }
`;

const ProdSubs = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Raleway";
  font-style: normal;
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.04em;
    margin-right: 200px;
  }
  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.04em;
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.04em;
    margin-right: 20px;
  }
`;

const ProdDetails = styled.div`
  display: flex;
  font-family: "Raleway";
  justify-content: space-between;
  font-style: normal;
  margin-bottom: 20px;
  height: 80px;
  img {
    width: 80px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: left;
    padding-left: 20px;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.04em;
  }
  h3 {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    padding-left: 10px;
    letter-spacing: 0.04em;
  }
  h4 {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.04em;
  }
`;
