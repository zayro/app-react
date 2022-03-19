import React from 'react'

export default function Subscribe () {
  return (
    <section id='subscribe'>
      <div className='container wow fadeInUp'>
        <div className='row'>
          <div className='col-md-8'>
            <h3 className='subscribe-title'>Subscribe For Updates</h3>
            <p className='subscribe-text'>
              Join our 1000+ subscribers and get access to the latest tools,
              freebies, product announcements and much more!
            </p>
          </div>
          <div className='col-md-4 subscribe-btn-container'>
            <a className='subscribe-btn' href='#home'>
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
