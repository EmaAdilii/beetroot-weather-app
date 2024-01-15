import "./current_weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="weather_box">
        <div className="weather_box_title">
          <h1>Current Weather</h1>
        </div>
        <div className="weather_box_content">
           <img alt="sunny" src="sun-26344_640.png"/> 
           <p className="weather_box_content_temperature">18°C</p>
           <p className="weather_box_content_temperature_description">sunny</p>
           <p className="weather_box_content_city"><i className="fa-solid fa-location-dot"></i> Belgrade</p>

        </div>
        <div className="weather_box_details">
           
            <div className="weather_box_details_feelsLike box">
            <i className="fa-solid fa-temperature-quarter"></i>
                <div>
                    <p>17 °C</p>
                    <p>feels like</p>
                </div>
            </div>
            <div className="weather_box_details_wind box">
            <i className="fa-solid fa-wind"></i>
                 <div>
                    <p>2 m/s</p>
                    <p>wind</p>
                </div>
            </div>
            <div className="weather_box_details_humidity box">
            <span className="material-symbols-outlined"> humidity_percentage </span>
                <div>
                    <p>15%</p>
                    <p>humidity</p>
                </div>
            </div>
            <div className="weather_box_details_pressure box">
            <span className="material-symbols-outlined">compress</span>
                <div>
                    <p>15hPa</p>
                    <p>Pressure</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
