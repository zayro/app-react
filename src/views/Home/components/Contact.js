import React from "react"

export default function Contact() {
  return (
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
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form method="post" className="contactForm">
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
  )
}
