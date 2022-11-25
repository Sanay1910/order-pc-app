import React from "react";
import Logo from "../assets/logo.png";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header>
      <div className={classes["main-image"]}>
        <img src={Logo} alt="PC-World logo" />
      </div>
    </header>
  );
}

export default Header;
