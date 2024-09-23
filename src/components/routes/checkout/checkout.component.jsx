import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import PaymentForm from "../../payment-form/payment-form.component";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
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
        <PaymentForm />
      </div>
    </div>
  );
};

export default Checkout;
