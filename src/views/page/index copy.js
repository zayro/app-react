import React from 'react'
import { Helmet } from 'react-helmet'

import './web.scss'

function Web () {
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
            <a className='nav-link' href='#scrollspyHeading1'>
              First
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#scrollspyHeading2'>
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
                <a className='dropdown-item' href='#scrollspyHeading3'>
                  Third
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#scrollspyHeading4'>
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
        <div className='wrapper flex-fill' id='scrollspyHeading1'>
          First heading
        </div>
        <p>...</p>
        <div className='wrapper flex-fill' id='scrollspyHeading2'>
          Second heading
        </div>
        <p>...</p>
        <div className='wrapper flex-fill' id='scrollspyHeading3'>
          Third heading
        </div>
        <p>...</p>
        <div className='wrapper flex-fill' id='scrollspyHeading4'>
          Fourth heading
        </div>
        <p>...</p>
        <div className='wrapper flex-fill' id='scrollspyHeading5'>
          Fifth heading
        </div>
        <p>...</p>
      </div>
    </>
  )
}

export { Web }
