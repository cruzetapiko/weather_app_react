import './current-weather.css'
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className='city'>Camaguey</p>
          <p className='description' >Cuba isla</p>
        </div>
        <img alt='icon' className='icon' src='icons/01d.png' />
      </div>
      <div className="bottom">
        <p className='temperature'> 12°C </p>
        <div className='details' >
          <div className='parameters-row' >
            <span className=' '>details</span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>feels like </span>
            <span className='parameter-value'> 7°C </span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>Wind </span>
            <span className='parameter-value'> 15 kl/h </span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>humidity </span>
            <span className='parameter-value'> 70% </span>
          </div>
          <div className='parameters-row' >
            <span className='parameter-label'>pressure</span>
            <span className='parameter-value'> 30 hpa </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather