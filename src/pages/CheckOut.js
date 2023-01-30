import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthContext";

export default function CheckOut() {
  const [form, setForm] = useState({});
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  const { token } = useContext(AuthContext);

  /* useEffect(() => {
    if (!token) {
      nav("/login");
    }
    const authorization = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/cart`, authorization)
      .then((res) => {
        setProducts(res.data);
      });
  }, []); */

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  function saveOrder(e) {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        nav("/");
      });
  }

  return (
    <Container>
      {/* <Form>
        <Input></Input>
      </Form> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 120px;
  background: #80b4a9;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;
