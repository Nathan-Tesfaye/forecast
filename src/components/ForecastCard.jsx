import React from "react";

const ForecastCard = ({ forecastData }) => {
  // console.log(forecastData);

  return (
    <div className="flex flex-wrap gap-x-8 justify-center text-gray-800">
      {forecastData.map((item, index) => (
        <div
          className="flex flex-col  justify-center items-center w-40 h-52 py-4 rounded-3xl 
            my-4 bg-blue-300 shadow-xl lg:bg-green-100 lg:w-44 lg:shadow-2xl" key={index}>
          <img
            src={item.icon}
            alt="weather condition icon"
            className="size-24"
          />
          <p className="text-4xl">{item.temp}&deg;C</p>
          <p className="text-xl">{item.time.match(/\d{2}:\d{2}:\d{2}/)[0]}</p>
          <p className="lg:text-xl">{item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
