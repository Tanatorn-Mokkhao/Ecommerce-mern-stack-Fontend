import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/home/home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialData } from "./action/initialData";
import Product from "./container/product/product";
function App() {
  const dispactch = useDispatch();

  useEffect(() => {
    dispactch(initialData());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:slug" exact component={Product} />
      </Switch>
    </div>
  );
}

export default App;
