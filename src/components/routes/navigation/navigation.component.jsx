import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../../context/user.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

import { CartContext } from "../../../context/cart.context";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
            <Link className="nav-link" onClick={signOutUser}>
              SIGN-OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
