import React from 'react'
import { Link } from 'react-router-dom'
import './Photocase.css'

const Photocase = () => {
  return (
    <div className='post-pic'>
      <div className="post-box">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} alt="Photocase" />
      <div className="post-Info">
        <div className="Post-Cats">
          <span className="Post-Cat">FLIM</span>
          <span className="Post-Cat">PHOTO</span>
        </div>
        <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
        </span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        <div className="postDesc">
          <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="post-box">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-paul-deetman-2695679.jpg'} alt="Photocase" />
      <div className="post-Info">
        <div className="Post-Cats">
          <span className="Post-Cat">FLIM</span>
          <span className="Post-Cat">PHOTO</span>
        </div>
        <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
        </span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        <div className="postDesc">
          <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="post-box">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-mikhail-nilov-7988086.jpg'} alt="Photocase" />
      <div className="post-Info">
        <div className="Post-Cats">
          <span className="Post-Cat">FLIM</span>
          <span className="Post-Cat">PHOTO</span>
        </div>
        <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
        </span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        <div className="postDesc">
          <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="post-box">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-lucas-craig-3714339.jpg'} alt="Photocase" />
      <div className="post-Info">
        <div className="Post-Cats">
          <span className="Post-Cat">FLIM</span>
          <span className="Post-Cat">PHOTO</span>
        </div>
        <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
        </span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        <div className="postDesc">
          <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="post-box">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-follow-alice-667200.jpg'} alt="Photocase" />
      <div className="post-Info">
        <div className="Post-Cats">
          <span className="Post-Cat">FLIM</span>
          <span className="Post-Cat">PHOTO</span>
        </div>
        <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
        </span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        <div className="postDesc">
          <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="post-box">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-designecologist-1779487.jpg'} alt="Photocase" />
      <div className="post-Info">
        <div className="Post-Cats">
          <span className="Post-Cat">FLIM</span>
          <span className="Post-Cat">PHOTO</span>
        </div>
        <span className='post-title'><Link to='SinglePost'>making perfect image</Link>
        </span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        <div className="postDesc">
          <p className='copper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Photocase