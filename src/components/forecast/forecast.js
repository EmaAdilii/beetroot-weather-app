import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  console.log(forecastDays);

  const slicedData = data.list.slice(0, 7);

  return (
    <>
      <div className="forecast_container">
        <label className="title">5 Day Forecast:</label>
        <Accordion className="forecast_container_boxes" allowZeroExpanded>
          {slicedData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      className="icon-small" 
                      alt="daily item icon"
                    />
                    <label className="day">{forecastDays[index]}</label>
                    <label className="min-max">
                      {Math.round(item.main.temp_max)}°C /
                      {Math.round(item.main.temp_min)}°C
                    </label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details">
                  {data.list
                    .filter(
                      (hourlyItem) =>
                        new Date(hourlyItem.dt * 1000).getUTCDay() ===
                        (index === 6 ? 0 : new Date().getUTCDay() + 1)
                    )
                    .map((hourlyItem, hourlyIndex) => (
                      <div
                        className="daily-details-grid-item"
                        key={hourlyIndex}
                      >
                        <label className="hour">{`${new Date(
                          hourlyItem.dt * 1000
                        ).getHours()}:00`}</label>
                        <label className="temperature">
                          {Math.round(hourlyItem.main.temp)}°C
                        </label>
                      </div>
                    ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
