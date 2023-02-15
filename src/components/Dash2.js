import React from 'react'
import { Link } from 'react-router-dom'
import Newpost from './Newpost'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiFillSetting} from 'react-icons/ai'



const Dash2 = ({posts}) => {
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {

    console.log(data.description);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    console.log(formData.get("title"));

    try {
       await axios.post("https://blogapi-wm30.onrender.com/api/v1/blog", formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${localStorage.getItem("token")}`
      }
      });
       reset();
      alert ("Successfully");
    
      
    } catch (err) {
      console.error(err.response);
    }
  };
  return (
    <div>
        
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
                <Link className='button-dash' to='/Dashboard'>
                <h1 className='button-title'>Manage</h1>
                </Link>
            </button>
            <button className='button-dash'>
              <Link className="button-dash" >
              <h1 className='button-title'>New post</h1>
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
          <Newpost posts={posts}/>
          </div>
          </main>
          </div>
    </div>

    </div>
  )
}

export default Dash2