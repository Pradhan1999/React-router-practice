import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import axios from "axios";

export const CartDetailContext = createContext();

function App() {
  // State for storing the items in the cart
  const [cartItems, setCartItems] = useState([]);
  console.log("cartItems", cartItems);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/singleProduct/:ids"
          element={
            <CartDetailContext.Provider value={{ cartItems, setCartItems }}>
              <SingleProduct />
            </CartDetailContext.Provider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartDetailContext.Provider value={{ cartItems, setCartItems }}>
              <Cart />
            </CartDetailContext.Provider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
