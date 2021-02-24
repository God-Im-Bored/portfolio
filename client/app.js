import React from "react";
import WebMain from "./components/WebMain";
// import Top from "./components/Top";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Top /> */}
      <WebMain />
    </div>
  );
};

export default App;
