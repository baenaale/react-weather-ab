import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.imperial - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span>
          <span className="temperature">{Math.round(props.imperial)}</span>
          <span className="unit">
            °F |{" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span>
          <span className="temperature">{Math.round(celsius())}</span>
          <span className="unit">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
            | °C
          </span>
        </span>
      </div>
    );
  }
}
