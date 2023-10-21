import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
        <nav className='navbar'>
            <div className='container flex_space'>
                <div className='meni-icon' onClick={handleClick}>
                    <i className= {click? 'fas fa-times': "fas fa bars"}></i>
                </div>

                <ul className= {click? 'nav-menu active' : "nav-menu"}>
                      <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                      <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
                      <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                      <li><Link to='/destination' onClick={closeMobileMenu}>Destination</Link></li>
                      <li><Link to='/blog' onClick={closeMobileMenu}>Blog</Link></li>
                      <li><Link to='/testimonail' onClick={closeMobileMenu}>Testimonail</Link></li>
                      <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                    
                </ul>

                <div className='login-area flex'>
                  <li>
                    <Link to='/sign-in'>
                      <i className='far fa-chevron-right'>Sign In</i>
                    </Link>
                  </li>

                  <li>
                    <Link to='/register'>
                      <i className='far fa-chevron-right'>Register</i>
                    </Link>
                  </li>

                  <li>
                    <Link to='/contact'>
                      <button className='primary-btn'>Request a quote</button>
                    </Link>
                  </li>
                </div>
            </div>
        </nav>

        <header>
           <div className='container flex_space'>
             <div className='Logo'></div>
               <img src='images/hotellogo.jpeg' alt='' />
           </div>

              <div className='contact flex_space'>
                <div className='box flex_space'>
                  <div className='icons'>
                    <i className='far fa-clock'></i>
                  </div>
                  <div className='text'>
                     <h4>Working Hours</h4>
                     <Link to = "/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
                  </div>
                </div>

                <div className='box flex_space'>
                  <div className='icons'>
                    <i className='fas fa-phone-volume'></i>
                  </div>
                  <div className='text'>
                     <h4>Call Us Hours</h4>
                     <Link to = "/contact">021-68904415</Link>
                  </div>
                </div>

                <div className='box flex_space'>
                  <div className='icons'>
                    <i className='far fa-evelope'></i>
                  </div>
                  <div className='text'>
                     <h4>Mail Us</h4>
                     <Link to = "/contact">information@example.com</Link>
                  </div>
                </div>
              </div>
        </header>
    </>
  )
}

export default Navbar