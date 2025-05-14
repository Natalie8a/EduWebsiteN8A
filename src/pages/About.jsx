// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom"; // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types"; // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer"; // Import a custom hook for accessing the global state

// Define and export the Single component which displays individual item details.
export const About = () => {
  return (
    <>
      <div className="container-fluid bg-light wContainer">
        <div className="flex-container first">
          <div className="her-photo">
            <img
              src="src/assets/img/photo nosotros.jpeg"
              alt="photo"
              width={300}
              height={400}
            />
          </div>
          <div className="text">
            <h1 className="abc">NOSOTROS</h1>
            <br />
            <div>
              <h1>
                La Cabaña del saber es un lugar para ser y sentir, es un lugar
                para expresar tu ser y tus motivaciones por nuevos aprendizajes.
              </h1>
              <p>
                Natalia Hernandez, madre y mujer Bogotana, es la creadora de
                este grandioso proyecto de educación dirigido a familias que
                educan en casa y que quieren tener un proceso de
                desescolarización. Es curiosa por naturaleza y siempre ha
                pensado en como generar nuevos espacios de educación en donde
                las familias se sientan cómodas y libres para expresarse a su
                manera. Desde muy joven se intereso por diferentes temas de
                educación y ha liderado diferentes espacios con familias, niños
                y adultos mayores. Licenciada en Pedagogía Infantil bilingue,
                con formación en ámbitos artísticos y arteterapia, cuidado de la
                naturaleza, diplomado en valores humanos, con curso en
                Programación Neurolinguistica entre otros.
              </p>
            </div>
          </div>
        </div>
        <h2>¿QUIÉNES SOMOS?</h2>
        <p>
          Somos un grupo de especialistas en distintas áreas de la educación
          infantil. Porque entendemos que el aprendizaje es proceso tanto para
          los padres como para niños, estamos comprometidos en asesorar el
          desarrollo de proyectos de aprendizaje de las familias que educan en
          casa.
        </p>
        <h2>¿QUÉ HACEMOS?</h2>
        <p>
          Facilitamos el desarrollo de proyectos de aprendizaje de familias que
          educan en casa, es decir, el conocimiento se aborda de una manera
          global en donde todos los contenidos están conjugados. Así mismo, es
          un enfoque multifuncional para abordar la utilidad de los
          conocimientos en contexto.
          <br />Y para las familias que tienen el proyecto de educar en casa,
          pero que aún no han dado el paso o que tienen dudas, los asesoramos
          para evaluar y poner en marcha los métodos de educación en casa. De
          manera complementaria acompañamos el proceso de crianza y ofrecemos
          estrategias para facilitar el ejercicio del rol de padres.
          <br />
          Propiciamos encuentros y actividades de distintas temáticas para la
          socialización y practica de diversos temas como los son el club de
          inglés, de arte, literatura entre otros.
        </p>
        <h2>NUESTRO ENFOQUE</h2>
        <p>
          Creemos en una educación que ofrezca a los niños todas las
          herramientas para ser ciudadanos conscientes y comprometidos consigo
          mismo y con los demás y su entorno. <br />
          Por esta razón, promovemos, técnicas de educación emocional,
          autonomía, al igual que educación ambiental. <br />
          Nos guiamos en valores como la verdad, la cooperación, la paz, la no
          violencia, que promueven el reconocimiento del otro como igual y el
          conocimiento interior.
        </p>
        <h2>MISIÓN</h2>
        <p>
          Buscamos asesorar, acompañar y fortalecer las practicas educativas de
          las familias que han decidido educar en casa. Nuestro enfoque, está
          estructurado a través de la formulación de proyectos de aprendizaje
          los cuales potencian la autonomía y pensamiento crítico y se
          complementan con diferentes estrategias de educación emocional,
          valores humanos, buenos hábitos de crianza y educación ambiental.{" "}
        </p>
        <h2>VISIÓN</h2>
        <p>
          Formar una nueva generación de niños y jóvenes autónomos, creativos,
          auténticos, y con pensamiento crítico que estén preparados para
          afrontar las distintas situaciones de la vida, gracias al
          reconocimiento de la familia como el primer lugar de aprendizaje.{" "}
        </p>
        <h2>PRINCIPIOS Y VALORES</h2>
        <div className="grid-container">
          <p className="grid1">
            <strong>Autonomía:</strong> visto como la capacidad del ser humano
            para hacer las cosas por si mismo, esto aplicado a la educación es
            buscar la información por si mismo, para convertirla en conocimiento
            aplicado a la realidad.
            <br /> <br />
            <strong>Colaboración:</strong> se define como el trabajo hecho en
            conjunto por dos o más personas interesadas en llevar a cabo un
            proyecto en común. <br /> <br />
            <strong>Motivación:</strong> se puede definir como el impulso que
            tiene una persona para realizar algo, ese impulso puede ser interno
            o externo y pueden estar determinados por vivencias o distintas
            situaciones que lo lleven a hacer algo. <br /> <br />{" "}
            <strong>Interés:</strong>
            entendida como la inclinación hacia algo o la atención y curiosidad
            que puedes poner en algo o alguien, entonces seria esa curiosidad
            por aprender algo. <br /> <br />
            <strong>Inclusión:</strong> es la integración de cierto grupo de
            personas a un grupo, la cual incluye una adaptación para poder
            encajar a las nuevas necesidades, en educación, seria una adaptación
            al currículo y a sus necesidades en la nueva diversidad. <br />{" "}
            <br />
            <strong>Igualdad:</strong> es darles a todas las personas las mismas
            oportunidades y beneficios para realizar distintas actividades y
            para acceder a distintos servicios.
          </p>
          <p className="grid2">
            <strong>Respeto:</strong> es una consideración o valor especial que
            se la da a una persona o a un objeto, además de ser uno de los
            valores fundamentales que se debe tener presente a la hora de
            interactuar con las demás personas.
            <br /> <br />
            <strong>Libertad:</strong> entendida desde el contexto educativo
            como la facultad o derecho de tomar decisiones de manera responsable
            considerando todas sus posibles consecuencias.
            <br /> <br />
            <strong>Diversidad:</strong> es comprender y aceptar que en el mundo
            existen distintos tipos de personas con diferentes pensamientos,
            culturas, religiones, posiciones políticas entre otras que deben ser
            respetados, pero que de la misma manera no deben ser impuestos.
            <br /> <br />
            <strong>Creatividad:</strong> es la capacidad de generar nuevas
            ideas y/o conceptos que habitualmente producen soluciones
            originales, dentro de la educación la creatividad es algo esencial
            para generar nuevos proyectos, productos, formas de pensar para así
            volver al pensamiento mas flexible y abierto a nuevas ideas. <br />
          </p>
        </div>
        <img src="src/assets/img/SVGlogo.svg" alt="logo" className="abc logo" />
        <br /> <br /> <br /> <br />
      </div>
    </>
  );
};
