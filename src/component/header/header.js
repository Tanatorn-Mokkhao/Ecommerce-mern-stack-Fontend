import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../action/authAction";
import { GrCart } from "react-icons/gr";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleSignOut = () => {
    dispatch(signout());
  };

  // if (auth.authenticate && cart.cart.length === 0) {
  //   return null;
  // }

  const renderTypesign = () => {
    if (auth.authenticate) {
      return (
        <>
          {cart.cart.cart ? (
            <p className="num-cart">{cart.cart.cart.length} </p>
          ) : null}

          <Link to="/cart">
            <GrCart className="cart" size="45px" />
          </Link>
          <span onClick={handleSignOut}>Signout</span>
        </>
      );
    } else {
      return (
        <>
          <Link to="/cart">
            <GrCart className="cart" size="45px" />
          </Link>
          <Link to="/signin">Singin</Link>
          <Link to="/signup">Signup</Link>
        </>
      );
    }
  };

  return (
    <div className="grid-header">
      <Container>
        <div className="zone-1">
          <Link to="/">
            <img src="/img/international-e-commerce.svg" width="70px" />
          </Link>
          <input
            type="text"
            onClick={() => alert("Incomming กำลังทำอยู่ครับ")}
          />

          {renderTypesign()}
        </div>
      </Container>
    </div>
  );
}

export default Header;
