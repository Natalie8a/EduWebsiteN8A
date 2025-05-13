import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Inicio</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-light">Nosotros</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-light">Servicios</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-light">Metodología</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-light">Proceso de inscripción</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-info">Contacto</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
