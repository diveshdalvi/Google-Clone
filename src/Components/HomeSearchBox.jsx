import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
const HomeSearchBox = ({searchTextValue}) => {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {
    if(searchBox.value != ''){
      setSearchText(searchBox.value)
      searchTextValue(searchBox.value)
      
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      handleSearch()
    }
  }
  return (
    <div className=" pt-9 flex  bg-base-300 flex-col justify-center items-center p-4 mb-5">
      <div className="w-full justify-center flex mb-5">
        <input
        type="search"
        placeholder="Search"
        id="searchBox"
        className="input input-bordered input-[white] sm:w-1/2 w-full sm:max-w-lg max-w-xs"
        onKeyDownCapture={(e) => handleKeyPress(e)}
      />
      <button className="p-3 bg-blue-700 rounded-md  ml-6 sm:px-5 sm:mt-0  active:bg-blue-800 text-white" onClick={handleSearch}>
        Search
      </button>

      </div>
      
    </div>
  );
};

export default HomeSearchBox;
