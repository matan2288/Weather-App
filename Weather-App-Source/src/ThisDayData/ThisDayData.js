import React, { useState } from "react";
import "./Style/ThisDayStyle.css";
import axios from "axios";



function ThisDayData() {
  let defaultImage = require("./default.png")
  
  const [cityInitalData, setCityData] = useState({
    currentCity: "City",
    currentCityTime: "Today's Date & Time",
    currentTemperture: " C°",
    currentTempertureIcon: defaultImage,
    weatherDescription: "Description",
    Timezone: "Timezone",
    windSpeed: "km/h",
    Humidity: "Humidity",
    Sunrise: "Sunrise",
    Sunset: "Sunset",
  });

  const fetchCityApi = {
    url: "",
    method: "POST",
  };

  return (
    <div id="thisday-maindiv">
      <div id="thisday-data-container">
        <div id="today-plus-city" className="thisday-data-container-children">
          <div id="city-and-date">
            <div id="city">{cityInitalData.currentCity}</div>

            <div id="thisday-date">{cityInitalData.currentCityTime}</div>
          </div>

          <div id="logo-and-degrees">
            <p id="main-degrees">{cityInitalData.currentTemperture}</p>
            <img src={cityInitalData.currentTempertureIcon} />
          </div>
        </div>

        <div
          id="input-plus-extraData"
          className="thisday-data-container-children"
        >
          <div id="input-container">
            <input id="input-id" placeholder="Type your city name here" />
            <p>Note: A 2 word city CAN have a whitespace between its words!</p>
            <button
              id="btn"
              onClick={() => {
                let newInputValue = document.getElementById("input-id").value;
                fetchCityApi.url = `https://api.weatherbit.io/v2.0/current?city=${newInputValue}&key=ce1f07968989432587a6186a11a21620`;
                axios(fetchCityApi)
                  .then((response) => {
                       setCityData({
                      currentCity: response.data.data[0].city_name,
                      currentCityTime: response.data.data[0].ob_time,
                      currentTemperture:
                      response.data.data[0].temp + "c °",
                      currentTempertureIcon:
                      `https://www.weatherbit.io/static/img/icons/${response.data.data[0].weather.icon}.png`
                      ,
                      weatherDescription:
                      response.data.data[0].weather.description,
                      Timezone: response.data.data[0].timezone,
                      windSpeed: response.data.data[0].wind_spd + "km/h",
                      Humidity: response.data.data[0].rh + '%' ,
                      Sunrise: response.data.data[0].sunrise,
                      Sunset: response.data.data[0].sunset,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Get Data
            </button>
          </div>

          <div id="extra-data">
            <div id="sunrise-sunset">
              <p>
                Weather Description:<p>{cityInitalData.weatherDescription}</p>
              </p>
              <p>
                Timzone: <p>{cityInitalData.Timezone}</p>
              </p>
            </div>

            <div id="wind-rain">
              <p>
                Wind Speed:<p>{cityInitalData.windSpeed}</p>{" "}
              </p>
              <p>
                Humidity:<p>{cityInitalData.Humidity}</p>{" "}
              </p>
            </div>

            <div id="highest-lowest">
              <p>
                Sunrise: <p>{cityInitalData.Sunrise}</p>
              </p>
              <p>
                Sunset: <p>{cityInitalData.Sunset}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThisDayData;
