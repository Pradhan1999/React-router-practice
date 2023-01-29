import React from "react";

const Cart = ({ cart }) => {
  console.log("🚀 ~ file: Cart.jsx:4 ~ Cart ~ cart", cart);
  //   const { cart } = useCartContext();
  //   console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  // const { id, title, description, brand, thumbnail } = item;
  // const { brand } = cart;
  return (
    <>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>{cart?.brand}</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {/* {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })} */}
        </div>
      </div>
    </>
  );
};

export default Cart;
