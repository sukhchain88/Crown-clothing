import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigates = useNavigate();

<<<<<<< HEAD
  const goToCheckoutHandler = () => {
=======
  const goToCheckoutHendler = () => {
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
    navigates("/Checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart empty</span>
        )}
      </div>
<<<<<<< HEAD
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
=======
      <Button onClick={goToCheckoutHendler}>GO TO CHECKOUT</Button>
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
    </div>
  );
};

export default CartDropdown;
