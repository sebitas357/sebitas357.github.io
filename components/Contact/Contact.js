import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const frmContact = {
    userName: "",
    userEmail: "",
    emailAffair: "",
    emailDetails: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "stackdigital",
        contact,
        "user_5WNi27AZA3vm3gWOLOya0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section id="contact" className="contact mt-4">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-up" data-aos-duration="800">
            Contacto
          </h2>
          <p>Comunícate con nosotros</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="info__icon" />
                <h3>Ubicación</h3>
                <p>San Cristóbal, Medellín</p>
              </div>
              <div className="email">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="info__icon"
                />
                <h3>Email:</h3>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <FontAwesomeIcon icon={faWhatsapp} className="info__icon" />
                <h3>Whatsapp:</h3>
                <p>+57 301 429 8240</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="userName"
                    value={contact.userName}
                    onChange={handleChange}
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    required
                    className="form-control"
                    type="email"
                    value={contact.userEmail}
                    name="userEmail"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="emailAffair"
                  value={contact.emailAffair}
                  onChange={handleChange}
                  placeholder="Asunto"
                />
              </div>
              <div className="form-group">
                <textarea
                  required
                  className="form-control"
                  value={contact.emailDetails}
                  name="emailDetails"
                  onChange={handleChange}
                  rows="5"
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit">Envianos un mensaje</button>
              </div>
              <br />
              {showMessage ? (
                <div
                  className="alert alert-success col-md-5 mx-auto"
                  role="alert"
                >
                  Correo enviado satisfactoriamente
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
