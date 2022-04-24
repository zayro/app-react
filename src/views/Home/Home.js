import React, { useEffect } from 'react'
import About from './components/About'
import Briefcase from './components/Briefcase'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import Team from './components/Team'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = $
// import { Helmet } from 'react-helmet'

export function AddLibrary (urlOfTheLibrary) {
  const script = document.createElement('script')
  script.src = urlOfTheLibrary
  script.async = true
  document.body.appendChild(script)
}

export function AddCss (urlOfTheLibrary) {
  const link = document.createElement('link')
  link.href = urlOfTheLibrary
  link.rel = 'stylesheet'
  document.body.appendChild(link)
}

export default function Home () {
  useEffect(() => {
    /* eslint-disable */
    AddCss(process.env.PUBLIC_URL + '/Home/lib/animate-css/animate.min.css')
    AddCss(process.env.PUBLIC_URL + '/Home/css/style.css')
    AddCss(process.env.PUBLIC_URL + '/Home/lib/bootstrap/css/bootstrap.min.css')

    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/jquery/jquery.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/superfish/hoverIntent.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/superfish/superfish.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/morphext/morphext.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/wow/wow.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/stickyjs/sticky.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/easing/easing.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/js/custom.js')

    $('#preloader')
      .delay(100)
      .fadeOut('slow', function () {
        $(this).remove()
      })

    // END
  }, [])
  return (
    <>
      <div id='preloader' />
      {/* =============  Hero Section  =============== */}
      <Hero />
      {/* =============  Section Header  =============== */}
      <Header />
      {/* =============  About Section ============= */}
      <About />
      {/* ==============  Services Section  ============== */}
      <Services />
      {/* ================  Subscribe Section  =================== */};
      <Subscribe />
      {/* =================  Briefcase Section  ================= */}
      <Briefcase />
      {/* ================  Team Section  ================ */}
      <Team />
      {/* ===============  Contact Section  ============= */}
      <Contact />
      {/* ==============  Footer  ============== */}
      <Footer />
      <a href='#home' className='back-to-top'>
        <i className='fa fa-chevron-up' />
      </a>
    </>
  )
}
