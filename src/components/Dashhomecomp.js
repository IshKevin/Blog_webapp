import './Dashboard.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiFillSetting} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Chart from './Chart'


const Dashhome = () => {
  return (
    <div className='dash-disp'>
       <header className='heads'>
        <div classsName='left-dash' className='new-dash-disp'>
       <h1>Dashboard</h1>
       <input type="text" className="search-text" placeholder="Search" />
        </div>
        <div className='right-dash'>
         <AiFillSetting color="white" className='icon-home' />
          <IoIosNotificationsOutline className='icon-home'/>
        
        <div>
        <div class="avatar">
          <img className="avatar__image" src={'avatar.png'} alt='useravatar'/>
        </div>
        </div>
        </div>
         
         </header>
         <div className="sidebar">
         <aside className="sidebar__sidebar">
         <div div className ="dash">
         <button className='button-dash'>
            <h1 className='button-title'>Home</h1>
            </button>
         <button className='button-dash'>
              <Link className="button-dash" to='../DashBoard'>
              <h1 className='button-title'>Manage</h1>
                </Link> 
                </button><br/>          
            
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
          <Chart/>
          </div>
          </main>
          </div>

    </div>
  )
}

export default Dashhome