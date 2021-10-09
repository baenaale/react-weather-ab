import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Sun</div>
            <WeatherIcon code="01d" size={30} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">°</span>
              <span className="WeatherForecast-temperature-min">74°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "4f368074f0c183534aaa3f5cab5a3038";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
