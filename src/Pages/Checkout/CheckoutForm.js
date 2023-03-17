import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

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
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      elements: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await fetch("http://localhost:5000/payment", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: {
            ammount: 1000,
            id,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        if (response.data.success) {
          console.log("Payment Successful");
          setSuccess(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? (
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <CardElement options={CARD_OPTIONS}></CardElement>
            </div>
          </fieldset>
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
