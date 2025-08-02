import "./Login.css";
import { useCallback, useState } from "react";
import useAuthStore from "../../services/use-auth-store.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userLooged, loginGoogleWithPopup } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    try {
      await loginGoogleWithPopup();
      navigate("/models");
    } catch {
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, [loginGoogleWithPopup, navigate]);

  console.log(userLooged);

  return (
    <div className="login-container">
      <h2 className="login-title">Continúa con Google</h2>
      <button
        className="login-button"
        type="button"
        title="iniciar sesion con Google"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Iniciando sesión…" : "Iniciar sesión con Google"}
      </button>
    </div>
  );
};

export default Login;

