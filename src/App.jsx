import React,{useCallback, useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import HomeSearchBox from './Components/HomeSearchBox'
import axios from 'axios'
import Footer from './Components/Footer';
import SearchResult from './Components/SearchResult';


const App = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const getSearchValue = useCallback((searchValue) => {
    setSearchQuery(searchValue);
  }, []);
  return (
    <div  className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1">
      <HomeSearchBox searchTextValue={getSearchValue}/>
      <SearchResult searchQuery={searchQuery}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App