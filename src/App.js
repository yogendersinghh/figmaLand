import React from "react";
import Content from "./components/Content/Content";
import Features from "./components/Features/Features";
import Navabr from "./components/Navbar/Navabr";
import Status from "./components/Status/Status";

const App = () => {
  return (
    <>
      <div style={{ background: "#181818" }}>
        <Navabr />
        <Content />
        <Status />
      </div>
      <div style={{ background: "#181818" }}>
        <Features />
      </div>
    </>
  );
};

export default App;
