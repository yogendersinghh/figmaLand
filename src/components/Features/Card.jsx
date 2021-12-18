import React from "react";
// import fak from "../../Assests/logo.svg";
import "./card.css";
const Card = ({ icon, content, heading }) => {
  return (
    <div className="figmaland__card">
      <div className="figmaland__card-top">
        <img src={`${icon}`} alt="" />
        {/* <img src={fak} alt="" /> */}
        <div className="figmaland__card-top__heading">{heading}</div>
      </div>

      <div className="figmaland__card-bottom">{content}</div>
    </div>
  );
};

export default Card;
