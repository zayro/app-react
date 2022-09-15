import React, { useEffect, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
// import '../../assets/style/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

import $ from 'jquery'

import './web.scss'

function Web () {
  const [timeOut, setTimeOut] = useState(true)
  const [menuHidden, setMenuHidden] = useState(true)

  const ref = useRef(null)

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  const removeHash = () => {
    window.history.replaceState(
      '',
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    )
  }

  useEffect(() => {
    // Add Library Js

    console.log('* ~ bootstrap s', bootstrap)

    window.onload = function () {
      console.log(' window.onload ')

      setTimeout(() => {
        const scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: '#navbarNav'
        })
        console.log('* ~ scrollSpy -', scrollSpy)

        $(function () {
          const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
          dataSpyList.forEach((dataSpyEl) => {
            const instance = bootstrap.ScrollSpy.getInstance(dataSpyEl)
            console.log('* ~ instance', instance)
          })

          $('[data-bs-spy="scroll"]').on('activate.bs.scrollspy', () => {
            const x = $('.nav li.active > a').text()
            console.log('* ~ x', x)
          })
        })

        const element = ref.current
        console.log('* ~ element', element)

        $('a[href*="#"]:not([href="#"])').on('click', function () {
          if (
            window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            window.location.hostname === this.hostname
          ) {
            console.log('* ~ window.location.pathname', window.location.pathname)

            setTimeout(() => {
              // call removeHash function after set timeout
              removeHash()
            }, 1)
          }
        })
      }, 2000)

      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow')
          setMenuHidden(false)
        } else {
          $('.back-to-top').fadeOut('slow')
          setMenuHidden(true)
        }
      })

      $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo')
        return false
      })
    }

    // END
  }, [])

  const HiddenMenu = () => {
    setMenuHidden(false)
  }

  setTimeout(() => {
    setTimeOut(false)
  }, 1000)

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

      <nav
        id='navbar-example2'
        className={
          menuHidden
            ? 'visually-hidden visually-hidden-focusable'
            : 'navbar navbar-height fixed-top navbar-expand-lg navbar-dark bg-dark '
        }
      >
        <div className='container-fluid'>
          <a className='navbar-brand ' href='#'>
            WebApp
          </a>
          <button
            ref={ref}
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

          <div className='collapse navbar-collapse' id='navbarNav' ref={ref}>
            <div className='me-auto mb-2 mb-lg-0' />
            <div className='d-flex'>
              <ul className='nav nav-pills  navbar-nav  me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  {/*  aria-current='page' */}
                  <a className='nav-link nav-item-style' href='#section1'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link nav-item-style' href='#section2'>
                    Features
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link nav-item-style' href='#section3'>
                    Pricing
                  </a>
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
        id='contenido'
      >
        <div id='section1' className='wrapper'>
          <div className='section1-container'>
            <h1>Section 1</h1>
            <p>WELCOME TO APPSOFT</p>
            <p>We createbeautiful graphics, functional websites, working mobile apps</p>

            <div className='container-fluid justify-content-start'>
              <p>
                <a className='btn btn-outline-success me-2' href='#section2' onClick={HiddenMenu}>
                  Main button
                </a>
                <button className='btn btn-sm btn-outline-secondary' type='button'>
                  Smaller button
                </button>
              </p>
            </div>
          </div>
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

      <a href='#' className='back-to-top'>
        <span className='navbar-toggler-icon' />
      </a>
    </>
  )
}

export { Web }
