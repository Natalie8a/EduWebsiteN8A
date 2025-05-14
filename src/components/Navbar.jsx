import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <Link to="/">
          <button className="btn navbar-brand mb-0 h1  navItem purple">
            <FontAwesomeIcon icon={faHouse} id="homeIcon" />
            Inicio
          </button>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn navItem purple">Nosotros</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn navItem purple">Servicios</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn navItem white">Metodología</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn navItem white">Blog</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn navItem teal">Proceso de inscripción</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn navItem teal">Contacto</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
