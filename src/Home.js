import React from 'react'
import Header from './components/Header'
import Photocase from './components/Photocase'
import Welcome from './components/Welcome'

const Home = () => {
  return (
    <div>
    <Header className="hheader"/>
    <Welcome className="welcome"/>
    <Photocase/>
    </div>
  )
}

export default Home