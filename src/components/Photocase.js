import React from 'react'

const Photocase = () => {
  return (
    <div>
      <div className="post1">
      <img src={process.env.PUBLIC_URL + '/Images/Rain-Wallpaper-6004.jpg'} alt="Photocase" />
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