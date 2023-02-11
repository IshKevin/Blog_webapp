import React from 'react'
import ReactQuill from 'react-quill';
import './Newpost.css'
import { useForm } from "react-hook-form";
import axios from 'axios'



const Newpost = () => {
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {

    console.log(data.desc);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("Author", data.username);
    formData.append("categories", data.categories);   
    formData.append("desc", data.desc);
    formData.append("photo", data.photo[0]);
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
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" 
      {...register("title")}
      placeholder={"Enter Title"}
    />
    <input type="text"
      {...register("username")}
      placeholder={"Enter Author"}
    />
    <input type="text"
      {...register("categories")}
      placeholder={"Enter Categories"}
    />
    <textarea
      {...register("desc")}
      id=""
      cols="30"
      rows="10"
    >
      
    </textarea>
    <label htmlFor="">Image</label>
    <input
      type="file"
      name=""
      id="file"
      {...register("image")}
    />
    <button type="submit" style={{ marginTop: "80px" }}>
      Create post
    </button>
  </form>
  )
}

export default Newpost