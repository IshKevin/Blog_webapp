import React from 'react'

const Photocase = () => {
  return (
    <div>
      <img src="Images/pexels-photo-103123.jpeg" alt="Photocase" />
      <div className="postInfo">
        <div className="post_cats">
          <span className="post_cat">Photography</span>
          <span className="post_cat">Photocase</span>
        </div>
        <span className='postTitle'>making perfect image</span>
        <span className="postDate">Posted on 12th May, 2018</span>
        </div>
    </div>
  )
}

export default Photocase