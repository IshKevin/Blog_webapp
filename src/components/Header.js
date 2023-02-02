import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome'

import './HeaderStyle.css'

const Header = () => {
  return (
    <div className='head'>
        <div className='logo'>
        <h1>The Safari Blog</h1>
        </div>
        <div className='nav'>
            <Link to='Signup'>Signup</Link>
            <Link to='Login'>Login</Link>
            
         </div>   
    </div>
  )
}

export default Header