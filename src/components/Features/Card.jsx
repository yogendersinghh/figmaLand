import React from "react";

const Card = ({ icon, content, heading }) => {
  return (
    <div>
      <div>{/* <img src={require(`${icon}`).default} alt="" /> */}</div>
      <div>{heading}</div>
      <div>{content}</div>
    </div>
  );
};

export default Card;
