import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../action/authAction";
import { Redirect } from "react-router-dom";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleLogin = () => {
    const payload = { email, password };
    dispatch(signin(payload));
    //   .then(() => {
    //   if (props.natch) {
    //   console.log(props.history);
    //   props.history.goBack();
    //   }
    // });
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
    <div className="main-signin-page">
      <Container className="signin-field">
        <div className="signin-left">
          <div className="header-login">
            <p>Login</p>
          </div>
          <div className="fill-zone">
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
            <button onClick={handleLogin}>LOG IN</button>
          </div>
        </div>
        <div className="signin-right">1</div>
      </Container>
    </div>
  );
}

export default Signin;
