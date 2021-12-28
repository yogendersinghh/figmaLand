import React from "react";

const Card = ({ name, content }) => {
  return (
    <>
      <div className="figmaland__testimonial-card">
        <div className="figmaland__testimonial-card__top">
          <div className="figmaland__testimonial-card__image"></div>
          <div className="figmaland__testimonial-card__name">{name}</div>
        </div>
        <div className="figmaland__testimonial-card__bottom">{content}</div>
      </div>
    </>
  );
};

export default Card;
