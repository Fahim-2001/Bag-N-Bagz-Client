import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider/DataProvider";
import CheckoutForm from "./CheckoutForm";
import CheckoutProduct from "./CheckoutProduct";

// Loadstripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Orders bill of customers */}
        <div>
          <p className="text-xl font-semibold my-4">Your Order</p>
          {cartProducts?.map((cartProduct) => (
            <CheckoutProduct
              key={cartProduct._id}
              cartProduct={cartProduct}
            ></CheckoutProduct>
          ))}
          <div className="flex justify-between mx-[5%] my-4">
            <p className="text-xl font-semibold">Total Price:</p>
            <p className="text-xl font-semibold">${totalPrice}</p>
          </div>
        </div>

        {/* Billing Adrees of customer */}
        <div>
          <p className="text-xl font-semibold my-4">Billing Address</p>
          <form action="" className="mx-2">
            <input
              type="text"
              placeholder="Enter Your full name here"
              className="input my-3 text-black w-full max-w-2xl"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <input
                type="text"
                placeholder="Enter Your email here"
                className="input my-3 text-black w-full lg:w-[99%]"
              />

              <input
                type="text"
                placeholder="Enter Your Phone Number Here"
                className="input my-3 text-black w-full lg:w-[99%]"
              />
            </div>

            <textarea
              className="textarea my-3 text-black w-full"
              placeholder="Enter your address"
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-medium text-sm rounded-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Payment gateway */}
      <div className="flex justify-center">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
