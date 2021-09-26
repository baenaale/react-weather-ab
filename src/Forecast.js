import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <hr />
      <div className="nextdays-title">5-Day Forecast</div>
      <br />
      <div className="forecast" id="forecast">
        <p className="nextdays-text">
          84° | <small>73°</small>{" "}
          <div className="emojis">
            <span>Thunderstorm</span> ⛈️
          </div>
          <hr />
          88° | <small>72°</small>{" "}
          <div className="emojis">
            <span>Thunderstorm</span> ⛈️
          </div>
          <hr />
          86° | <small>73°</small>{" "}
          <div className="emojis">
            <span>Rain</span> 🌧️
          </div>
          <hr />
          84° | <small>72°</small>{" "}
          <div className="emojis">
            <span>Sunny</span> ☀️
          </div>
          <hr />
          84° | <small>72°</small>{" "}
          <div className="emojis">
            <span>Sunny</span> ☀️
          </div>
        </p>
      </div>
      <br />
    </div>
  );
}
