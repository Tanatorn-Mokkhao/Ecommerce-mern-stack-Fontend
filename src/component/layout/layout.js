import React from "react";
import Header from "../header/header";
import Menu from "../menu-bar/menu";
import "./stlye.css";
function Layout(props) {
  return (
    <div>
      <Header />
      {props.menubar ? <Menu /> : null}
      {props.children}
    </div>
  );
}

export default Layout;
