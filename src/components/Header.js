import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome'

import './HeaderStyle.css'

const Header = () => {
  return (
    <div className='head'>
     <div className='welcome-text-header'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>   
    </div>
  )
}

export default Header