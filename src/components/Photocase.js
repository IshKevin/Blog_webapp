import { Link } from 'react-router-dom'
import './Photocase.css'


  


const Photocase = ({posts}) => {
  

  console.log(posts);
  return (
    <>
      { posts?.map((post, index) =>  {
   console.log(post)

       return (
        <div className="card-layout" >
         <div class="card-layout__item">

         <div key={index} className="post-box">
          <div>
         <img className="story-imag" src={post.photo} alt={post.categories} />
            </div>
            <div>
         <div className="post-Info">
           <div className="Post-Cats">
             <span className="Post-Cat">{post.categories}</span>
           </div>
           <span className='post-title'>
             <Link to={`${post._id}`}>{post.title}</Link>
           </span>
           <span className="postDate">Posted on 12th May, 2018</span>
         </div>
         <div className="postDesc">
           <p className='copper'>{post.desc.slice(0,300)}</p>
         </div>
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