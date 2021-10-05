import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Weather defaultCity="College Station" />
    </div>
    <footer className="credits">
      This project was coded by Alejandra Baena and is{" "}
      <a href="https://github.com/baenaale/react-weather-ab">
        open-sourced on GitHub
      </a>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);
