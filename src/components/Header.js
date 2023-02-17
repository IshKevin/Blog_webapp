import React from 'react'
import { Link } from 'react-router-dom'

import './HeaderStyle.css'

const Header = () => {
  return (
    <div className="home-text">
    <div className="wlcm-txt">
      <small>Our Blog</small>
      <h1>Writings from our team</h1>
      <p>
        The latest industry news, interviews, technologies, and resources.
      </p>
      <div className="home-btns">
        <button className="get-started">
          <Link
            to="/signup"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Get Started
          </Link>
        </button>
        <button>View Pricing</button>
      </div>
    </div>
  </div>
    // <div className='head'>
    //  <div className='text-header'>
    //  Welcome to Safari Blog, your ultimate guide to exploring the wilds of Africa. 
    //  Join us on our journey as we travel to the heart of the savanna, showcasing 
    //  the beauty and diversity of its flora and fauna.
    //   </div>   
    // </div>
  )
}

export default Header