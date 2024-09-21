import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import Button from "../../button/button.component";
import PaymentForm from "../../payment-form/payment-form.component";
import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);

  const closePaymentForm = () => {
    setIsPaymentFormVisible(false);
  };
  // const paymentContainerRef = useRef();

  const navigateToPaymentForm = () => {
    setIsPaymentFormVisible(true);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       paymentContainerRef.current &&
  //       paymentContainerRef.current.contains(event.target)
  //     ) {
  //       closePaymentForm();
  //     }
  //   };

  //   if (isPaymentFormVisible) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isPaymentFormVisible]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        TOTAL: ${cartTotal}
        <div onClick={navigateToPaymentForm}>
          <Button type="button" buttonType="inverted">
            Pay now
          </Button>
        </div>
      </div>

      {isPaymentFormVisible && (
        <div className="payment-popup">
          <div className="payment-container">
            <PaymentForm />
            <Button className="close-button" onClick={closePaymentForm}>
              close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
