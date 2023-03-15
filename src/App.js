import './App.css';
import Search from './Components/search/Search';
import CurrentWeather from './Components/current-weather/Current-Weather';


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search  onSearchChange={ handleOnSearchChange } />
      <CurrentWeather />
    </div>
  );
}

export default App;
