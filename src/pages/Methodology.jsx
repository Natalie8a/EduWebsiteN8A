// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom"; // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types"; // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer"; // Import a custom hook for accessing the global state
import logo from "../assets/img/SVGlogo.svg";
// Define and export the Single component which displays individual item details.
export const Methodology = () => {
  return (
    <div className="container-fluid bg-light">
      <div>
        <h1>Metodología</h1>
        <p>
          Incluye a todos los miembros del hogar, dado que es un aprendizaje en
          familia, los padres asesoran a sus hijos en el desarrollo de su
          proyecto de aprendizaje guiados por un tutor que les dará semana a
          semana distintas herramientas, capacitaciones, y espacios de
          conversación para profundizar en distintas dudas que surjan en el
          proceso.
          <br />
          <br />
          Metodología La metodología es basada en la educación por proyectos
          potenciando la autonomía y pensamiento critico, el tutor dará el paso
          a paso desde la organización familiar con los tiempos y horarios,
          hasta el desarrollo de cada proyecto y realización de un producto
          final que se desarrolla mensual o cada 2 semanas según la edad.
          <br />
          <br />
          Ademas semanalmente se darán herramientas sobre educación emocional,
          ambiental, crianza y valores humanos y se realizan diferentes retos
          para que los niños potencien cada una de sus habilidades e
          inteligencias.
        </p>
        <h2>Características</h2>
        <ul>
          <li>Enfocado en los intereses del niño</li>
          <li>
            Los intereses del niño generan la potencialización de sus
            habilidades
          </li>
          <li>No religioso, sino espiritual</li>
          <li>Incentiva la autonomía e independencia</li>
          <li>Crítico y autocritíco</li>
          <li>
            Genera sensibilidad con respecto a los otros seres de la naturaleza
          </li>
          <li>Incentiva una inteligencia emocional</li>
          <li>Involucra a toda la familia en el proceso</li>
          <li>Los padres también tienen su constante proceso de aprendizaje</li>
        </ul>
      </div>
      <img src={logo} alt="logo" className="abc logo" />
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default Methodology;
