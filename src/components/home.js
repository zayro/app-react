import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import logo from '../logo.svg'

const Home = () => (
  <main>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>

    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
    </header>
  </main>
)
export default Home
