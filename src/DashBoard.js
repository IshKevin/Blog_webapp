import React from 'react'
import Dashboard from './components/Dashboard'

const DashBoard = ({posts}) => {
  return (
    <div>
      <Dashboard posts={posts}/>
    </div>
  )
}

export default DashBoard