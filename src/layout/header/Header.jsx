import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBorderVisible, setIsBorderVisible] = useState(true);

  useEffect(() => {
    setIsBorderVisible(location.pathname !== '/');
  }, [location.pathname]);

  return (
    <header>
      <nav 
        className="nav-bar" 
        style={{borderBottom: isBorderVisible ? '1px solid' : 'none' }}
      >
        <div className="nav-div">
          <button
            onClick={() => navigate('/')}
            className="logo-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <img
              src="/images/logo2.png"
              width="40"
              height="35"
              className="h-8"
              alt="Heart Wise Logo"
            />
            <span className="business-name">HEART WISE</span>
          </button>
        </div>

        <div className="nav-right">
          <button className="nav-button" onClick={() => navigate('/')}>INICIO</button>
          <button className="nav-button" onClick={() => navigate('/models')}>ENFERMEDADES</button>
          <button className="nav-button" onClick={() => navigate('/quiz')}>QUIZ</button>
          <button className="nav-button" onClick={()=> navigate('/about')}>SOBRE NOSOTROS</button>
          <button className="nav-button">INICIA SESIÓN</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;