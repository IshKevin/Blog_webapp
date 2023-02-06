import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const navRef = useRef();
    const toggleNav = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
  return (
    <header className='Header-Style'>
        <div className="logo">
            <span className='logo-name'>The Safari Blog</span>    
        </div>
        <nav ref={navRef}>
            <Link to='Signup'>Signup</Link>
            <Link to='Login'>Login</Link>
            <button className='nav-btn nav-close-btn' onClick={toggleNav}>
            <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={toggleNav}>
            <FiMenu/>
        </button>
    </header>
  )
}

export default Navbar