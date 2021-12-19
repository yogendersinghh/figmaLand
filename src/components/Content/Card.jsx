import React from "react";
import Button from "../Button/Button";
import image from "../../Assests/cardImage.png";

const Card = ({ heading, content, btnName }) => {
  return (
    <>
      <div className="figmaland__content-bottom__card">
        <div className="figmaland__content-bottom__card-heading">{heading}</div>
        <div className="figmaland__content-bottom__card-content">{content}</div>
        <div className="figmaland__content-bottom__card-button">
          <Button content={btnName} backgroundColor="#4452FE" />
        </div>
        <div className="figmaland__content-bottom__card-image">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
