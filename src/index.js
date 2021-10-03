import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./Search";
import Current from "./Current";


import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
      <br />
      <h1>Weather</h1>
      <br />
      <Search />
      <Current defaultCity="College Station"/>
    
    </div>
    <footer className="credits">
      This project was coded by Alejandra Baena and is <a href="https://github.com/baenaale/react-weather-ab">open-sourced on GitHub</a>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);


