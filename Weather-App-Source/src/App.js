import React from "react";
import ThisDayData from "./ThisDayData/ThisDayData.js";

import "./App.css";

function App() {
  return (
    <div id="app-mainbody">
      <p className="Header">Weather Forecast</p>
       <ThisDayData />
      <div id="Footer">Made by Matan Elmaliach ✌.</div>
    </div>
  );
}

export default App;
