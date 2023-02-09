
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Manage from './Manage'


const Dashboard = () => {
    
  return (
    <div className='dash-disp'>
       <header className='heads'>
         <h1>Dashboard</h1>
         </header>
         <div class="sidebar">
         <aside class="sidebar__sidebar">
         <div div className ="dash">
            <button className='button-dash'>Manage</button><br/>
            <button className='button-dash'>
              <Link to='Dash2disp'>
                New Post
                </Link> 
                </button>
          </div>
          </aside>
          <main class="sidebar__main">
          <div className='man-disp'>
          <Manage/>
          </div>
          </main>
          </div>
    </div>

  )
}

export default Dashboard