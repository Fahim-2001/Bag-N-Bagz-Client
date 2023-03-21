import {
  CardElement,
  CardNumberElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  // Success state
  const [success, setSuccess] = useState(false);

  // Stripe Hook
  const stripe = useStripe();

  //   Elements Hook
  const elements = useElements();

  //   Handlesubmit of form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <>
      {!success ? (
        <form action="" onSubmit={handleSubmit}>
          <div>
            <p>Card Element</p>
            <CardNumberElement></CardNumberElement>
          </div>

          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h1>Your payment is Successful</h1>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
