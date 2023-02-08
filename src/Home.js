import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Photocase from './components/Photocase'


const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header className="hheader"/>
    <Photocase/>
    </div> 
  )
}

export default Home