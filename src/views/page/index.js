import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './web.scss'

function Web () {
  const [timeOut, setTimeOut] = useState(true)

  useEffect(() => {
    // Add Library Js
    // END
  }, [])

  setTimeout(() => {
    setTimeOut(false)
  }, 2000)

  if (timeOut) {
    return (
      <>
        <div className='container-fluid loading-background  wrapper'>
          <div className='d-flex justify-content-center'>
            <div className='spinner-border loading-size loading-color' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home</title>
        <meta name='Description' content='Content Main' />
      </Helmet>

      <nav id='navbar-example2' className='navbar  fixed-top navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Web
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='d-flex'>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='nav nav-pills navbar-nav'>
                <li className='nav-item'>
                  {/*  aria-current='page' */}
                  <a className='nav-link active' href='#section1'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#section2'>
                    Features
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#section3'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled'>Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        data-bs-spy='scroll'
        data-bs-target='#navbar-example2'
        data-bs-offset={0}
        className='scrollspy-example d-flex flex-column align-items-stretch'
        tabIndex={0}
      >
        <div id='section1' className='wrapper'>
          <h1>Section 1</h1>
          <p>WELCOME TO APPSOFT</p>
          <p>We createbeautiful graphics, functional websites, working mobile apps</p>
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
