import "./current_weather.css";

const CurrentWeather = ({ data }) => {
  return (
   
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mx-auto custom-box text-center d-flex align-items-center flex-column details">
          <h1 className="mb-4">Current Weather</h1>
          <img src={`./icons/${data.weather[0].icon}.png`} alt="Weather Icon" className="mx-auto d-block mb-4" />
          <div className="custom-box-details">
            <p className="temperature">{`Temperature: ${Math.round(data.main.temp)}°C`}</p>
            <p>{data.weather[0].description}</p>
            <p className="weather_box_content_city">
            <i className="fa-solid fa-location-dot"></i> {data.city}</p>
            
          </div>
          <div className="weather_box_details">
          <div className="weather_box_details_feelsLike box">
            <i className="fa-solid fa-temperature-quarter"></i>
            <div>
              <p className="weather_box_details_p">{`${Math.round(data.main.feels_like)}°C`}</p>
              <p className="weather_box_details_p">feels like</p>
            </div>
          </div>
          <div className="weather_box_details_wind box">
            <i className="fa-solid fa-wind"></i>
            <div>
              <p className="weather_box_details_p">{data.wind.speed}</p>
              <p className="weather_box_details_p">wind</p>
            </div>
          </div>
          <div className="weather_box_details_humidity box">
            <span className="material-symbols-outlined weather_box_details_p ">
              {" "}
              humidity_percentage{" "}
            </span>
            <div>
              <p className="weather_box_details_p">{`${data.main.humidity}%`}</p>
              <p className="weather_box_details_p">humidity</p>
            </div>
          </div>
          <div className="weather_box_details_pressure box">
            <span className="material-symbols-outlined">compress</span>
            <div>
              <p className="weather_box_details_p">{`${data.main.pressure} hPa`}</p>
              <p className="weather_box_details_p">Pressure</p>
            </div>
          </div>

          
            
          </div>
          
        </div>
      </div>
  
  );
};

export default CurrentWeather;
