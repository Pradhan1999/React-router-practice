import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";

export const CartDetailContext = createContext();
// export const CartDetailContext2 = createContext();

function App() {
  // State for storing the items in the cart
  const [cartItems, setCartItems] = useState([]);
  console.log("cartItems", cartItems);

  return (
    <>
      <CartDetailContext.Provider value={{ cartItems, setCartItems }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleProduct/:ids" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartDetailContext.Provider>
    </>
  );
}

export default App;
