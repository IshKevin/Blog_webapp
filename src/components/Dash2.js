import React from 'react'
import { Link } from 'react-router-dom'
import Newpost from './Newpost'
import {BiEdit} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import axios from 'axios'
import { useForm } from 'react-hook-form'



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
                <Link to='/Dashboard'>Manage</Link>
            </button>
            <button className='button-dash'>
              <BiEdit/>New Post</button>
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