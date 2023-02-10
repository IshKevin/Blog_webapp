import React from 'react'
import './Manage.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineDelete} from 'react-icons/md'
const Manage = ({posts}) => {
  return (
    <div className='manage-blog'>
        <div className='title-head'>
          <div>Avatar</div>
          <div>Title</div>
          <div className='act-title'>Action</div>
        </div>
        { posts.map((post, index) =>  {
          return(
            <div className='title-post'>
            <div className="avatar">
            <img className="avatar__image" src={post.photo} />
            </div> 
            <div className='title-on-post'>{post.title}</div>
            <div className='icons'>
            <div className='icon1' >
              <button className='icon-button'> <AiOutlineEdit/>
              </button>
              </div>
            <div>
              <button className='icon-button'>
              <MdOutlineDelete/>
              </button>
              </div>
            </div>
            </div>
        )
        }
        )}
        {/* { posts?.map((post, index) =>  {
        <div className='title-post'>
        <div class="avatar">
           <img class="avatar__image" src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} />
           </div> 
          <div className='title-on-post'>making perfect image</div>
          <div className='icons'>
            <div className='icon1' > <AiOutlineEdit/></div>
            <div><MdOutlineDelete/></div>
          </div>
        </div>
        <div className='title-post'>
        <div class="avatar">
           <img class="avatar__image" src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} />
           </div> 
          <div className='title-on-post'>making perfect image</div>
          <div className='icons'>
            <div className='icon1' > <AiOutlineEdit/></div>
            <div><MdOutlineDelete/></div>
          </div>
        </div>
        <div className='title-post'>
        <div class="avatar">
           <img class="avatar__image" src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} />
           </div> 
          <div className='title-on-post'>making perfect image</div>
          <div className='icons'>
            <div className='icon1' > <AiOutlineEdit/></div>
            <div><MdOutlineDelete/></div>
          </div>
        </div>
        <div className='title-post'>
        <div class="avatar">
           <img class="avatar__image" src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} />
           </div> 
          <div className='title-on-post'>making perfect image</div>
          <div className='icons'>
            <div className='icon1' > <AiOutlineEdit/></div>
            <div><MdOutlineDelete/></div>
          </div>
        </div>
        <div className='title-post'>
        <div class="avatar">
           <img class="avatar__image" src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} />
           </div> 
          <div className='title-on-post'>making perfect image</div>
          <div className='icons'>
            <div className='icon1' > <AiOutlineEdit/></div>
            <div><MdOutlineDelete/></div>
          </div>
        </div>
        <div className='title-post'>
        <div class="avatar">
           <img class="avatar__image" src={process.env.PUBLIC_URL + '/Images/pexels-pixabay-34098.jpg'} />
           </div> 
          <div className='title-on-post'>making perfect image</div>
          <div className='icons'>
            <div className='icon1' > <AiOutlineEdit/></div>
            <div><MdOutlineDelete/></div>
          </div>
        </div> */}
    </div>
  )
}

export default Manage