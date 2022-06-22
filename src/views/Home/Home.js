import React, { useEffect, useState } from 'react'
import About from './components/About'
import Briefcase from './components/Briefcase'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import Team from './components/Team'
import { Helmet } from 'react-helmet'
import { AddLibrary } from '../../tools/Addlibrary.js'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = $

export function AddCss (urlOfTheLibrary) {
  const link = document.createElement('link')
  link.href = urlOfTheLibrary
  link.rel = 'stylesheet'
  document.body.appendChild(link)
}

export default function Home () {
  const [timeOut, setTimeOut] = useState(true)

  useEffect(() => {
    // Add Library Css
    AddCss(process.env.PUBLIC_URL + '/Home/lib/animate-css/animate.min.css')
    AddCss(process.env.PUBLIC_URL + '/Home/css/style.css')
    // AddCss(process.env.PUBLIC_URL + '/Home/lib/bootstrap/css/bootstrap.min.css')
    // Add Library Js
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/jquery/jquery.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/bootstrap/js/bootstrap.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/superfish/hoverIntent.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/superfish/superfish.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/morphext/morphext.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/wow/wow.min.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/stickyjs/sticky.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/lib/easing/easing.js')
    AddLibrary(process.env.PUBLIC_URL + '/Home/js/custom.js')

    // END
  }, [])

  setTimeout(() => {
    setTimeOut(false)
  }, 2000)

  if (timeOut) {
    return <div id='preloaderPage' />
  }
  console.log('* ~ timeOut', timeOut)
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home</title>
        <meta name='Description' content='Content Main' />
      </Helmet>
      {/* <div id='preloader' /> */}
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
