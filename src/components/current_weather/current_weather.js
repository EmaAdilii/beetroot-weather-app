import "./current_weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="weather_box">
        <div className="weather_box_title">
          <h1>Current Weather</h1>
        </div>
        <div className="weather_box_content">
          <img alt="sunny" src={`${data.weather[0].icon}.png`}/>
          <p className="weather_box_content_temperature">{` ${Math.round(data.main.temp)}°C`}</p>
          <p className="weather_box_content_temperature_description">{data.weather[0].description}</p>
          <p className="weather_box_content_city">
            <i className="fa-solid fa-location-dot"></i> {data.city}</p>
        </div>
        <div className="weather_box_details">
          <div className="weather_box_details_feelsLike box">
            <i className="fa-solid fa-temperature-quarter"></i>
            <div>
              <p>{`${Math.round(data.main.feels_like)}°C`}</p>
              <p>feels like</p>
            </div>
          </div>
          <div className="weather_box_details_wind box">
            <i className="fa-solid fa-wind"></i>
            <div>
              <p>{data.wind.speed}</p>
              <p>wind</p>
            </div>
          </div>
          <div className="weather_box_details_humidity box">
            <span className="material-symbols-outlined">
              {" "}
              humidity_percentage{" "}
            </span>
            <div>
              <p>{`${data.main.humidity}%`}</p>
              <p>humidity</p>
            </div>
          </div>
          <div className="weather_box_details_pressure box">
            <span className="material-symbols-outlined">compress</span>
            <div>
              <p>{`${data.main.pressure} hPa`}</p>
              <p>Pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
