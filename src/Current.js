import React from "react";

import "./Current.css";

export default function Current() {
  return (
    <div className="card-body">
      <div className="city-title" id="city">
        College Station
      </div>
      <ul>
        <li className="current-dt" id="date">
          Saturday, 13:03
        </li>
        <li className="current-description" id="description">
          Cloudy
        </li>
      </ul>
      <div className="currently">Currently:</div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="float-left">
              <div className="temperature" id="temperature">
                <strong>90</strong>
              </div>
              <div className="units">
                <a href="#" id="fahrenheit-link" className="active">
                  °F
                </a>
                |
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 weather-icon">
        <img
          src="./media/sun-and-clouds.png"
          id="icon"
          width="100"
          class="img-fluid"
        />
      </div>
      <br />
      <div className="container">
        <div className="row row-cols-2">
          <div className="col-8"> Feels like: 98°</div>
          <div className="col-4"> Humidity: 80%</div>
          <div className="col"> Wind: 18 mph</div>
        </div>
      </div>
    </div>
  );
}
