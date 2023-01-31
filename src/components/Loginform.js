import React from 'react'

const Loginform = () => {
  return (
    <div>
        <form action='#'>
            <label for ='username'>Username</label>
            <input type='text' id='username' name='username' placeholder='Username'/>
            <label for ='password'>Password</label>
            <input type='password' id='password' name='password' placeholder='Password'/>
            <button type='submit' value='Login'>
                Login
            </button>
        </form>
    </div>
  )
}

export default Loginform