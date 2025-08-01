import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../firebase";
import { loginWithGoogle, logout } from "../../firebaseAuth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBorderVisible, setIsBorderVisible] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsBorderVisible(location.pathname !== '/');
  }, [location.pathname]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      setShowLoginModal(false);
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
    }
  };

  const handleLogout = async () => {
    await logout();
    setShowLoginModal(false);
  };

  return (
    <>
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
            <button className="nav-button" onClick={() => navigate('/about')}>SOBRE NOSOTROS</button>

            {user ? (
              <img
                src={user.photoURL}
                alt="Usuario"
                className="user-avatar"
                title={user.displayName}
                onClick={() => navigate('/login')}
              />
            ) : (
              <button className="nav-button" onClick={() => setShowLoginModal(true)}>INICIA SESIÓN</button>
            )}
          </div>
        </nav>
      </header>
      {showLoginModal && (
        <div className="login-modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            {!user ? (
              <>
                <h3>Inicia sesión</h3>
                <button className="google-login-btn" onClick={handleGoogleLogin}>
                  Iniciar sesión con Google
                </button>
              </>
            ) : (
              <>
                <h3>¿Deseas cerrar sesión?</h3>
                <button className="google-login-btn" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;