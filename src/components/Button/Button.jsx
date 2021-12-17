import React from "react";
import "./button.css";
const Button = ({ content, backgroundColor, borderColor }) => {
  const style = {
    background: backgroundColor,
    borderColor: borderColor,
  };
  return (
    <div>
      <button style={style}>{content}</button>
    </div>
  );
};

export default Button;
