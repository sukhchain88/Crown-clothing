import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
<<<<<<< HEAD
import PaymentForm from "../../payment-form/payment-form.component";
=======
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
import CheckoutItem from "../../checkout-item/checkout-item.component";
import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
<<<<<<< HEAD
=======

>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
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
<<<<<<< HEAD
      <div className="total">
        TOTAL: ${cartTotal}
        <PaymentForm />
      </div>
=======
      <div className="total">TOTAL: ${cartTotal}</div>
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
    </div>
  );
};

export default Checkout;
