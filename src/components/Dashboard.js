import React from 'react'
import './Dashboard.css'
import Manage from './Manage'

const Dashboard = () => {
    const displaymanager = () => {
       return <Manage/>
    }
  return (
    <div>
       <div className='heads'>
         <h1>Dashboard</h1>
         </div>
         <div div className ="dash">
            <button className='button-dash' onClick={displaymanager}>Manage</button><br/>
            <button className='button-dash'>New Post</button>
        </div>
    </div>
  )
}

export default Dashboard