import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer py-10 bg-dark text-light">
      <div className="container px-4">
        <div className="row flex-nowrap overflow-auto gap-5 text-center text-md-start justify-content-between">

          <div className="col flex-shrink-0">
            <h3 className="fw-bold">Heart Wise</h3>
          </div>

          <div className="col flex-shrink-0">
            <h4>Redes</h4>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/?locale=es_LA" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://co.linkedin.com/" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/?lang=es" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.youtube.com/?app=desktop&hl=es" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col flex-shrink-0">
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <p>Línea nacional: +57 3123456789</p>
            </ul>
          </div>

          <div className="col flex-shrink-0">
            <h4>Gmail</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=juan.pablo.puerta@correounivalle.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  juan.pablo.puerta@correounivalle.edu.co
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=cristhian.ramirez@correounivalle.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  cristhian.ramirez@correounivalle.edu.co
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jenifer.ortiz@correounivalle.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  jenifer.ortiz@correounivalle.edu.co
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=xavier.lopez@correounivalle.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  xavier.lopez@correounivalle.edu.co
                </a>
              </li>
            </ul>
          </div>

          <div className="col flex-shrink-0">
            <h4>Más Información</h4>
            <ul className="list-unstyled">
              <li><NavLink to="/map" className="text-light text-decoration-none">Mapa del sitio</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">© 2025 Heart Wise. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;