import React from "react";

const Cart = () => {
  const cartProducts = localStorage.getItem("Cart");
  console.log(cartProducts);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
