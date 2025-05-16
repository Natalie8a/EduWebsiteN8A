// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom"; // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types"; // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer"; // Import a custom hook for accessing the global state
import logo from "../assets/img/SVGlogo.svg";
import rubiks from "../assets/img/rubiks_cube.png";
// Define and export the Single component which displays individual item details.
export const Services = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 className="centered">Servicios</h1>
        <h1>
          En el siguiente apartado encontraras los distintos servicios que
          ofrece La Cabaña del saber
        </h1>
        <div className="purple-bg">
          <span className="bigCategories">
            TIPOS DE ASESORÍAS <br />
          </span>
          <span className="smallCategories">
            Asesorías para padres en proceso de no escolarización (coaching para
            padres):
          </span>
          <p>
            Se trata de la asesoría para tomar la decisión de educar en casa.
          </p>
          <span className="smallCategories">Asesorías para padres:</span>
          <p>
            Se realizan asesorías a los padres en temas específicos de educación
            y crianza.
          </p>
          <span className="smallCategories">
            Asesorías para la realización de proyectos de aprendizaje en familia
            y/o individual:{" "}
          </span>
          <p>
            Es una asesoría y seguimiento que se realiza por medio de distintos
            pasos para la realización de proyectos de aprendizaje de interés de
            los niños, incluye asesoría para los padres.
          </p>
        </div>
        <div className="teal-bg">
          <span className="bigCategories">
            Espacios de estimulación individual <br />
          </span>
          <span className="smallCategories">
            Espacio para niños de 0 a 4 años
          </span>
          <p>
            Exploración artística, exploración musical, exploración corporal,
            juego, exploración del medio, texturas, sonidos, literatura,
            lenguaje, hábitos. <br />
            Se envían actividades de distintos temas y para explorar distintos
            ámbitos sensoriales, algunas son sincrónicas y otras asincrónicas.
          </p>
          <span className="smallCategories">
            Espacio EXPLORADORES (niños de 4 a 6 años)
          </span>
          <p>
            Proyectos, colaborativo, autónomo, individual
            <br />
            Duración: mensual
          </p>
          <span className="smallCategories">
            Espacio INVESTIGADORES (niños de 7 a 10 años )
          </span>
          <p>
            Proyectos, colaborativo, autónomo, individual
            <br /> Duración: mensual
          </p>
          <span className="smallCategories">
            Espacio ANALIZADORES (niños de 11 a 18 años)
          </span>
          <p>
            Proyectos, colaborativo, autónomo, individual
            <br /> Duración: mensual
          </p>
        </div>
        <div className="purple-bg">
          <span className="bigCategories">
            Espacios de estimulación grupal <br />
          </span>
          <span className="smallCategories">Espacio de SOCIALIZACIÓN</span>
          <p>
            Proyectos, experiencias, juegos de los niños.
            <br /> En este espacio los niños son los protagonistas y nos cuentan
            cómo van sus proyectos, además realizan distintos tipos de
            actividades para la comunidad como lo son (algunas actividades serán
            mediadas por un tutor):
          </p>
          <span className="smallCategories">4 a 6 años:</span>
          <p>
            Filosofía para niños, exploración artística, exploración y expresión
            corporal, exploración musical, literatura, juego, exploración del
            medio (medio ambiente).
          </p>
          <span className="smallCategories">7 a 10 años: </span>
          <p>
            Filosofía para niños, juegos de roles, equipos de trabajo,
            exploración artística, exploración y expresión corporal, exploración
            musical, literatura, juego, exploración del medio (medio ambiente)
          </p>
          <span className="smallCategories">11 a 18 años:</span>
          <p>
            Juegos de roles, conversatorios, talleres vivenciales, equipos de
            trabajo
          </p>
        </div>
        <div className="teal-bg">
          <span className="bigCategories">CLUBES </span>
          <p>(4 a 18+ años -- grupal)</p>
          <div className="gridContainer1">
            <div>
              <span className="smallCategories">🇺🇸CLUB DE INGLÉS🇬🇧</span>
              <p>
                Es un espacio en donde grupos de niños y/o jóvenes de distintas
                edades pueden interactuar para la práctica del inglés (este
                espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🎨CLUB DE ARTE🖌️</span>
              <p>
                Este es un espacio para re pensar el arte, vivir el arte y
                realizar todas las obras que siempre imaginaste y nunca
                decidiste hacer. (este espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">
                📖CLUB DE LITERATURA Y LENGUAJE🗣️
              </span>
              <p>
                Un espacio para soñar y compartir el lenguaje escrito, y en voz
                alta, compartir historias y juego de palabras. (este espacio
                esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🧬CLUB DE CIENCIAS🧪</span>
              <p>
                En un espacio para explorar y aprender sobre el planeta que
                vivimos y las relaciones que existen entre ellos, además un
                espacio para reflexionar sobre las distintas teorías
                científicas. (este espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">📚CLUB DE HISTORIA⏳</span>
              <p>
                Es un espacio para conocer la historia desde distintos ángulos,
                conocerla y analizarla, es un espacio para descubrir la historia
                de las cosas y las personas. (este espacio esta mediado por un
                tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🎭CLUB DE TEATRO🎭</span>
              <p>
                Es el espacio en donde la imaginación se vuelve realidad
                representando un personaje. Además, es un espacio para conocerse
                a si mismo y conocer como la corporalidad, la voz y la
                improvisación son clave importante de la representación. (este
                espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🧮CLUB DE MATEMÁTICAS🔢</span>
              <p>
                Este es un espacio para ver las matemáticas mas allá de solo
                números, es un espacio para analizar para que sirven y como
                podemos usarlas en la vida real, para que, de esa manera, sean
                una herramienta para la vida. (este espacio esta mediado por un
                tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">♟️CLUB DE AJEDREZ♛</span>
              <p>
                Este es un espacio de juego, pero más que eso es un espacio para
                cultivar la estrategia y el análisis critico que puede ser
                aplicado en la vida. (este espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🇫🇷CLUB DE FRANCÉS🥖</span>
              <p>
                Es un espacio en donde grupos de niños y/o jóvenes de distintas
                edades pueden interactuar para la práctica del francés y conocer
                su cultura (este espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🎬CLUB DE CINE🎞️</span>
              <p>
                Es un espacio para conocer y compartir distintos tipos de
                películas y también para conocer y realizar producción
                cinematográfica. (este espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">📚CLUB DE FILOSOFÍA🧐</span>
              <p>
                Es un espacio para conversar y reflexionar, conocer el
                significado y el uso de la filosofía. El mundo de las preguntas
                más cerca de ti. (este espacio esta mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">
                💃CLUB DE DANZA Y MOVIMIENTO🕺
              </span>
              <p>
                Es un espacio para explorar el movimiento y todas sus
                posibilidades en diferentes tipos de bailes. (este espacio esta
                mediado por un tutor)
              </p>
            </div>
            <div>
              <span className="smallCategories">🎼CLUB DE MÚSICA🎶</span>
              <p>
                Es el espacio ideal para explorar y reconocer distintos sonidos,
                hacer una apropiación música, realizar distintos ejercicios
                musicales, aprender sobre historia de la música y escoger tu
                instrumento.
              </p>
            </div>
            <div>
              <span className="smallCategories">🌎CLUB DE GEOGRAFÍA🗺️</span>
              <p>
                Es un espacio para reconocer la geografía en variados contextos,
                conocer la geografía de distintos países y aprender a
                reconocerla dentro de diferentes dinámicas tanto políticas, como
                económicas, culturales, entre otras.
              </p>
            </div>
            <div>
              <span className="smallCategories">
                👩‍💻CLUB DE INFORMÁTICA Y PROGRAMACIÓN🧑‍💻
              </span>
              <p>
                Es un espacio para reconocer desde lo mas básico del computador,
                hasta las distintas funcionalidades del Internet que llevan a
                tener un mayor manejo del as mismas, después de eso el ideal es
                entrar un poco hacia la programación y hacia demás temáticas del
                interés de los participantes.
              </p>
            </div>
            <div>
              <span className="smallCategories">
                <img src={rubiks} className="rubiks" />
                CLUB DE CUBO RUBIK Y OTROS JUEGOS MENTALES🧩
              </span>
              <p>
                Es un espacio de ocio en el que los niños podrán aprender los
                distintos mecanismos del cubo rubik mientras se divierten
                armándolo. Adicional a eso podrán hacer otros juegos de
                concentración, atención y memoria.
              </p>
            </div>
          </div>
        </div>
        <div className="lastBit"></div>
      </div>
      <img src={logo} alt="logo" className="abc logo bg-light" />
      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Services;
