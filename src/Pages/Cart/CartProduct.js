import React from "react";

const CartProduct = ({ cartProduct }) => {
  const { bag_name, img, price, quantity } = cartProduct;
  return (
    <div className="shadow-md mx-[2%] my-5 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="px-3">{bag_name}</h1>
        <div className="mx-[5%] py-1">
          <img className="h-20 " src={img} alt="" />
        </div>
      </div>
      <div className="px-5">
        <span>Quantity: {quantity}</span>
      </div>
      <div className="px-3 flex">
        <p>Price:{price * quantity}</p>
      </div>
    </div>
  );
};

export default CartProduct;
