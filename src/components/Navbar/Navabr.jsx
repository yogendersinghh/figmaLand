import React from "react";
import "./navbar.css";
import logo from "../../Assests/logo dark.png";
import Button from "../Button/Button";
const Navabr = () => {
  return (
    <div className="figmaland__navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="figmaland__navbar-links">
        <div>Home</div>
        <div>Product</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div>
        <Button content="Login" />
      </div>
    </div>
  );
};

export default Navabr;
