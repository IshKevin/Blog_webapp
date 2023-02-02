import React from 'react'
import './Newpost.css'

const Newpost = () => {
  return (
    <div className="Post-form">
        <from className="form-manager" >
          <label for='title'>Title</label><br/>
          <input type='text' id='title' name='title' placeholder='Title'/><br/>
          <label for='content'>Uplaod image</label><br/>
          <input type='file' id='content' name='content' placeholder='Upload image'/><br/>
          <label for='content'>Content</label><br/>
          <textarea id='content' name='content' placeholder='Content' heigth='30px'></textarea><br/>
          <button type='submit' value='Post'>Post</button>

        </from>
    </div>
  )
}

export default Newpost