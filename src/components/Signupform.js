import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css' 
import Header from './Header'    

const Signup = () => {
  return (
    <div >
      <Header className="header-display" />
      <form className="form-signup" action='#'>
        <label for='username'>Username</label><br/>
        <input type='text' id='username' name='username' placeholder='Username' /> <br/>
        <labale for="email">Email</labale><br />
        <input type="email" id="email" name="email" placeholder="Email" /> <br />
        <label for='password'>Password</label><br/>
        <input type='password' id='password' name='password' placeholder='Password' /><br />
        <label for='password'>Confirm Password</label><br/>
        <input type='password' id='password' name='password' placeholder='Confirm Password' /><br />
        <button type='submit' value='Signup'>
          <Link to='DashBoard'>Signup</Link>  
        </button>
      
      </form>
    </div>
  )
}

export default Signup