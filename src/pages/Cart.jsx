import React, { useContext } from "react";
import { CartDetailContext } from "../App";

const Cart = () => {
  const { cartItems } = useContext(CartDetailContext);

  return (
    <>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          {cartItems?.map((item) => (
            <div key={item?.id}>
              <p>{item?.brand}</p>
              <p className="cart-hide">{item?.title}</p>
              <p>Quantity</p>
              <p className="cart-hide">Subtotal</p>
              <p>Remove</p>
            </div>
          ))}
        </div>
        <hr />

        <div className="cart-item"></div>
      </div>
    </>
  );
};

export default Cart;
