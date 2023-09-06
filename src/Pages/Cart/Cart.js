import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Contexts/DataProvider/DataProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  // Getting cart data from data context.
  const { getCartProducts } = useContext(DataContext);
  const cartProducts = getCartProducts();

  // Calculating total price.
  var totalPrice = 0;
  if (cartProducts?.length > 0) {
    for (const cartProduct of cartProducts) {
      totalPrice = totalPrice + cartProduct?.price * cartProduct?.quantity;
    }
  }

  return (
    <div>
      <p>You have total: {cartProducts?.length} Items</p>
      <div>
        {cartProducts?.map((cartProduct) => (
          <CartProduct
            key={cartProduct._id}
            cartProduct={cartProduct}
          ></CartProduct>
        ))}
      </div>
      <div className="flex justify-between mx-[3%] my-4">
        <p className="text-xl font-semibold">Total Price:</p>
        <p className="text-xl font-semibold">${totalPrice}</p>
      </div>
      <div className="flex justify-end mr-[2%] my-4">
        <Link
          to="/checkout"
          className="bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-medium text-sm rounded-sm px-5 py-2.5 text-center"
        >
          Proceed To Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
