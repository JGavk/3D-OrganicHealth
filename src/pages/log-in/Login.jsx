import React, { useState, useEffect } from "react";
import { loginWithGoogle, logout } from "../../firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import './Login.css';

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const loggedUser = await loginWithGoogle();
      setUser(loggedUser);
    } catch (err) {
      console.error("Error iniciando sesión:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.error("Error cerrando sesión:", err);
    }
  };

  return (
    <div className="login-container">
      {!user ? (
        <button onClick={handleGoogleLogin} className="login-btn">
          Iniciar sesión con Google
        </button>
      ) : (
        <div className="login-card">
          <img
            src={user.photoURL}
            alt="Foto de perfil"
            className="profile-img"
          />
          <h2 className="user-name">{user.displayName}</h2>
          <p className="user-email">{user.email}</p>
          <button onClick={handleLogout} className="logout-btn">
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;