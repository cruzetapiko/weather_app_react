import './current-weather.css'
const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className='city'>{data.city}</p>
          <p className='description' >{data.weather[0].description}</p>
        </div>
        <img alt='icon' className='icon' src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className='temperature'> {Math.round(data.main.temp)}°C </p>
        <div className='details' >
          <div className='parameters-row' >
            <span className=' '>details</span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>feels like </span>
            <span className='parameter-value'> {Math.round(data.main.feels_like)}°C </span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>Wind </span>
            <span className='parameter-value'> {data.wind.speed} m/s </span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>humidity </span>
            <span className='parameter-value'> {data.main.humidity}% </span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>pressure</span>
            <span className='parameter-value'> {data.main.pressure} hpa </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather