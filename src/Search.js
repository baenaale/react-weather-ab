import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="container search">
      <form class="d-flex justify-content-between search-form" id="search-form">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter a city..."
          autofocus="on"
          autocomplete="off"
          id="city-input"
          aria-label="Search"
        />
        <button className="btn search-button" type="submit">
          Search
        </button>
        <a
          href="#"
          className="current-button btn text-center btn-outline-success"
          id="current-button"
        >
          📍
        </a>
      </form>
    </div>
  );
}