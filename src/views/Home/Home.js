import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"

import React, { useEffect } from "react"

import Hero from "./components/hero"
import Header from "./components/header"
import About from "./components/About"
import Services from "./components/Services"
import Subscribe from "./components/Subscribe"
import Portafolio from "./components/Subscribe"
import Team from "./components/Team"
import Contact from "./components/Contact"
export default function Home() {
  useEffect(() => {
    $("#preloader")
      .delay(200)
      .fadeOut("slow", function () {
        $(this).remove()
      })
  })
  return (
    <div>
      <div id="preloader" />
      {/*=============  Hero Section  ===============*/}
      <Hero></Hero>
      {/*=============  Sección de encabezado  ===============*/}
      <Header></Header>
      {/*=============  About Section =============*/}
      <About></About>
      {/*==============  Services Section  ==============*/}
      <Services></Services>
      {/*================  Subscribe Section  ===================*/};
      <Subscribe></Subscribe>
      {/*=================  Porfolio Section  =================*/}
      <Portafolio></Portafolio>
      {/*================  Team Section  ================*/}
      <Team></Team>
      {/*===============  Contact Section  =============*/}
      <Contact></Contact>
      {/*==============  Footer  ==============*/}
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                © Copyright <strong>ProOnliPc Theme</strong>. All Rights
                Reserved
              </div>
              <div className="credits">
                Templates by{" "}
                <a href="https://www.youtube.com/channel/UCDH0DJaVLkCDtl_YN9hhByw?view_as=subscriber">
                  ProOnliPc
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#home" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </div>
  )
}
