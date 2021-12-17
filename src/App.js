import React from "react";
import Content from "./components/Content/Content";
import Navabr from "./components/Navbar/Navabr";
import Status from "./components/Status/Status";

const App = () => {
  return (
    <div>
      <Navabr />
      <Content />
      <Status />
    </div>
  );
};

export default App;
