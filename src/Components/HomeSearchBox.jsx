import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
const HomeSearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearch = () => {
    setIsSearchClicked(true);
    
    if (isSearchClicked) {
      setSearchText(searchText);
    }
  
  };
  const showResult = () => {
    return isSearchClicked && <SearchResult searchText={searchText} />;
  };
  return (
    <div className=" pt-9 flex  bg-base-300 flex-col justify-center items-center p-4">
      <div className="w-full justify-center flex mb-5">
        <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-[white] sm:w-1/2 w-full sm:max-w-lg max-w-xs"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="p-3 bg-blue-700 rounded-md  ml-6 sm:px-5 sm:mt-0  active:bg-blue-800 text-white" onClick={showResult}>
        Search
      </button>

      </div>
      <div className='flex bg-base-300 p-3 justify-center mb-5'>
        <span className=' bg-blue-700 rounded-md p-2 mx-3 cursor-pointer text-white active:bg-blue-800'>Image</span>
        <span className=' bg-blue-700 rounded-md p-2 mx-3 cursor-pointer text-white active:bg-blue-800'>Video</span>
        <span className=' bg-blue-700 rounded-md p-2 mx-3 cursor-pointer text-white active:bg-blue-800'>News</span>
    </div>
    </div>
  );
};

export default HomeSearchBox;
