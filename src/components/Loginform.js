import React, { useEffect, useRef, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import './Login.css'
import axios from 'axios';
const LOGIN_URL = "https://newblog-m4im.onrender.com/api/auth/login";



const Loginform = () => {
  const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email,pwd,accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
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
            errRef.current.focus();
        }
    }


  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
        ) : (  
    <div>
      <form className="add-form" onSubmit={handleSubmit} autoComplete="off">
        <h3>Welcome back</h3>
        <p>Please enter your details</p>
      <div className="form-control">
        <label>Email</label>
        <input type="text" placeholder='Enter Your Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input   type="password"
                 id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
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