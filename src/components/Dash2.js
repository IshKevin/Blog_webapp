import React from 'react'
import { Link } from 'react-router-dom'
import Newpost from './Newpost'


const Dash2 = () => {
  return (
    <div>
        <div className='dash-disp'>
       <header className='heads'>
         <h1>Dashboard</h1>
         </header>
         <div class="sidebar">
         <aside class="sidebar__sidebar">
         <div div className ="dash">
            <button className='button-dash'>
                <Link to='/Dashboard'>Manage</Link>
            </button>
            <button className='button-dash'>New Post</button>
          </div>
          </aside>
          <main class="sidebar__main">
          <div className='man-disp'>
          <Newpost/>
          </div>
          </main>
          </div>
    </div>

    </div>
  )
}

export default Dash2