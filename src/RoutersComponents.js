import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../src/pages/Login";
import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Product from "../src/pages/Product";
import CheckOut from "../src/pages/CheckOut";

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/products/:id" element={<Product /> } />
        <Route path="/sign-up" element={<Cadastro />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/checkout" element = {<CheckOut/>}/>
      </Routes>
    </Router>
  );
}

export default RoutersComponents;
