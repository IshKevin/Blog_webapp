import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Photocase.css'
import axios from 'axios'
import { useState } from 'react'

  


const Photocase = ({posts}) => {
  

  console.log(posts);
  return (
    <>
      { posts?.map((post, index) =>  {
   console.log(post)

       return (
        <div className='post-pic'>
         <div className='sect-1'>
         <div key={index} className="post-box">
         <img src={post.photo} alt="Photocase" />
         <div className="post-Info">
           <div className="Post-Cats">
             <span className="Post-Cat">FLIM</span>
             <span className="Post-Cat">PHOTO</span>
           </div>
           <span className='post-title'>
             <Link to='SinglePost'>{post.title}</Link>
           </span>
           <span className="postDate">Posted on 12th May, 2018</span>
         </div>
         <div className="postDesc">
           <p className='copper'>{post.desc}</p>
         </div>
         </div>
          </div>
          </div>
        )
      })}
    </>
  )
}

export default Photocase