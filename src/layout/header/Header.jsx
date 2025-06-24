import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isBorderVisible, setIsBorderVisible] = useState(true);

  const handleNavClick = (path) => {
    setIsBorderVisible(false); 
    navigate(path);
  }

  return (
    <header>
      <nav 
        className="nav-bar" 
        style={{borderBottom: isBorderVisible ? '2px solid #ccc' : 'none' }}
      >
        <div className="nav-div">
          <button
            onClick={() => handleNavClick('/')}
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
          <button className="nav-button">QUIZ</button>
          <button className="nav-button">SOBRE NOSOTROS</button>
          <button className="nav-button">INICIAR SESIÓN</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;