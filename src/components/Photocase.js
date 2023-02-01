import React from 'react'
import './Photocase.css'

const Photocase = () => {
  return (
    <div>
      <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">FLIM</span>
          <span className="post_cat">PHOTO</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        </div>

        <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-paul-deetman-2695679.jpg'} alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">FLIM</span>
          <span className="post_cat">PHOTO</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        </div>

        <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-mikhail-nilov-7988086.jpg'} alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">FLIM</span>
          <span className="post_cat">PHOTO</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        </div>

        <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-lucas-craig-3714339.jpg'} alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">FLIM</span>
          <span className="post_cat">PHOTO</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        </div>

        <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-follow-alice-667200.jpg'} alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">FLIM</span>
          <span className="post_cat">PHOTO</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        </div>

        <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/pexels-designecologist-1779487.jpg'} alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">FLIM</span>
          <span className="post_cat">PHOTO</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
        </div>
    </div>
  )
}

export default Photocase