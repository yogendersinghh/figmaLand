import React from "react";
import "./content.css";
import Card from "./Card";

const datas = [
  {
    heading: "Work",
    content:
      "Ever wondered if you're too reliant on a client for work? Slate helps you identify .",
    name: "Sign Up",
  },
  {
    heading: "Design with real data",
    content:
      "Ever wondered if you're too reliant on a client for work? Slate helps you identify .",
    name: "Try for free",
  },
];

const Content = () => {
  return (
    <div className="figmaland__content">
      <div className="figmaland__content-top">
        <div className="figmaland__content-top__heading">Contents</div>
        <div className="figmaland__content-top__content">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </div>
      </div>
      <div className="figmaland__content-bottom">
        {/* <div className="figmaland__content-bottom__card">
          <div className="figmaland__content-bottom__card-heading">Work</div>
          <div className="figmaland__content-bottom__card-content">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </div>
          <div className="figmaland__content-bottom__card-button">
            <Button content="Sign Up" backgroundColor="blue" />
          </div>
          <div className="figmaland__content-bottom__card-image">
            <img src={image} alt="" />
          </div>
        </div> */}
        {datas.map((data) => {
          return (
            <>
              <Card
                heading={data.heading}
                content={data.content}
                btnName={data.name}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
