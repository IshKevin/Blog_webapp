import React from 'react'
import { Link } from 'react-router-dom'

const Loginform = () => {
  return (
    <div>
        <form action='#'>
            <label for ='username'>Username</label>
            <input type='text' id='username' name='username' placeholder='Username'/>
            <label for ='password'>Password</label>
            <input type='password' id='password' name='password' placeholder='Password'/>
            <button type='submit' value='Login'>
                <Link to='DashBoard'>Login</Link>
            </button>
        </form>
    </div>
  )
}

export default Loginform