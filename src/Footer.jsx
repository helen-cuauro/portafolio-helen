import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="contact-info">
        <h3 className="footer-heading">Información de contacto:</h3>
        <ul className="contact-list">
          <li className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />{" "}
            Dirección: Lima-Perú
          </li>
          <li className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> Teléfono:
            +51997495414
          </li>
          <li className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> email: helenc0297@gmail.com
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="social-list">
          <li className="social-item">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/helen-paola-cuauro-cuauro-b06225288/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="https://github.com/helen-cuauro">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
        </ul>
        <span className="info">Desarrollado por Helen Cuauro en el 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
