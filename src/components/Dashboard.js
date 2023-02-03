import React, { Children } from 'react'
import './Dashboard.css'
import Manage from './Manage'
import {NavLink} from 'react-router-dom'

const Dashboard = (Children) => {
    // const menuitems = [{
    //     path:'/manage',
    //     name:'Manage'
    //      },
    //     {
    //     path:'/newpost',
    //     name:'New Post'
    //     }

    // ]
    // const displaymanager = () => {
    //    return <Manage/>
    // }
  return (
    <div className='dash-disp'>
       <header className='heads'>
         <h1>Dashboard</h1>
         </header>
         <body className='body'>
         <div div className ="dash">
            <button className='button-dash'>Manage</button><br/>
            <button className='button-dash'>New Post</button>
           {/* <div>
              {menuitems.map((item, index) => (
              <NavLink to={item.path} key={index}>
              {item.name}
              <div className='line'>
                {item.name}
              </div>
              </NavLink>
            ))} */}
          </div>
          <div className='man-disp'>
          <Manage/>
          </div>
          </body>
    </div>

  )
}

export default Dashboard