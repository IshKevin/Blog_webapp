import React from 'react'
import './Newpost.css'
import { useForm } from "react-hook-form";
import axios from 'axios'


const Newpost = () => {
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {

    console.log(data.description);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    console.log(formData.get("title"));

    try {
       await axios.post("https://blogapi-wm30.onrender.com/api/v1/blog", formData,{
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