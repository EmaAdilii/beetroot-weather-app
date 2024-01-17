import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search_component/search';
import CurrentWeather from './components/current_weather/current_weather';
import Forecast from './components/forecast/forecast';
import { Weather_MY_API, WEATHER_API_URL, GEO_API_URL, geoApiOptions } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const [weatherResponse, forecastResponse] = await Promise.all([
              fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_MY_API}&units=metric`),
              fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${Weather_MY_API}&units=metric`)
            ]);

            const [weatherData, forecastData] = await Promise.all([
              weatherResponse.json(),
              forecastResponse.json()
            ]);
            setCurrentWeather({ city: `${weatherData.name}, ${weatherData.sys.country}`, ...weatherData });
            setForecastWeather({ city: `${weatherData.name}, ${weatherData.sys.country}`, ...forecastData });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchCurrentLocation();
  }, []); 

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
  };

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
