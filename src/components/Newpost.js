import React from 'react'
import './Newpost.css'

const Newpost = () => {
  return (
    <div className="Post-form">
        <from className="form-manager" >
          <label className='label'for='title'>Title</label><br/>
          <input className='input'type='text' id='title' name='title' placeholder='Title'/><br/>
          <label className='label' for='content'>Uplaod image</label><br/>
          <input className='input'type='file' id='content' name='content' placeholder='Upload image'/><br/>
          <label className='label'for='content'>Content</label><br/>
          <textarea className='textarea' id='content' name='content' placeholder='Content' heigth='30px'></textarea><br/>
          <button className='button'type='submit' value='Post'>Post</button>

        </from>
    </div>
  )
}

export default Newpost