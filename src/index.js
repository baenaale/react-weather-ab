import React from 'react';
import ReactDOM from "react-dom";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
      <br />
      <h1>Weather</h1>
      <br />
      <Search />
      <Current />
      <Forecast />
    </div>
    <div className="credits">
      <a href="https://github.com/baenaale/AB-weatherapp">Open-source code</a>{" "}
      by Alejandra Baena
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


