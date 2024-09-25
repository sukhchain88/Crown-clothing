import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";
// import Checkout from "../routes/checkout/checkout.component";
import Button from "../button/button.component";
import "./product-cart.style.scss";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const addItemToCartHandler = () => {
    if (!isAdded) {
      addItemToCart(product);
      setIsAdded(true);
    }
  };

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="product-cart-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={isAdded ? navigateToCheckout : addItemToCartHandler}
      >
        {isAdded ? "Go to card" : "Add to card"}
      </Button>
    </div>
  );
};
export default ProductCart;
