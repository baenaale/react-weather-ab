import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
             <div className="city-title">
          {props.data.city}
        </div>
        <ul>
          <li className="current-dt">
           <FormattedDate date={props.data.date} />
          </li>
          <li className="current-description text-capitalize">
            {props.data.description}
          </li>
        </ul>
        <div className="currently">Currently:</div>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="float-left">
                <div className="temperature">
                  {Math.round(props.data.temperature)}
                </div>
                <div className="units">
                  <span href="#" id="fahrenheit-link" className="active">
                    °F
                  </span>
                  |
                  <span href="#" id="celsius-link" className="active">
                    °C
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 weather-icon float-right">
            <WeatherIcon code={props.data.icon}/>
        </div>
        <br />
        <div className="container">
          <div className="row row-cols-2">
            <div className="col-8"> Feels like: {Math.round(props.data.feelslike)}°</div>
            <div className="col-4"> Humidity: {props.data.humidity}%</div>
            <div className="col">Wind: {Math.round(props.data.wind)}</div>
          </div>
        </div>
        </div>
    );
}