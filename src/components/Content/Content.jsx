import React from "react";
import Button from "../Button/Button";
import "./content.css";
const Content = () => {
  return (
    <div className="figmaland__content-main">
      <div className="figmaland__content-heading">
        Work at the speed of thought
      </div>
      <div className="figmaland__content-content">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </div>
      <div className="figmaland__content-button">
        <Button
          content="Try For Free"
          backgroundColor="#4452FE"
          borderColor="#4452FE"
        />
        <Button content="Learn More" />
      </div>
    </div>
  );
};

export default Content;
