
import './App.css';
import Search from './components/search_component/search'
import CurrentWeather from './components/current_weather/current_weather';
import { Weather_MY_API } from './api';
import { WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forestWeather, setForestWeather] = useState(null);
  const handleOnSearchChange =(searchData) =>{
    const[latitude, longtitude] = searchData.value.split(" ");
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longtitude}&appid=${Weather_MY_API}&units=metric`)
    const forestFetch =fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longtitude}&appid=${Weather_MY_API}&units=metric`)
    Promise.all([currentWeatherFetch, forestFetch])
    .then(async(response) =>{
     const weatherResponse = await response[0].json();
     const forestResponse = await response[1].json();
     setCurrentWeather({city: searchData.label, ...weatherResponse});
     setForestWeather({city: searchData.label, ...forestResponse})
    })
    .catch((err) => console.log(err));
  }
console.log(currentWeather);
console.log(forestWeather);


  return (
    <div className="container">
     <div className="container_box">
        <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
     </div>
    </div>
  );
}

export default App;
