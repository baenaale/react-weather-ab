import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import Search from "./Search";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name
    });
  }

function search() {
  const apiKey = "4f368074f0c183534aaa3f5cab5a3038";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event) {
  event.preventDefault();
  search(city);
}

function handleCityChange(event) {
  setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className="card-body">
        <form className="d-flex justify-content-between search-form" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter a city..."
          autoFocus="on"
          autoComplete="off"
          onChange={handleCityChange}
          aria-label="Search"
        />
        <button className="btn search-button" type="submit">
          Search
        </button>
        <span
          href="#"
          className="current-button btn text-center btn-outline-success"
          id="current-button"
        >
          📍
        </span>
      </form>
        <WeatherInfo data={weatherData}/> 
      </div>
    );
  } else {
    search();  
    return "Loading...";
  }


  
}
