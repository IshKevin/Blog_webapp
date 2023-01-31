import React from 'react'
import './HeaderStyle.css'

const Header = () => {
  return (
    <div className='head'>
        <div className='logo'>
        <h1>The Safari Blog</h1>
        </div>
        <div className='nav'>
            <a href='#'>Sign up</a>
            <a href='#'>Login</a>
         </div>   
    </div>
  )
}

export default Header