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
    </div>
  )
}

export default CurrentWeather