import React from 'react'

export default function Hero () {
  return (
    <section id='hero'>
      <div className='hero-container'>
        <div className='wow fadeIn'>
          <div className='hero-logo'>
            <img src='Home/img/avataaars.svg' alt='ProOnliPc' width={200} />
          </div>
          <h1>Welcome to AppSoft</h1>
          <h2>
            We create
            <span className='rotating'>beautiful graphics, functional websites, working mobile apps</span>
          </h2>
          <div className='actions'>
            <a href='#about' className='btn-get-started'>
              Login
            </a>
            <a href='#services' className='btn-services'>
              SignUp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
