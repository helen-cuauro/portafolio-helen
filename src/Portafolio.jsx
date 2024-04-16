import React from "react";
import playworld from "../public/playWorld.png";
import Reviews from "../public/backend.avif";
import bordeable from "../public/bordeable.webp";

const Portafolio = () => {
  const proyectos = [
    {
      title: "PlayWorld",
      description:
        "El proyecto PlayWorld presenta dos aplicaciones principales: ReactDev Tic-Tac-Toe y Poke Collection. ReactDev Tic-Tac-Toe es una versión mejorada del clásico juego de Tic-Tac-Toe desarrollado en React, mientras que Poke Collection permite a los usuarios buscar y gestionar una colección de Pokémon, utilizando la PokeAPI y una API personalizada.",
      image: playworld,
      codeUrl: "https://github.com/helen-cuauro/PlayWorld",
      previewUrl: "https://play-world.netlify.app/",
    },
    {
      title: "Restaurante-Reviews",
      description:
        "API que gestiona reseñas y puntuaciones de restaurantes. Permite a los usuarios registrarse, autenticarse y realizar acciones como agregar y modificar restaurantes, así como escribir y editar reseñas. Con roles de usuario definidos, se establecen niveles de acceso y permisos específicos. Utiliza Express.js con TypeScript y PostgreSQL para una gestión eficiente de los datos.",
      image: Reviews,
      codeUrl: "https://github.com/helen-cuauro/Restaurante-Reviews",
    },
    {
      title: "bordeable",
      description:
        "Boardable es una API que permite a los usuarios gestionar sus proyectos de manera eficiente mediante tableros, listas y cards. Con criterios de aceptación claros, los usuarios pueden registrar cuentas, interactuar con sus tableros y organizar sus tareas de manera intuitiva.",
      image: bordeable,
      codeUrl: "https://github.com/helen-cuauro/boardable-api",
    },
  ];

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="portfolio" className="portafolio">
      <h1 className="portafolio-title">Portafolio</h1>
      {proyectos.map((proyecto, index) => (
        <div key={index} className="proyecto">
          <img
            src={proyecto.image}
            alt={proyecto.title}
            className="proyecto-image "
          />
          <div className="proyecto-info">
            <h2>{proyecto.title}</h2>
            <p>{proyecto.description}</p>
            <div className="button-container">
              <button onClick={() => handleButtonClick(proyecto.codeUrl)}>
                Code
              </button>
              {proyecto.previewUrl && (
                <button onClick={() => handleButtonClick(proyecto.previewUrl)}>
                  Preview
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portafolio;
