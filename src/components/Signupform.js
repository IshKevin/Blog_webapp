import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <form action='#'>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' placeholder='Username' />
        <labale for="email">Email</labale>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label for='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Password' />
        <label for='password'>Confirm Password</label>
        <input type='password' id='password' name='password' placeholder='Confirm Password' />
        <button type='submit' value='Signup'>
          <Link to='DashBoard'>Signup</Link>  
        </button>
      
      </form>
    </div>
  )
}

export default Signup