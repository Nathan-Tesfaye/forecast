import React from 'react'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const CurrentCard = ({weatherData}) => {

  if(!weatherData){
    return null;
  }

  // console.log(weatherData)
  return (
    <div>
      <img src={weatherData.icon} alt="condition icon" />
      <p>{weatherData.temp}&deg;C</p>
      <p>{weatherData.location}</p>
      <div>
        <img src={humidity} alt="" />
        <p>{weatherData.humidity}</p>
      </div>
      <div>
        <img src={wind} alt="" />
        <p>{weatherData.windSpeed} km/hr</p>
      </div>
    </div>
  )
}

export default CurrentCard