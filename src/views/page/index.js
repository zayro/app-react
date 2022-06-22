import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './web.scss'

function Web () {
  useEffect(() => {
    // Add Library Js
    // END
  }, [])
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home</title>
        <meta name='Description' content='Content Main' />
      </Helmet>
      <nav id='navbar-example2' className='navbar fixed-top navbar-light bg-light px-3'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <a className='nav-link' href='#section1'>
              First
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#section2'>
              Second
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              data-bs-toggle='dropdown'
              href='#'
              role='button'
              aria-expanded='false'
            >
              Dropdown
            </a>
            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='#section3'>
                  Third
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#section4'>
                  Fourth
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <a className='dropdown-item' href='#scrollspyHeading5'>
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div
        data-bs-spy='scroll'
        data-bs-target='#navbar-example2'
        data-bs-offset={0}
        className='scrollspy-example d-flex flex-column align-items-stretch'
        tabIndex={0}
      >
        <div id='section1' className=' wrapper '>
          <h1>Section 1</h1>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
        </div>
        <div id='section2' className='container-fluid wrapper'>
          <h1>Section 2</h1>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
        </div>
        <div id='section3' className='container-fluid wrapper'>
          <h1>Section 3</h1>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
        </div>
        <div id='section4' className='container-fluid wrapper'>
          <h1>Section 4 Submenu 1</h1>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
        </div>
        <div id='section5' className='container-fluid wrapper'>
          <h1>Section 4 Submenu 2</h1>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and
            look at the navigation bar while scrolling!
          </p>
        </div>
      </div>
    </>
  )
}

export { Web }
