import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
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

export default function Home () {
  useEffect(() => {
    $('#preloader')
      .delay(200)
      .fadeOut('slow', function () {
        $(this).remove()
      })
  })
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
