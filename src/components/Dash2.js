import React from 'react'
import Newpost from './Newpost'


const Dash2 = () => {
  return (
    <div>
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
          <Newpost/>
          </div>
          </body>
    </div>

    </div>
  )
}

export default Dash2