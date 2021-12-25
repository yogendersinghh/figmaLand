import React from "react";
import "./pattern.css";
import Brands from "../Brands/Brands";
import Button from "../Button/Button";
import img from "../../Assests/apple-app-store.svg";
import img2 from "../../Assests/apiary.svg";
import img3 from "../../Assests/android.svg";
import img4 from "../../Assests/basecamp.svg";
import img5 from "../../Assests/airbnb.svg";
import img6 from "../../Assests/ibm.svg";

const Pattern = () => {
  const images = [
    {
      image: img,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
  ];
  return (
    <div className="figmaland__pattern">
      <div className="figmaland__pattern-top">
        <div className="figmaland__pattern-top__heading">Partners</div>
        <div className="figmaland__pattern-top__content">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </div>
      </div>
      <div className="figmaland__pattern-bottom">
        {images.map((data) => {
          return <Brands icon={data.image} />;
        })}
      </div>
      <div className="figmaland__pattern-button">
        <Button content="All Partners" />
      </div>
    </div>
  );
};

export default Pattern;
