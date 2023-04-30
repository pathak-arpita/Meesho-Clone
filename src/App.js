import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Address from "./Components/Address";
import Checkout from "./Components/Checkout";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import SignUp from "./Components/SignUp";

// import AddProduct from "./Components/AddProduct";
import Orders from "./Components/Orders";


import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment"  element={<Payment />}  /> 
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
