import React from "react";

const CheckoutProduct = ({ cartProduct }) => {
  return (
    <div className="flex justify-around text-left my-3">
      <p>{cartProduct.bag_name}</p>
      {cartProduct.quantity > 1 ? (
        <p>Quantity : {cartProduct.quantity} pcs</p>
      ) : (
        <p>Quantity : {cartProduct.quantity} pc</p>
      )}
      <p>${cartProduct.price * cartProduct.quantity}</p>
    </div>
  );
};

export default CheckoutProduct;
