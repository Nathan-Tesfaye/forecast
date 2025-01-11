import React from 'react'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const CurrentCard = ({weatherData, population}) => {

  if(!weatherData){
    return null;
  }

  // console.log(weatherData)
  return (
    <div className='pb-5 text-semibold'>
      <div className='flex flex-col items-center'>
        <img src={weatherData.icon} alt="condition icon"
        className='size-1/4 lg:size-36'/>
        <p className='text-5xl'>{weatherData.temp}&deg;C</p>
        <p className='text-3xl'>{weatherData.location}</p>
        <p className='text-xl font-light'>Population</p>
        <p className='font-semibold text-lg'>{population}</p>
      </div>
    </div>
  )
}

export default CurrentCard