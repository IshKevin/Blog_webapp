import './SinglePost.css'
import Navbar from './components/Navbar'
import {useParams} from 'react-router-dom'



const SinglePost = ({posts}) => {
  const {blogId} = useParams();

  const single = posts.find((post) => post._id === blogId);
  const {title,desc,username, photo, categories} = single;

  return (
    <>
    <div className='single-post'>
      <Navbar/>
      <img src={photo} alt="{title}" />
      <div className='single-post'>
      <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {username}
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        {desc}
        </p>
      </div>
      
      </div>
      </>)
}

export default SinglePost