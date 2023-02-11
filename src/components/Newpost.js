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
    <>
   
    </>
  )
}

export default Newpost