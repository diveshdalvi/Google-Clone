import React, { useEffect } from 'react'
import axios from 'axios';
const SearchResult = ({searchText}) => {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const options = {
                method: 'POST',
                url: 'https://google-api31.p.rapidapi.com/websearch',
                headers: {
                  'content-type': 'application/json',
                  'X-RapidAPI-Key': '658f5b8a7dmsh8ef18cf53673e22p14bf79jsn91d91ab012df',
                  'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                data: {
                    text: {searchText},
                    safesearch: 'off',
                    timelimit: '',
                    region: 'wt-wt',
                    max_results: 20
                  }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
                  setSearchResults(response.data);
                  
              } catch (error) {
                  console.error(error);
              }
        }
        getData()
    },[searchText])
    
  return (
    <div>
        {searchResults.map((result, index) => (
        <h1 key={index}>{result.title}</h1>
      ))}
    </div>
  )
}

export default SearchResult