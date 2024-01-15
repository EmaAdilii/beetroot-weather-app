
import './App.css';
import Search from './components/search_component/search'
import CurrentWeather from './components/current_weather/current_weather';
import { Weather_MY_API } from './api';
import { WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleOnSearchChange =(searchData) =>{
    const[latitude, longtitude] = searchData.value.split(" ");
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longtitude}&appid=${Weather_MY_API}`)
    Promise.all(currentWeatherFetch)
    .then(async(response) =>{
     const weatherResponse = await response[0].jason();
     setCurrentWeather({city: searchData.label, ...weatherResponse});
    })
    .catch((err) => console.log(err));
  }
console.log(currentWeather);


  return (
    <div className="container">
     <div className="container_box">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather/>
     </div>
    </div>
  );
}

export default App;
