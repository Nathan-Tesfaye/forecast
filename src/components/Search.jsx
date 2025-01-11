import React from 'react'
import { useRef } from 'react';
import search_icon from '../assets/search.png'

const Search = ({search}) => {

  const inputRef = useRef();

  const handleSearch = () => {
    const city = inputRef.current.value.trim();
    if(city){
      search(city);
    } else{
      alert("Please search by city name.")
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='city' />
      <img src={search_icon} alt="search button" onClick={handleSearch} />
    </div>
  )
}

export default Search