import React, { useState } from 'react';
import './App.css';
import Search from './components/search_component/search';
import CurrentWeather from './components/current_weather/current_weather';
import Forecast from './components/forecast/forecast';
import { Weather_MY_API, WEATHER_API_URL } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_MY_API}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${Weather_MY_API}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const [weatherResponse, forecastResponse] = await Promise.all(responses.map(response => response.json()));

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error("Error fetching weather data:", err));
  }

  console.log("Current Weather:", currentWeather);
  console.log("Forecast Weather:", forecastWeather);

  return (
    <div className="container">
      <div className="container_box">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecastWeather && <Forecast data={forecastWeather} />}
      </div>
    </div>
  );
}

export default App;
