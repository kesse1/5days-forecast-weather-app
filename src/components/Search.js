import React, { useState } from "react";

import "../styles/Search.css";

export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState('');
 
    // current weather onClick
    // yet to be completed
    const curntWeatherButtonClick = (e)=> {
       e.preventDefault();
      alert("PLEASE I'M STILL WORKING ON IT")
    
   }
 
    // button for 5days forecast
    // not completed

    const forecastButtonClick =(e)=> {
       e.preventDefault();
       alert("PLEASE I HAD LESS TIME TO COMPLETE THIS PROJECT sorry for the inconvience")
    }


  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
    
  }

  function searchButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <label className="Search__label">
        <input
          className="Search__input"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder= 'Search for city'
        />
      </label>
      <button className="Search__button" onClick={searchButtonClick}>
        Search
      </button>
    
      <button className="Search_button" onClick={curntWeatherButtonClick}>
        Current weather
      </button>
      <button className="Search_button" onClick={forecastButtonClick}>
       5days forecast
      </button>
    </div>
  );
}
