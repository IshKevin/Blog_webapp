import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
       <div className='heads'>
         <h1>Dashboard</h1>
         </div>
         <div div className ="dash">
            <button className='button-dash'>Manage</button><br/>
            <button className='button-dash'>New Post</button>
        </div>
    </div>
  )
}

export default Dashboard