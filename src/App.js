import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/home/home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialData } from "./action/initialData";
import Product from "./container/product/product";
import ProductDetail from "./container/productDetail/productDetail";
import Signin from "./container/signin/signin";
import { isLogged } from "./action/authAction";
import { useSelector } from "react-redux";
import { getCart } from "./action/cartAction";
import Private from "./privateRoute/privateRoute";
import Cart from "./container/cart/cart";
import Placeorder from "./container/placeorder/placeorder";
import Signup from "./container/signup/signup";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(initialData());
    dispatch(isLogged());

    if (auth.authenticate) {
      dispatch(getCart());
    }
  }, [auth.authenticate]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Private path="/cart" component={Cart} />
        <Private path="/placeorder" component={Placeorder} />
        <Route path="/:productSlug/:productId" component={ProductDetail} />
        <Route path="/:slug" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
