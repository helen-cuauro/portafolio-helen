import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  // Función que oculta o muestra el menú
  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Función para ocultar el menú una vez que se selecciona una opción
  const seleccionar = () => {
    setMenuVisible(false);
  };

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Helen</a>
        </div>
        <nav id="nav" className={menuVisible ? "responsive" : ""}>
          <ul>
            <li>
              <a href="#inicio" onClick={seleccionar}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={seleccionar}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={seleccionar}>
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          {/* Icono de tres barras cuando el menú no está visible */}
          {!menuVisible && <FontAwesomeIcon icon={faBars} />}
          {/* Icono de "x" cuando el menú está visible */}
          {menuVisible && <FontAwesomeIcon icon={faTimes} />}
        </div>
      </header>
    </div>
  );
}
