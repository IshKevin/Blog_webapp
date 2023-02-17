import React, { useEffect, useRef, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import './Login.css'
import axios from 'axios';
const LOGIN_URL = "https://newblog-m4im.onrender.com/api/auth/login";



const Loginform = () => {
  const { setAuth } = useContext(AuthContext);
    
    

    const [username, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])
    const navigate= useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);

        try {
            const response = await axios.post(LOGIN_URL,
            { username, password },
            );
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.jwt;
            localStorage.setItem("token", accessToken);
            
            setAuth({ email,password,accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
            navigate('/Dashhome');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
           
        }
    }


  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <Link to={'/dashboard'}>Go to Home</Link>
            </p>
        </section>
        ) : (  
    <div>
      <form className="add-form" onSubmit={handleSubmit} autoComplete="off">
        <h3>Welcome back</h3>
        <p>Please enter your details</p>
      <div className="form-control">
        <label>User name</label>
        <input type="text" placeholder='Enter Your user name' value={username}  onChange={(event) => setUser(event.target.value)}/>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input   type="password"
                 id="password"
                 value={password}
                onChange={(e) => setPwd(e.target.value)}
                required
        />
      </div>
      <Link to="/dashboard"><button type="submit"
      className="btn btn-block" onClick={handleSubmit}>Login</button></Link>
      <p>Dont have an account? <Link to='/signup' style={{color: 'inherit', textDecoration: 'inherit'}}><span>SignUp</span></Link> </p>
    </form>
    </div>
  )}
 </>
    )
}

export default Loginform