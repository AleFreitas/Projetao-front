import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.js";
import Home from "../src/pages/Home";
import Product from "../src/pages/Product";
import CheckOut from "../src/pages/CheckOut";

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/products/:id" element={<Product /> } />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/checkout" element = {<CheckOut/>}/>
      </Routes>
    </Router>
  );
}

export default RoutersComponents;
