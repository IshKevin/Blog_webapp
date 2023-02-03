import React, { Children } from 'react'
import './Dashboard.css'
import Manage from './Manage'
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
    
  return (
    <div className='dash-disp'>
       <header className='heads'>
         <h1>Dashboard</h1>
         </header>
         <body className='body'>
         <div div className ="dash">
            <button className='button-dash'>Manage</button><br/>
            <button className='button-dash'>New Post</button>
          </div>
          <div className='man-disp'>
          <Manage/>
          </div>
          </body>
    </div>

  )
}

export default Dashboard