import './App.css';
import React from "react";
import Search from './Components/search/Search';
import CurrentWeather from './Components/current-weather/Current-Weather';


const App = () => {

  const handleOnSearchChange = (value) => {
    console.log(value);
  }

  return (
    <div className='container' >
      <Search  onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}

export default App;