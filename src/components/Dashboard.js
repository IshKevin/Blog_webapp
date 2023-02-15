
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Manage from './Manage'
import {FiSettings} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiFillSetting} from 'react-icons/ai'

const Dashboard = ({posts}) => {
    
  return (
    <div className='dash-disp'>
       <header className='heads'>
        <div classsName='left-dash'>
       <h1>Dashboard</h1>
       <input type="text" className="search-text" placeholder="Search" />
        </div>
        <div>
         <AiFillSetting className='icon-home'/>
          <IoIosNotificationsOutline className='icon-home'/>
        
        <div>
        <div class="avatar">
          <img className="avatar__image" src={'avatar.png'} />
        </div>
        </div>
        </div>
         
         </header>
         <div className="sidebar">
         <aside className="sidebar__sidebar">
         <div div className ="dash">
         <button className='button-dash'>
              <Link className="button-dash" to='../Dash2disp'>
              <h1 className='button-title'>Home</h1>
                </Link> 
                </button><br/>          
            <button className='button-dash'>
            <h1 className='button-title'>Manage</h1>
            </button>
            <button className='button-dash'>
              <Link className="button-dash" to='../Dash2disp'>
              <h1 className='button-title'>New Post</h1>
                </Link> 
                </button>
                <button className='button-dash'>
              <Link className="button-dash" to='/'>
              <h1 className='button-title'>Logout</h1>
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