import { faBook } from "@fortawesome/free-solid-svg-icons";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid text-center mainHome">
        <img src="src/assets/img/SVGlogo.svg" alt="Logo" width="600px" />
        <img src="src/assets/img/niños.png" alt="niños" width="50%" />
        <div className="getToKnowUs">
          <img
            id="cabinBg"
            src="https://cdn.pixabay.com/photo/2017/08/06/18/33/barn-2594975_1280.jpg"
            alt="cabin"
          />
          <div className="centeredText">
            <h3>
              {" "}
              <FontAwesomeIcon icon={faBook} id="bookStyle1" />
              ¡ESCOGE TU PROYECTO Y EMPIEZA A APRENDER!{" "}
              <FontAwesomeIcon icon={faBook} id="bookStyle2" />
            </h3>
            <h6>Conócenos mejor</h6>
            <h3>Nuestras propuesta de aprendizaje</h3>
            <h3>TEMÁTICAS DE PROYECTOS A TU GUSTO</h3>
            <h3>ASESORÍA DE EDUCACIÓN SIN ESCUELA A PADRES</h3>
            <h3>CLUBES DE APRENDIZAJE Y SOCIALIZACIÓN</h3>
            <h3>HERRAMIENTAS DE EDUCACIÓN EMOCIONAL, CRIANZA Y VALORES</h3>
          </div>
        </div>
        <div className="motivos">
          <img src="src/assets/img/niñosEnCaja.png" alt="niñosencaja" />
          <div className="centerMotivos">
            <h1>Motivos por los que te gustaremos</h1>
            <p>
              Nunca ha habido un mejor momento para compartir la educación de
              tus hijos. La Cabaña del Saber significa el lugar del aprendizaje.
              Se avecina un momento fantástico para estar mas cerca a tu hijo y
              estar presente en sus momentos de aprendizaje.
            </p>
            <ul>
              <li>Flexible</li>
              <li>Personalizado</li>
              <li>Con temáticas a tu gusto</li>
              <li>Con espacio para socializar</li>
              <li>Todo se basa en la curiosidad</li>
            </ul>
          </div>
        </div>
        <div className="referencias">
          <h1>EXPERIENCIAS – ¿QUÉ DICEN LAS FAMILIAS?</h1>
          <p className="tb">
            Gracias por crear la cabaña de saber!!! Jero se divierte y aprende
            un montón!!!! <br /> Un abrazo a sus profesoras de arte, ciencias y
            cine… Las estimamos mucho y que sigan con esa gran energía !!! Mi
            hijo Jero disfruta, aprende, interactúa con alegría, responsabilidad
            e interés de sus talleres. Nosotros como padres lo apoyamos y
            acompañamos. Los tutores 👍 – Carolina Hurtado
          </p>
          <p className="pb">
            Hola Natalia, ¿cómo estás? Te escribo porque quisiera, por un lado
            felicitarte por el proyecto educativo que tienes, el balance de esta
            semana es muy positivo para nosotros y agradecerte por el
            acompañamiento.
            <br />
            Nos gustaron mucho los clubes. Especialmente el club de matemáticas
            y el club de Frances. – Irene Tobon
          </p>
          <p className="tb">
            Hola, buen día, ¿como estás? Quería contarte que con solo 2 clases
            lo veo contento y animado, de su colegio anterior lo tuve que
            retirar porque al iniciar la clases lloraba mucho y no le gustaba,
            quería saber si para diciembre manejan también el programa – Danna
            Castañeda
          </p>
          <p className="pb">
            Me pareció espectacular, ya había escuchado acerca de filosofía para
            niños y me parece muy valioso que ustedes tengan está propuesta. Mi
            niño se distrajo un poco, le cuesta estar mucho tiempo mirando a la
            pantalla aún, pero lo ví muy interesado, me dice que le llamo la
            atención el títere sin un ojo, jajaja. Muy bella la clase. – Nidia
            Gonzales
          </p>
          <p className="tb">
            Hola, muchas gracias por todo, la verdad que bonita experiencia con
            ambos profes Samuel ha estado muy emocionado gracias, quedo muy
            contento, la verdad hace un año estamos buscando un programa así,
            gracias. Diana Martinez
          </p>
          <p className="pb">
            Buenas noches, mis hijos y nosotros estamos muy contentos de
            pertenecer a La cabaña del saber. Mis hijas cada día hablan mejor
            inglés gracias a las clases que han recibido. 💖✨ Diana Moreno.
          </p>
        </div>
        <div className="valores">
          <h1>Valores</h1>
          <h2 className="centered-h">
            Autonomía Colaboración Libertad educativa Creatividad
          </h2>
          <img src="src/assets/img/Autonomía.png" alt="autonomía" />
          <img src="src/assets/img/Colaboración.png" alt="colaboración" />
          <img src="src/assets/img/Libertad Educativa.png" alt="libertad" />
          <img src="src/assets/img/Creatividad.png" alt="creatividad" />
        </div>
        <div className="alianzas">
          <h1>Alianzas</h1>
          <a
            href="https://obraconproposito.com/sobre-nosotros/"
            target="_blank"
          >
            {" "}
            <img
              src="https://www.obraconproposito.com/wp-content/uploads/2019/11/Logo-250x90-1.png"
              alt="obra con propósito"
            />{" "}
          </a>
        </div>
      </div>
    </>
  );
};
