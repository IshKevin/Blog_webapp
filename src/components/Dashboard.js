
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Manage from './Manage'
import {AiFillHome} from 'react-icons/ai'


const Dashboard = ({posts}) => {
    
  return (
    <div className='dash-disp'>
       <header className='heads'>
        <button>
        <Link to='/'>
         <AiFillHome className='icon-home'/>
         </Link>
        </button>
         <h1>Dashboard</h1>
         </header>
         <div class="sidebar">
         <aside class="sidebar__sidebar">
         <div div className ="dash">
            <button className='button-dash'>Manage</button><br/>
            <button className='button-dash'>
              <Link to='../Dash2disp'>
                New Post
                </Link> 
                </button>
          </div>
          </aside>
          <main class="sidebar__main">
          <div className='man-disp'>
          <Manage posts={posts}/>
          </div>
          </main>
          </div>
    </div>

  )
}

export default Dashboard