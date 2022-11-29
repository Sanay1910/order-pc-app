import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <header className={classes.header}>
      <h1>PC World</h1>
      <HeaderCartButton onShowCart={props.onShowCart}/>
    </header>
  );
}

export default Header;
