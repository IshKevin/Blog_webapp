import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <header>
			<h1><div className="logo">
             <span className='logo-name'>The Safari Blog</span>    
          </div>
          </h1>
			<nav ref={navRef}>
                <Link to='Signup'>Signup</Link>
                <Link to='Login'>Login</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  )
}

export default Navbar