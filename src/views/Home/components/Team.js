import React from 'react'

export default function Team () {
  return (
    <section id='team' className='fullpage'>
      <div className='container wow fadeInUp'>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='section-title'>Our Team</h3>
            <div className='section-title-divider' />
            <p className='section-description'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <div className='member'>
              <div className='pic'>
                <img src='Home/img/team-1.jpg' alt='' />
              </div>
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div className='social'>
                <a href='#home'>
                  <i className='fa fa-twitter' />
                </a>
                <a href='#home'>
                  <i className='fa fa-facebook' />
                </a>
                <a href='#home'>
                  <i className='fa fa-google-plus' />
                </a>
                <a href='#home'>
                  <i className='fa fa-linkedin' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='member'>
              <div className='pic'>
                <img src='Home/img/team-2.jpg' alt='' />
              </div>
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <div className='social'>
                <a href='#home'>
                  <i className='fa fa-twitter' />
                </a>
                <a href='#home'>
                  <i className='fa fa-facebook' />
                </a>
                <a href='#home'>
                  <i className='fa fa-google-plus' />
                </a>
                <a href='#home'>
                  <i className='fa fa-linkedin' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='member'>
              <div className='pic'>
                <img src='Home/img/team-3.jpg' alt='' />
              </div>
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className='social'>
                <a href='#home'>
                  <i className='fa fa-twitter' />
                </a>
                <a href='#home'>
                  <i className='fa fa-facebook' />
                </a>
                <a href='#home'>
                  <i className='fa fa-google-plus' />
                </a>
                <a href='#home'>
                  <i className='fa fa-linkedin' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='member'>
              <div className='pic'>
                <img src='Home/img/team-4.jpg' alt='' />
              </div>
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div className='social'>
                <a href='#home'>
                  <i className='fa fa-twitter' />
                </a>
                <a href='#home'>
                  <i className='fa fa-facebook' />
                </a>
                <a href='#home'>
                  <i className='fa fa-google-plus' />
                </a>
                <a href='#home'>
                  <i className='fa fa-linkedin' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
