import React from "react";

const ForecastCard = ({ forecastData }) => {
  // console.log(forecastData);

  return (
    <div className="flex flex-wrap font-semibold bg-blue-200 gap-x-8 justify-center text-gray-800">
      {forecastData.map((item, index) => (
        <div
          className="flex flex-col  justify-center items-center w-44 h-56 rounded-3xl p-5
            my-4 bg-blue-400" key={index}>
          <img
            src={item.icon}
            alt="weather condition icon"
            className="size-24"
          />
          <p className="text-4xl">{item.temp}&deg;C</p>
          <p className="text-2xl">{item.time.match(/\d{2}:\d{2}:\d{2}/)[0]}</p>
          <p className="text-xl whitespace-nowrap">{item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
