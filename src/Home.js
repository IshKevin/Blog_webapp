import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Photocase from './components/Photocase'
import Welcome from './components/Welcome'
import Footer from './components/Footer'

const Home = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <Header className="hheader"/>
    <Photocase/>
    <Footer/>
    </React.Fragment> 
  )
}

export default Home