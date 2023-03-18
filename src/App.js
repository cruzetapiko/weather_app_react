import './App.css';
import React from "react";
import Search from './Components/search/Search';
import CurrentWeather from './Components/current-weather/Current-Weather';
import { useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';


const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeather = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecast = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeather, forecast])
      .then(async (response) => {
        const currentWeather = await response[0].json();
        const forecast = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...currentWeather });
        setForecast({ city: searchData.label, ...forecast });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  console.log(currentWeather);
  console.log(forecast);


  return (
    <div className='container' >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  )
}

export default App;