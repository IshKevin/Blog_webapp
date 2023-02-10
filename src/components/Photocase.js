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
        <div className="disp-for-posts">
        <div className='post-pic'>
         <div key={index} className="post-box">
         <img src={post.photo} alt={post.categories} />
         <div className="post-Info">
           <div className="Post-Cats">
             <span className="Post-Cat">{post.categories}</span>
           </div>
           <span className='post-title'>
             <Link to='SinglePost'>{post.title}</Link>
           </span>
           <span className="postDate">Posted on 12th May, 2018</span>
         </div>
         <div className="postDesc">
           <p className='copper'>{post.desc.slice(0,100)}</p>
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