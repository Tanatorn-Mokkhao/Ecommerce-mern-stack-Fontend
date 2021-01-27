import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../action/authAction";
import "./style.css";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignup = () => {
    const payload = { firstName, lastName, userName, email, password };
    dispatch(signup(payload));
  };

  useEffect(() => {
    if (auth.authenticate) {
      return <Redirect to="/" />;
    }
  }, [auth.authenticate]);

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <div className="main-signin-page-s">
      <Container className="signin-field-s">
        <div className="signin-left-s">
          <div className="header-login-s">
            <p>Signup</p>
          </div>
          <div className="fill-zone-s">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <br /> <br />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <br /> <br />
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <br /> <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <br />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button onClick={handleSignup}>Sign up</button>
            <br /> <br />
            {auth.error ? <p>{auth.error}</p> : null}
          </div>
        </div>
        <div className="signin-right-s"></div>
      </Container>
    </div>
  );
}

export default Signup;
