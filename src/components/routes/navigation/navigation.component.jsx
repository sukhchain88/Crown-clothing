<<<<<<< HEAD
import React, { Fragment, useContext, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
=======
import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../../context/user.context";
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d

import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

<<<<<<< HEAD
=======
import { CartContext } from "../../../context/cart.context";

>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
<<<<<<< HEAD
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
=======
  const { isCartOpen } = useContext(CartContext);
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d

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
<<<<<<< HEAD
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN-OUT
            </span>
=======
            <Link className="nav-link" onClick={signOutUser}>
              SIGN-OUT
            </Link>
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
<<<<<<< HEAD
        {isCartOpen && (
          <div ref={cartDropdownRef}>
            <CartDropdown />
          </div>
        )}
=======
        {isCartOpen && <CartDropdown />}
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
