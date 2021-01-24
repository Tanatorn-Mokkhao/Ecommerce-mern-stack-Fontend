import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <div className="grid-header">
      <Container>
        <div className="zone-1">
          <Link to="/">
            <img src="/img/international-e-commerce.svg" width="70px" />
          </Link>
          <input type="text" />
          <p>Signin</p>
          <p>Signup</p>
        </div>
      </Container>
    </div>
  );
}

export default Header;
