import React from 'react'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const CurrentCard = ({weatherData}) => {

  if(!weatherData){
    return null;
  }

  // console.log(weatherData)
  return (
    <div className='pb-7 text-semibold bg-blue-200'>
      <div className='flex flex-col items-center'>
        <img src={weatherData.icon} alt="condition icon"
        className='size-1/4'/>
        <p className='text-5xl'>{weatherData.temp}&deg;C</p>
        <p className='text-3xl'>{weatherData.location}</p>
      </div>
      <div className='flex justify-center gap-10 mt-5'>
        <div className='flex  items-center gap-3'>
          <img src={humidity} alt=""
          className='bg-slate-500 rounded-full'/>
          <p className='text-xl'>{weatherData.humidity}</p>
        </div>
        <div className='flex items-center gap-3'>
          <img src={wind} alt=""
          className='bg-slate-500 rounded-full'/>
          <p>{weatherData.windSpeed} km/hr</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentCard