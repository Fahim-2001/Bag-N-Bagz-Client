import React from "react";

const CartProduct = ({ cartProduct }) => {
  console.log(cartProduct);
  return (
    <div>
      <h1>{cartProduct.bag_name}</h1>
    </div>
  );
};

export default CartProduct;
