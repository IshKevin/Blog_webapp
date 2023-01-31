import React from 'react'
import { Link } from 'react-router-dom'

import './HeaderStyle.css'

const Header = () => {
  return (
    <div className='head'>
        <div className='logo'>
        <h1>The Safari Blog</h1>
        </div>
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='Signup'>Signup</Link>
            <Link to='#'>Login</Link>
            
         </div>   
    </div>
  )
}

export default Header