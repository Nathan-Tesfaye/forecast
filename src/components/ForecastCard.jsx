import React from "react";

const ForecastCard = ({ forecastData }) => {

  // console.log(forecastData);

  return (
    <div>
      {forecastData.map((item, index) => (
        <div key={index}>
          <img src={item.icon} alt="" />
          <p>{item.temp}&deg;C</p>
          <p>{item.time.match(/\d{2}:\d{2}:\d{2}/)[0]}</p>
          <p>{item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
