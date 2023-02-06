import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Loginform from './components/Loginform'
import Navbar from './components/Navbar'

const Login = () => {
  return (
    <div>
        <Navbar/>
        <Loginform/>
        <Footer/>
    </div>
  )
}

export default Login