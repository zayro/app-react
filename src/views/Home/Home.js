import React from "react"

export default function Home() {
  return (
    <div>
      <div id="preloader" />
      {/*==========================
  Hero Section
  ============================*/}
      <section id="hero">
        <div className="hero-container">
          <div className="wow fadeIn">
            <div className="hero-logo">
              <img
                className
                src="Home/img/avataaars.svg"
                alt="ProOnliPc"
                width={200}
              />
            </div>
            <h1>Welcome to ProOnliPc studios</h1>
            <h2>
              We create{" "}
              <span className="rotating">
                beautiful graphics, functional websites, working mobile apps
              </span>
            </h2>
            <div className="actions">
              <a href="#about" className="btn-get-started">
                Login
              </a>
              <a href="#services" className="btn-services">
                SignUp
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Sección de encabezado
  ============================*/}
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            {/*             <a href="#hero">
              <img src="Home/img/logo.png" alt="" title />
            </a> */}
            {/* Descomenta abajo si prefieres usar una imagen de texto */}
            <h3>
              <a href="#hero">WebApp</a>
            </h3>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>

              <li>
                <a href="#team">Team</a>
              </li>

              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* #nav-menu-container */}
        </div>
      </header>
      {/* #header */}
      {/*==========================
  About Section
  ============================*/}
      <section id="about" className="fullpage">
        <div className="container  wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">About Us</h3>
              <div className="section-title-divider" />
              <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam
              </p>
            </div>
          </div>
        </div>
        <div className="container about-container wow fadeInUp">
          <div className="row">
            <div className="col-md-6 col-md-push-6 about-content">
              <h2 className="about-title">
                We provide great services and ideass
              </h2>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p className="about-text">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p className="about-text">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Services Section
  ============================*/}
      <section id="services">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Our Services</h3>
              <div className="section-title-divider" />
              <p className="section-description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-desktop" />
              </div>
              <h4 className="service-title">
                <a href>Lorem Ipsum</a>
              </h4>
              <p className="service-description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-bar-chart" />
              </div>
              <h4 className="service-title">
                <a href>Dolor Sitema</a>
              </h4>
              <p className="service-description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-paper-plane" />
              </div>
              <h4 className="service-title">
                <a href>Sed ut perspiciatis</a>
              </h4>
              <p className="service-description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-photo" />
              </div>
              <h4 className="service-title">
                <a href>Magni Dolores</a>
              </h4>
              <p className="service-description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-road" />
              </div>
              <h4 className="service-title">
                <a href>Nemo Enim</a>
              </h4>
              <p className="service-description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-icon">
                <i className="fa fa-shopping-bag" />
              </div>
              <h4 className="service-title">
                <a href>Eiusmod Tempor</a>
              </h4>
              <p className="service-description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Subscrbe Section
  ============================*/}
      <section id="subscribe">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-8">
              <h3 className="subscribe-title">Subscribe For Updates</h3>
              <p className="subscribe-text">
                Join our 1000+ subscribers and get access to the latest tools,
                freebies, product announcements and much more!
              </p>
            </div>
            <div className="col-md-4 subscribe-btn-container">
              <a className="subscribe-btn" href="#">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Porfolio Section
  ============================*/}
      <section id="portfolio">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Portfolio</h3>
              <div className="section-title-divider" />
              <p className="section-description">
                Si stante, hoc natura videlicet vult, salvam esse se, quod
                concedimus ses haec dicturum fuisse
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-1.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 1</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-2.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 2</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-3.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 3</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-4.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 4</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-5.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 5</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-6.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 6</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-7.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 7</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="portfolio-item"
                style={{ backgroundImage: "url(Home/img/portfolio-8.jpg)" }}
                href
              >
                <div className="details">
                  <h4>Portfolio 8</h4>
                  <span>Alored dono par</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Team Section
  ============================*/}
      <section id="team" className="fullpage">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Our Team</h3>
              <div className="section-title-divider" />
              <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="member">
                <div className="pic">
                  <img src="Home/img/team-1.jpg" alt="" />
                </div>
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href>
                    <i className="fa fa-twitter" />
                  </a>
                  <a href>
                    <i className="fa fa-facebook" />
                  </a>
                  <a href>
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href>
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member">
                <div className="pic">
                  <img src="Home/img/team-2.jpg" alt="" />
                </div>
                <h4>Sarah Jhinson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member">
                <div className="pic">
                  <img src="Home/img/team-3.jpg" alt="" />
                </div>
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member">
                <div className="pic">
                  <img src="Home/img/team-4.jpg" alt="" />
                </div>
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Contact Section
  ============================*/}
      <section id="contact" className="fullpage">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Contact Us</h3>
              <div className="section-title-divider" />
              <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-md-push-2">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker" />
                  <p>
                    A108 Adam Street
                    <br />
                    New York, NY 535022
                  </p>
                </div>
                <div>
                  <i className="fa fa-envelope" />
                  <p>info@example.com</p>
                </div>
                <div>
                  <i className="fa fa-phone" />
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-md-push-2">
              <div className="form">
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage" />
                <form action method="post" role="form" className="contactForm">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Por favor ingrese al menos 4 caracteres"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Ingresa un Correo Valido"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Por favor ingrese al menos 8 caracteres del tema"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      data-rule="required"
                      data-msg="Por favor escribe algo para nosotros"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <div className="validation" />
                  </div>
                  <div className="text-center">
                    <button type="submit">Enviar mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
  Footer
============================*/}
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
      {/* #footer */}
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </div>
  )
}
