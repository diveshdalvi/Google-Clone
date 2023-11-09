import React,{Component} from 'react'
import Navbar from './Components/Navbar'
import HomeSearchBox from './Components/homeSearchBox'

import Footer from './Components/Footer';


const App = () => {
  return (
    <div >
      <Navbar/>

      <HomeSearchBox/>
      <Footer/>
    </div>
  )
}

export default App