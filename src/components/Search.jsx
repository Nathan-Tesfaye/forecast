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
    <div className='flex justify-center items-center gap-2 py-10 bg-blue-200'>
      <input
        type="text"
        ref={inputRef}
        placeholder="city"
        className="bg-white w-3/4 p-3  rounded-3xl"
      />
      <img
        src={search_icon}
        alt="search button"
        onClick={handleSearch}
        className="bg-white rounded-3xl p-3 cursor-pointer"
      />
    </div>
  );
};

export default Search;
