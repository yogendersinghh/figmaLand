import React from "react";
import "./status.css";
import image1 from "../../Assests/Dashboard.png";
import image2 from "../../Assests/ChatBot.png";
import image3 from "../../Assests/Boards.png";

const Status = () => {
  return (
    <div className="figmaland__status">
      <div className="figmaland__status-One image">
        <img src={image1} alt="" />
      </div>
      <div className="figmaland__status-Two image">
        <img src={image2} alt="" />
      </div>
      <div className="figmaland__status-Three image">
        <img src={image3} alt="" />
      </div>
      <div className="figmaland__status-gradient"></div>
    </div>
  );
};

export default Status;
