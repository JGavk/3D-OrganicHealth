// src/layout/Header.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../services/use-auth-store.js';  // ①
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBorderVisible, setIsBorderVisible] = useState(true);

  // ② Extrae userLooged y logout de tu store
  const { userLooged, logout } = useAuthStore();

  useEffect(() => {
    setIsBorderVisible(location.pathname !== '/');
  }, [location.pathname]);

  // ③ Maneja el cierre de sesión
  const handleLogout = useCallback(async () => {
    await logout();
    navigate('/');      // o '/login' si prefieres
  }, [logout, navigate]);

  // (opcional) Para depurar:
  // console.log('Header userLooged:', userLooged);

  return (
    <header>
      <nav
        className="nav-bar"
        style={{ borderBottom: isBorderVisible ? '1px solid' : 'none' }}
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
              alt="Heart Wise Logo"
            />
            <span className="business-name">HEART WISE</span>
          </button>
        </div>

        <div className="nav-right">
          <button className="nav-button" onClick={() => navigate('/')}>
            INICIO
          </button>
          <button className="nav-button" onClick={() => navigate('/models')}>
            ENFERMEDADES
          </button>
          <button className="nav-button" onClick={() => navigate('/quiz')}>
            QUIZ
          </button>
          <button className="nav-button" onClick={() => navigate('/about')}>
            SOBRE NOSOTROS
          </button>

          {userLooged ? (
            <>
              <span className="nav-username">
                ¡Hola, {userLooged.displayName}!
              </span>
              <button
                className="nav-button"
                onClick={handleLogout}
                
              >
                CERRAR SESIÓN
              </button>
            </>
          ) : (
            <button
              className="nav-button"
              onClick={() => navigate('/login')}
            >
              INICIA SESIÓN
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

