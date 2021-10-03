import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              
                <div className="units">
                  <WeatherTemperature imperial={props.data.temperature} />
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