import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'    
import Navbar from './Navbar'
const Signup = () => {
  return (
    <div >
      <Navbar/>
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
  )
}

export default Signup