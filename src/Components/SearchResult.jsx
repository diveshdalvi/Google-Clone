import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import axios from 'axios'
const SearchResult = ({searchQuery}) => {
const [searchResult,setSearchResult] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const options = {
        method: 'GET',
        url: 'https://google-search74.p.rapidapi.com/',
        params: {
          query: searchQuery,
          limit: '20',
          related_keywords: 'true'
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setSearchResult(response.data.results)
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    if (searchQuery !== '') {
      getData()
    }
  },[searchQuery])
  return (
    <div className=' flex justify-center pt-4 flex-col '>
      {searchResult.map(result => (
        <div className=' border-[#003554] flex flex-col  w-5/6 sm:w-3/4 rounded-lg p-4 bg-base-300 shadow-lg border-2 m-auto mb-4'>
      <h2 className='text-2xl mb-3 underline hover:text-blue-500'><a href={result.url} target='_blank'>{result.title || <Skeleton width={200}/>}</a></h2>
      <p>{result.description || <Skeleton  count={5}/>}</p>
      </div>
      ))}
      
    </div>
  )
}

export default SearchResult