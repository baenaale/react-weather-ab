import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Current.css";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name
    })
  }

  if (weatherData.ready) {
    return (
      <div className="card-body">
        <div className="city-title">
          {weatherData.city}
        </div>
        <ul>
          <li className="current-dt">
           <FormattedDate date={weatherData.date} />
          </li>
          <li className="current-description text-capitalize">
            {weatherData.description}
          </li>
        </ul>
        <div className="currently">Currently:</div>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="float-left">
                <div className="temperature">
                  {Math.round(weatherData.temperature)}
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
        <div className="col-5 weather-icon">
          <img
            src="./media/sun-and-clouds.png"
            id="icon"
            alt="Cloudy Logo"
            width="100"
            class="img-fluid"
          />
        </div>
        <br />
        <div className="container">
          <div className="row row-cols-2">
            <div className="col-8"> Feels like: {Math.round(weatherData.feelslike)}°</div>
            <div className="col-4"> Humidity: {weatherData.humidity}%</div>
            <div className="col">Wind: {Math.round(weatherData.wind)}</div>
          </div>
        </div>
      </div>
    );
  } else {
      const apiKey = "4f368074f0c183534aaa3f5cab5a3038";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }


  
}
