import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Photocase.css'
import axios from 'axios'
import { useState } from 'react'

  


const Photocase = ({posts}) => {
  

  console.log(posts);
  return (
    <div>
      { posts?.map((post, index) =>  {
   console.log(post)

       return (
        <div>
          <img src={post.photo} alt="" />
          <div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
        </div>
      )})}
    </div>
//     <div className='post-pic'>
//       <div className='post-pic'>
//   <div className='sect-1'>
//   {Array.isArray(posts) && posts.map((post, index) => (
//       <div key={index} className="post-box">
//         <img src={post.photo} alt="Photocase" />
//         <div className="post-Info">
//           <div className="Post-Cats">
//             <span className="Post-Cat">FLIM</span>
//             <span className="Post-Cat">PHOTO</span>
//           </div>
//           <span className='post-title'>
//             <Link to='SinglePost'>{post.title}</Link>
//           </span>
//           <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>{post.desc}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
//     <div className='post-pic'>
//   <div className='sect-1'>
//     {posts.map((post, index) => (
//       <div key={index} className="post-box">
//         <img src={post.image} alt="Photocase" />
//         <div className="post-Info">
//           <div className="Post-Cats">
//             <span className="Post-Cat">FLIM</span>
//             <span className="Post-Cat">PHOTO</span>
//           </div>
//           <span className='post-title'>
//             <Link to='SinglePost'>{post.title}</Link>
//           </span>
//           <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>{post.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//         <div className="post-box">
//       <img src={process.env.PUBLIC_URL + '/Images/pexels-paul-deetman-2695679.jpg'} alt="Photocase" />
//       <div className="post-Info">
//         <div className="Post-Cats">
//           <span className="Post-Cat">FLIM</span>
//           <span className="Post-Cat">PHOTO</span>
//         </div>
//         <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
//         </span>
//         <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//             .
//             </p>
//           </div>
//         </div>

//         <div className="post-box">
//       <img src={process.env.PUBLIC_URL + '/Images/pexels-mikhail-nilov-7988086.jpg'} alt="Photocase" />
//       <div className="post-Info">
//         <div className="Post-Cats">
//           <span className="Post-Cat">FLIM</span>
//           <span className="Post-Cat">PHOTO</span>
//         </div>
//         <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
//         </span>
//         <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//             .
//             </p>
//           </div>
//         </div>
//         </div>
//         <div className='sect-2'>
//         <div className="post-box">
//       <img src={process.env.PUBLIC_URL + '/Images/pexels-lucas-craig-3714339.jpg'} alt="Photocase" />
//       <div className="post-Info">
//         <div className="Post-Cats">
//           <span className="Post-Cat">FLIM</span>
//           <span className="Post-Cat">PHOTO</span>
//         </div>
//         <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
//         </span>
//         <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//             .
//             </p>
//           </div>
//         </div>

//         <div className="post-box">
//       <img src={process.env.PUBLIC_URL + '/Images/pexels-follow-alice-667200.jpg'} alt="Photocase" />
//       <div className="post-Info">
//         <div className="Post-Cats">
//           <span className="Post-Cat">FLIM</span>
//           <span className="Post-Cat">PHOTO</span>
//         </div>
//         <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
//         </span>
//         <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//             .
//             </p>
//           </div>
//         </div>

//         <div className="post-box">
//       <img src={process.env.PUBLIC_URL + '/Images/pexels-designecologist-1779487.jpg'} alt="Photocase" />
//       <div className="post-Info">
//         <div className="Post-Cats">
//           <span className="Post-Cat">FLIM</span>
//           <span className="Post-Cat">PHOTO</span>
//         </div>
//         <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
//         </span>
//         <span className="postDate">Posted on 12th May, 2018</span>
//         </div>
//         <div className="postDesc">
//           <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//             .
//             </p>
//           </div>
//         </div>
//         </div>
//         <button>
//           <h3>Load More</h3>
//         </button>
//     </div>
  )
}

export default Photocase