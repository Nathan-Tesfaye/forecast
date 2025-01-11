import React from "react";
import { useRef } from "react";
import search_icon from "../assets/search.png";

const Search = ({ search }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const city = inputRef.current.value.trim();
    if (city) {
      search(city);
    } else {
      alert("Please search by city name.");
    }
  };

  return (
    <div className='flex justify-center items-center gap-2 py-10 rounded-xl bg-green-100'>
      <input
        type="text"
        ref={inputRef}
        placeholder="city"
        className="bg-white w-3/4 p-3 focus:border focus:outline-none focus:border-blue-300 rounded-3xl shadow-xl lg:shadow-2xl lg:w-1/2"
      />
      <img
        src={search_icon}
        alt="search button"
        onClick={handleSearch}
        className="bg-white rounded-3xl p-3 cursor-pointer  hover:scale-110 transition-transform duration-300 hover:bg-blue-100"
      />
    </div>
  );
};

export default Search;
