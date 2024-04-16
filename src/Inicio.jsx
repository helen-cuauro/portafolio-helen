import React from "react";
import avatarImage from "./assets/avatar-removebg.png";
import jsImage from "./assets/js.png";
import htmlImage from "./assets/html-5.png";
import cssImage from "./assets/css-3.png";
import reactImage from "./assets/React-icon.svg.png";
import nodejsImage from "./assets/nodejs.png";
import typescriptImage from "./assets/Typescript_logo_2020.svg.png";
import expressImage from "./assets/express2.png";
import postgresqlImage from "./assets/postgresql1.png";
import comunicacionImage from "./assets/burbuja-de-dialogo.png";
import trabajoEquipoImage from "./assets/unido.png";
import gestionTiempoImage from "./assets/gestion-del-tiempo.png";
import lluviaIdeasImage from "./assets/lluvia-de-ideas.png";
import dedicacionImage from "./assets/persona-de-libre-dedicacion (1).png";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Inicio() {
  const descargarCV = () => {
    console.log("Descargando CV...");
  };

  return (
    <section id="inicio" className="inicio inicio-items">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="presentacion">
          <h1>HELEN CUAURO</h1>
          <h2>Full Stack Developer</h2>
          <div className="redes">
            <a
              href="https://www.linkedin.com/in/helen-paola-cuauro-cuauro-b06225288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/helen-cuauro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <div className="datos-conteiner">
          <div className="redes datos">
            <a href="tel:+51997495414">
              <FontAwesomeIcon icon={faPhoneAlt} className="iconSocial" />
            </a>
            <div className="datos-items">
              <span>Teléfono</span>
              <span>+51 997495414</span>
            </div>
          </div>
          <div className="redes datos">
            <a href="mailto:helenc0297@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="iconSocial" />
            </a>
            <div className="datos-items">
              <span>Email</span>
              <span>helenc0297@gmai.com </span>
            </div>
          </div>
        </div>
        <button id="cvButton" className="button-cv" onClick={descargarCV}>
          Descargar CV <FontAwesomeIcon icon={faDownload} />
          <span className="overlay"></span>
        </button>
      </div>
      <div className="contenido-sobremi">
        <div className="sobremi contenido-seccion">
          <p className="sobremi-description">
            <span>Hola, soy Helen Cuauro.</span> Full-Stack Web Developer,
            Profesional con un enfoque proactivo, orientada a resultados y con
            facilidad para aprender rápidamente, enfrentar desafíos y contribuir
            de manera significativa en proyectos prácticos.
          </p>
        </div>
        <div className="skills" id="skills">
          <div className="contenido-skill">
            {/* Habilidades técnicas */}
            <div className="skill-contenedor">
              <h3 className="skill-title">HABILIDADES TECNICAS</h3>
              <div className="skills-row">
                <div className="skill-item">
                  <img src={jsImage} alt="logo js" />
                </div>
                <div className="skill-item">
                  <img src={htmlImage} alt="logo html" />
                </div>
                <div className="skill-item">
                  <img src={cssImage} alt="logo CSS" />
                </div>
                <div className="skill-item">
                  <img src={reactImage} alt="logo React" />
                </div>
                <div className="skill-item">
                  <img src={nodejsImage} alt="logo nodejs" />
                </div>
                <div className="skill-item">
                  <img src={typescriptImage} alt="logo TypeScript" />
                </div>
                <div className="skill-item">
                  <img src={expressImage} alt="logo Expressjs" />
                </div>
                <div className="skill-item">
                  <img src={postgresqlImage} alt="logo postgresql" />
                </div>
              </div>
            </div>
            {/* Habilidades profesionales */}
            <div className="skill-contenedor">
              <h3 className="skill-title">HABILIDADES PROFESIONALES</h3>
              <div className="skills-row">
                <div className="skill-item">
                  <img src={comunicacionImage} alt="logo comunicacion" />
                </div>
                <div className="skill-item">
                  <img src={trabajoEquipoImage} alt="logo Trabajo en Equipo" />
                </div>
                <div className="skill-item">
                  <img src={gestionTiempoImage} alt="logo gestion-del-tiempo" />
                </div>
                <div className="skill-item">
                  <img src={lluviaIdeasImage} alt="logo gestion-del-tiempo" />
                </div>
                <div className="skill-item">
                  <img src={dedicacionImage} alt="logo Dedicación" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
