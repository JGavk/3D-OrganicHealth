import { NavLink } from "react-router-dom";
import "./SiteMap.css";

const Map = () => {
  return (
    <footer className="site-map py-14 pt-0">
      <div className="container px-4">
        <div className="row justify-content-center text-center gap-5">
          <div className="col-12 col-md-6 col-lg-2">
            <h3 className="fw-medium">Mapa del Sitio</h3>
          </div>

          <div className="col-12 col-md-6 col-lg-2 footer-col">
            <h4>Inicio</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <NavLink to="/" 
                className="text-decoration-none text-light">
                  Página Principal
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-2 footer-col enfermedades">
            <h4>Enfermedades</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <NavLink to="/models/stenosis" 
                className="text-decoration-none text-light">
                  Estenosis Aórtica
                </NavLink>
              </li>
              <li>
                <NavLink to="/models/beating" 
                className="text-decoration-none text-light">
                  Insuficiencia Cardiaca
                </NavLink>
              </li>
              <li>
                <NavLink to="/models/ischemic" 
                className="text-decoration-none text-light">
                  Cardiopatía Isquémica
                </NavLink>
              </li>
              <li>
                <NavLink to="/models/miocard" 
                className="text-decoration-none text-light">
                  Infarto Agudo del Miocardio
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-2 footer-col">
            <h4>Sobre Nosotros</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <NavLink to="/about" 
                className="text-decoration-none text-light">
                  ¿Quiénes Somos?
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-2 footer-col">
            <h4>Evaluación</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <NavLink to="/quiz" 
                className="text-decoration-none text-light">
                  Quiz
                </NavLink>
              </li>
              <li>
                <NavLink to="/results" 
                className="text-decoration-none text-light">
                  Resultados
              </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-2 footer-col">
            <h4>Autenticación</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <NavLink to="/login" 
                className="text-decoration-none text-light">
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Map;