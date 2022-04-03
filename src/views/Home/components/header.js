import { Link } from '@tanstack/react-location'
import React from 'react'

export default function Header () {
  return (
    <header id='header'>
      <div className='container'>
        <div id='logo' className='pull-left'>
          <h3>WebApp</h3>
        </div>
        <nav id='nav-menu-container'>
          <ul className='nav-menu'>
            <li className='menu-active'>
              <a href='#hero'>Home</a>
            </li>
            <li>
              <a href='#about'>About Us</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>

            <li>
              <a href='#team'>Team</a>
            </li>

            <li>
              <a href='#contact'>Contact Us</a>
            </li>
            <li>
              <Link to='/login' className='btn-services'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
