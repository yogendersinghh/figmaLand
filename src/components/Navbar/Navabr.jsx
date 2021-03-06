import React, { useState } from "react";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../Assests/logo dark.png";
import Button from "../Button/Button";

const Menu = () => (
  <>
    <div>Home</div>
    <div>Product</div>
    <div>About</div>
    <div>Contact</div>
  </>
);
const Navabr = () => {
  const [toggleButton, settoggleButton] = useState(false);

  return (
    <div className="figmaland__navbar">
      <div className="figmaland__navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="figmaland__navbar-links">
        <Menu />
      </div>
      <div className="figmaland__navbar-button">
        <Button content="Login" />
        <div className="figmaland__navbar-menu">
          {toggleButton ? (
            <RiCloseLine
              size={22}
              onClick={() => {
                settoggleButton(false);
              }}
            />
          ) : (
            <RiMenu3Line
              size={22}
              onClick={() => {
                settoggleButton(true);
              }}
            />
          )}
        </div>
      </div>

      <div className="trying">
        {toggleButton && (
          <div className="figmaland__navbar-menu__show">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navabr;
