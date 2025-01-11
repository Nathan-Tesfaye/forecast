import React, { useEffect, useState } from "react";
import CurrentCard from "./CurrentCard";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import ForecastCard from "./ForecastCard";
import Search from "./Search";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("please enter city name.");
      return;
    }

    try {
      //fetch current weather data
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const currentWeatherResponse = await fetch(currentWeatherUrl);
      const currentWeatherData = await currentWeatherResponse.json();

      if (!currentWeatherResponse.ok) {
        alert(currentWeatherData.message);
        return;
      }

      console.log(currentWeatherData);
      const icon = allIcons[currentWeatherData.weather[0].icon] || clear_icon;
      setWeatherData({
        description: currentWeatherData.weather[0].description,
        humidity: currentWeatherData.main.humidity,
        windSpeed: currentWeatherData.wind.speed,
        temp: Math.floor(currentWeatherData.main.temp),
        location: currentWeatherData.name,
        icon: icon,
      });

      //Fetch forecast data
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const forecastResponse = await fetch(forecastUrl);
      const futureData = await forecastResponse.json();

      if (!forecastResponse.ok) {
        alert(futureData.message);
        return;
      }

      // Filter for the next 5 3-hourly forecasts
      const nextFiveForecast = futureData.list.slice(0, 4).map((i) => ({
        time: i.dt_txt,
        temp: Math.floor(i.main.temp),
        condition: i.weather[0].description,
        icon: allIcons[i.weather[0].icon] || clear_icon,
      }));

      console.log(futureData);
      setForecastData(nextFiveForecast);
    } catch (error) {
      console.error("Can't fetch data.");
    }
  };

  useEffect(() => {
    search("Addis Ababa");
  }, []);
  return (
    <div>
      <Search search={search}/>
      <CurrentCard weatherData={weatherData} />
      <ForecastCard forecastData={forecastData} />
    </div>
  );
};

export default Weather;
