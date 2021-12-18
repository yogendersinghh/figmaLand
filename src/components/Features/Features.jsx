import React from "react";
import "./feature.css";
import image from "../../Assests/ChatBot.png";
import Card from "./Card";

const datas = [
  {
    icon: "../../Assests/Vector.svg",
    heading: "A single source of truth",
    content:
      "When you add work to your Slate calendar we automatically calculate useful insights ",
  },
  {
    icon: "../../Assests/Vector1.svg",
    heading: "Intuitive interface",
    content:
      "When you add work to your Slate calendar we automatically calculate useful insights ",
  },
  {
    icon: "../../Assests/Vector2.svg",
    heading: "Or with rules",
    content:
      "When you add work to your Slate calendar we automatically calculate useful insights ",
  },
];

const Features = () => {
  return (
    <div className="figmaland__feature">
      <div className="figmaland__feature-top">
        <div className="figmaland__feature-top__heading">FEATURES</div>
        <div className="figmaland__feature-top__content">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </div>
      </div>
      <div className="figmaland__feature-bottom">
        <div className="figmaland__feature-bottom__image">
          <img src={image} alt="" />
        </div>
        <div className="figmaland__feature-bottom__sidecard">
          {datas.map((data) => {
            return (
              <Card
                icon={data.icon}
                heading={data.heading}
                content={data.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
