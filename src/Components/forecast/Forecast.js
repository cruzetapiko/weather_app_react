import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion"
import './Forecast.css'

const WEEK_ARRAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Forecast = ({ data }) => {

    const tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() + (24 * 60 * 60 * 1000)); // add one day

    const tomorrowDayInWeek = tomorrow.getDay();
    const forecastDays = WEEK_ARRAY.slice(tomorrowDayInWeek, WEEK_ARRAY.length).concat(WEEK_ARRAY.slice(0, tomorrowDayInWeek));

    console.log(forecastDays);

    return (
        <>
            <label className="title" >Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index} >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item" >
                                    <img className="icon-small" alt="weather icon" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day" >{forecastDays[index]}</label>
                                    <label className='description' >{item.weather[0].description}</label>
                                    <label className='min-max' >{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-grid" >
                                <div className="daily-item-grid-detail">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-item-grid-detail">
                                    <label>humidity</label>
                                    <label>{item.main.humidity} hPa</label>
                                </div>
                                <div className="daily-item-grid-detail">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className="daily-item-grid-detail">
                                    <label>wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-item-grid-detail">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-item-grid-detail">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast