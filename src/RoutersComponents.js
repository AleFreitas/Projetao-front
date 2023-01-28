import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// import Login from "../src/pages/Login";
// import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Product from "../src/pages/Product";

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/product/:id" element={<Product /> } />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default RoutersComponents;
