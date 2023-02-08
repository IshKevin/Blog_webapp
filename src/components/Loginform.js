
import { Link } from 'react-router-dom'
import './Login.css'
import Navbar from './Navbar'


const Loginform = () => {
  return (
    <div>
      <Navbar/>
      <form className="add-form">
        <h3>Welcome back</h3>
        <p>Please enter your details</p>
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
      className="btn btn-block">Login</button></Link>
      <p>Dont have an account? <Link to='/signup' style={{color: 'inherit', textDecoration: 'inherit'}}><span>SignUp</span></Link> </p>
    </form>
    </div>
  )
}

export default Loginform