import React,{Component} from 'react'
import Navbar from './Components/Navbar'
import HomeSearchBox from './Components/homeSearchBox'

import Footer from './Components/Footer';
import SearchResult from './Components/SearchResult';


const App = () => {
  return (
    <div  className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1">
      <HomeSearchBox/>
      <SearchResult/>
      </div>
      <Footer/>
    </div>
  )
}

export default App