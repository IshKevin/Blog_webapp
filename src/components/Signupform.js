import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'    
import Navbar from './Navbar'
import axios from "axios";
import {useForm}  from  "react-hook-form";

const REGISTER_URL = "https://newblog-m4im.onrender.com/api/auth/register";


const Signup = () => {
const  {register,handleSubmit,formState:{errors},reset} = useForm({});
  
  // useEffect(() =>{
  //   userRef.current.focus();
  // }, [])

  // useEffect(() =>{
  //   const result = USER_REGEX.test(name);
  //   console.log(result);
  //   console.log(name);
  //   setValidName(result);
  // }, [name])

  // useEffect(() => {
  //   const result = PWD_REGEX.test(password);
  //   console.log(result);
  //   console.log(password);
  //   setValidPassword(result);
  //   const match = password === matchpwd;
  //   setValidMatchPwd(match);
  // }, [password, matchpwd])

  // useEffect(() => {
  //   const result = EMAIL_REGEX.test(email);
  //   console.log(result);
  //   console.log(email);
  //   setValidEmail(result);
  // }, [email])

  // useEffect(() =>{
  //   setErrMsg('');
  // }, [name, password])

  const  onSubmit = async (data) => {
    try {
  const response = await  axios.post("https://newblog-m4im.onrender.com/api/auth/register/", data);
    console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  }
     return (
    <>
     {/* {success ?(
      <div className="success-msg">
        <h1>success</h1>
        <p><Link to="/login">Login</Link></p>
      </div>
     ) : ( */}
    <div >
      <Navbar />
       <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Welcome to our blog</h3>
        <p>Please enter your details</p>
        <div className="form-control">
        <label>User name</label>
        <input 
               type="text" 
               id="username"
               name='username'
               {...register("username")}
               placeholder="username"
               />
        </div>
        <div className="form-control">
        <label>Email</label>
        <input type="text" 
        id="email"
        name='email'
        {...register("email")}
        placeholder="email"
        />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input 
        type="password" 
        name='password'
        {...register("password")}
        id="password"
        placeholder="password"
        />
      </div>
      <button type="submit"
      className="btn-register"
      >Sign up</button>
      <p>U have an account? <Link to='/Login' style={{color: 'inherit', textDecoration: 'inherit'}}><span>Login</span></Link> </p>
    </form>
    </div>
    {/* )} */}
  </>
    )

}

export default Signup