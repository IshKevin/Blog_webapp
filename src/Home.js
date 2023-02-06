import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Photocase from './components/Photocase'
import Welcome from './components/Welcome'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      <React.Fragment>
    <Navbar/>
    <Header className="hheader"/>
    <Photocase/>
    <Footer/>
    </React.Fragment>
    </div>
  )
}

export default Home