import React from "react";

const ForecastCard = ({ forecastData }) => {
  // console.log(forecastData);

  return (
    <div className="grid grid-cols-2 gap-4 mx-5 md:grid-cols-4   text-gray-800">
      {forecastData.map((item, index) => (
        <div
          className="flex flex-col  justify-center items-center py-4 rounded-3xl 
            my-4  shadow-xl bg-green-100  md:shadow-2xl hover:scale-110 transition-transform duration-500"
          key={index}
        >
          <img
            src={item.icon}
            alt="weather condition icon"
            className="size-24"
          />
          <p className="text-4xl">{item.temp}&deg;C</p>
          <p className="text-xl">{item.time.match(/\d{2}:\d{2}:\d{2}/)[0]}</p>
          <p className="lg:text-lg">{item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
