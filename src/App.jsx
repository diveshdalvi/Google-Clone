import React,{useCallback, useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import HomeSearchBox from './Components/HomeSearchBox'
import axios from 'axios'
import Footer from './Components/Footer';
import SearchResult from './Components/SearchResult';


const App = () => {
  const [searchResults , setSearchResults] = useState('');
  const [searchQuery,setSearchQuery] = useState('');
  const getSearchValue = useCallback((searchValue) => {
    setSearchQuery(searchValue);

    console.log(searchQuery)
  }, []);
  
  
      useEffect(() => {
        const getData = async(searchQuery) => {
          const options = {
            method: 'GET',
            url: 'https://google-search74.p.rapidapi.com/',
            params: {
              query: searchQuery,
              limit: '3',
              related_keywords: 'true'
            },
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
              'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            setSearchResults(response.data);
            console.log(response.data)
          } catch (error) {
            console.error(error);
          }
        }
        if (searchQuery !== '') {
          
        }
      },[searchQuery])
      
  return (
    <div  className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1">
      <HomeSearchBox searchTextValue={getSearchValue}/>
      <SearchResult searchResults={searchResults}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App