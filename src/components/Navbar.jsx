import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <Link to="/">
          <button className="btn navbar-brand mb-0 h1  navItem purple">
            <FontAwesomeIcon icon={faHouse} id="homeIcon" /> <br />
            Inicio
          </button>
        </Link>
        <div className="ml-auto">
          <Link to="/contact">
            <button className="btn navItem purple">
              {" "}
              <FontAwesomeIcon icon={faLaughBeam} id="aboutUs" /> <br />
              Nosotros
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/contact">
            <button className="btn navItem purple">
              {" "}
              <FontAwesomeIcon icon={faBellConcierge} id="services" /> <br />
              Servicios
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/contact">
            <button className="btn navItem white">
              {" "}
              <FontAwesomeIcon icon={faBookOpenReader} id="methodology" />{" "}
              <br />
              Metodología
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/contact">
            <button className="btn navItem white">
              {" "}
              <FontAwesomeIcon icon={faFeatherPointed} id="About us" /> <br />
              Blog
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/signUp">
            <button className="btn navItem teal">
              {" "}
              <FontAwesomeIcon icon={faUserPlus} id="About us" /> <br />
              Proceso de inscripción
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/contact">
            <button className="btn navItem teal">
              {" "}
              <FontAwesomeIcon icon={faAddressCard} id="About us" /> <br />
              Contacto
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
