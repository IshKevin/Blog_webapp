import React from 'react'
import './Newpost.css'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { Link } from 'react-router-dom'



const Newpost = () => {
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {

    console.log(data.desc);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("Author", data.username);
    formData.append("categories", data.categories);   
    formData.append("desc", data.desc);
    formData.append("photo", data.photo);
    console.log(formData.get("title"));

    try {
       await axios.post("https://newblog-m4im.onrender.com/api/posts/create", formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${localStorage.getItem("token")}`
      }
      });
       reset();
      alert ("Successfully");
    
      
    } catch (err) {
      console.error(err.response);
    }
  };
  return (
    <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Welcome to our blog</h3>
        <p>Please enter details of story</p>
        <div className="form-control">
        <label>Blog Title</label>
        <input type="text" 
         {...register("title")}
         placeholder={"Enter Title"}
       />
      </div>
      <div className="form-control">
        <label>Author Name</label>
        <input type="text"
       {...register("username")}
       placeholder={"Enter Author"}
     />
      </div>
      <div className="form-control">
        <label>Categories</label>
        <input type="text"
       {...register("categories")}
       placeholder={"Enter Categories"}
     />
      </div>
      <div className="form-control">
        <label>Blog Description</label>
        <textarea className='form-control'
       {...register("desc")}
       id=""
       cols="37"
       rows="3"
     >
      
     </textarea>
      </div>
      <div className="form-control">
        <label>Image</label>
        <input
       type="file"
       name=""
       id="file"
       {...register("image")}
     />
      </div>
      
      <button type="submit"
      className="btn btn-block">Create post</button>
    </form>
  )
}

export default Newpost