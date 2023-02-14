
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Manage from './Manage'
import {AiFillHome} from 'react-icons/ai'
import {MdDashboard} from 'react-icons/md'


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
         <div className="sidebar">
         <aside className="sidebar__sidebar">
         <div div className ="dash">
         <button className='button-dash'>
              <Link className="button-dash" to='../Dash2disp'>
              <h1 className='button-title'>Home
                </Link> 
                </button><br/>          
            <button className='button-dash'>Manage</button>
            <button className='button-dash'>
              <Link className="button-dash" to='../Dash2disp'>
                New Post
                </Link> 
                </button>
                <button className='button-dash'>
              <Link className="button-dash" to='/'>
                Logout
                </Link> 
                </button>    
          </div>
          </aside>
          <main className="sidebar__main">
          <div className='man-disp'>
          <Manage posts={posts}/>
          </div>
          </main>
          </div>
    </div>

  )
}

export default Dashboard