import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city-title">{props.data.city}</h1>
      <ul>
        <li className="current-dt">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="current-description text-capitalize">
          {props.data.description}
        </li>
      </ul>{" "}
      <div className="row" mt-3>
        <div className="col-6">
          <div className="clearfix">
            <div className=" weather-icon float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <WeatherTemperature imperial={props.data.temperature} />
          </div>
        </div>

        <br />
        <div className="col-6 ms-auto">
          <ul>
            {" "}
            <li>Feels like: {Math.round(props.data.feelslike)}°</li>
            <li> Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
