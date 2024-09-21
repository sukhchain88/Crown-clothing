import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import "./payment-form.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: cartTotal * 100 }),
        }
      ).then((res) => res.json());

      console.log("response", response);
      const { clientSecret } = response;

      const cardElement = elements.getElement(CardElement);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });

      setIsProcessingPayment(false);

      if (paymentResult.error) {
        alert(`Payment failed: ${paymentResult.error.message}`);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded")
          alert("Payment successful!");
      }
    } catch (err) {
      console.error("Payment processing error:", err.message);
      alert("An error occurred during the payment process. Please try again.");
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="payment-popup">
      <div className="payment-container">
        <form onSubmit={paymentHandler}>
          <h2>Credit Card Payment:</h2>
          <CardElement />
          <Button
            type="submit"
            buttonType="inverted"
            disabled={isProcessingPayment}
          >
            {isProcessingPayment ? "Processing..." : "Pay Now"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
