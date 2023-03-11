import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider/DataProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cartProducts } = useContext(DataContext);

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct._id}
            cartProduct={cartProduct}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default Cart;
