import React, { useEffect, useRef, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import './Login.css'
import axios from 'axios';
import {useForm} from  "react-hook-form"
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = "https://newblog-m4im.onrender.com/api/auth/login";



const Loginform = () => {
  const { setAuth } = useContext(AuthContext);
    
    
  const {register, handleSubmit }  =  useForm({})



 
  
    const navigate= useNavigate();
  const onSubmit  = async (data) =>{
    console.log(data);
    try {
      const response  =  await axios.post(LOGIN_URL,data);
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
   
    <div>
      <form className="add-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h3>Welcome back</h3>
        <p>Please enter your details</p>
      <div className="form-control">
        <label>User name</label>
        <input type="text" name="username" placeholder='Enter Your user name' {...register("username")}/>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input   type="password"
        name="password"
                 id="password"
                 {...register("password")}
                required
        />
      </div>
      <button type="submit"
      className="btn btn-block" onClick={handleSubmit}>Login</button>
      <p>Dont have an account? <Link to='/signup' style={{color: 'inherit', textDecoration: 'inherit'}}><span>SignUp</span></Link> </p>
    </form>
    </div>
 </>
    )
}

export default Loginform