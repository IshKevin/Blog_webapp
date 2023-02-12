import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'    
import Navbar from './Navbar'
import { useRef, useState, useEffect } from "react";
import axios from "axios";


const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

const REGISTER_URL = "https://newblog-m4im.onrender.com/api/auth/register";


const Signup = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);

  const [matchpwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
    userRef.current.focus();
  }, [])

  useEffect(() =>{
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name])

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchpwd;
    setValidMatchPwd(match);
  }, [password, matchpwd])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() =>{
    setErrMsg('');
  }, [name, password])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const v1 = USER_REGEX.test(name);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if(!v1 || !v2 || !v3){
      setErrMsg("Invalid Entry");
      return;
    }
    
    try{
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({name, password, email}),
        {
          headers:{"Content-Type": "application/json"}
        }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
        setSuccess(true);
        
    } catch(err){
      if(!err?.response){
        setErrMsg('No Server Response');
      } else if(err.response?.status === 409){
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }

    }


  return (
    <>
     {success ?(
      <div className="success-msg">
        <h1>success</h1>
        <p><Link to="/login">Login</Link></p>
      </div>
     ) : (
    <div >
       <form className="add-form">
        <h3>Welcome to our blog</h3>
        <p>Please enter your details</p>
        <div className="form-control">
        <label>User name</label>
        <input type="text" placeholder='Enter Your user name'/>
        </div>
        <div className="form-control">
        <label>Email</label>
        <input type="text" placeholder='Enter Your Email'/>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input type="password" 
        placeholder='Enter Your Password'/>
      </div>
      <Link to="/dashboard"><button type="submit"
      className="btn btn-block">SignUp</button></Link>
      <p>U have an account? <Link to='/Login' style={{color: 'inherit', textDecoration: 'inherit'}}><span>Login</span></Link> </p>
    </form>
    </div>
    )}
  </>
    )
}
}

export default Signup