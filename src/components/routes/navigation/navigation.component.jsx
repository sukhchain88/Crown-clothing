import React, { Fragment, useContext, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const cartDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCartOpen &&
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN-OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
          {isCartOpen && (
            <div className="nav-link" ref={cartDropdownRef}>
              <CartDropdown />
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
