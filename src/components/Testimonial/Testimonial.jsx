import React from "react";
import Card from "./Card";
import "./testimonial.css";
const Tesimonial = () => {
  const datas = [
    {
      // icon: "../../Assests/avatar.png",
      name: "Claire bell Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
    },
    {
      icon: "",
      name: "Fransisco Lane Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      icon: "",
      name: "Ralph Fisher Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      icon: "",
      name: "Jorge Murphy Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
  ];
  return (
    <div className="figmaland__testimonial-main">
      <div className="figmaland__testimonial-top">Testimonails</div>
      <div className="figmaland__testimonial-bottom">
        {datas.map((data) => {
          return <Card name={data.name} content={data.content} />;
        })}
      </div>
    </div>
  );
};

export default Tesimonial;
