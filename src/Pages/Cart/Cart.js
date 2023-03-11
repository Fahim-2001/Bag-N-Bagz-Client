import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider/DataProvider";

const Cart = () => {
  const { cartProducts } = useContext(DataContext);
  // console.log(cartProducts);
  console.log(cartProducts.length);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
