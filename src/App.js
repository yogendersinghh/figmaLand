import React from "react";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Navabr from "./components/Navbar/Navabr";
import Status from "./components/Status/Status";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <>
      <div style={{ background: "#181818" }}>
        <Navabr />
        <Hero />
        <Status />
        <Features />
        <Content />
      </div>
    </>
  );
};

export default App;
