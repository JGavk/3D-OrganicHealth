import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import Heartb from "../../modeling/3d-models/Heartb";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Beatingheart.css";
import { useNavigate } from "react-router-dom";

function Beatingheart() {
  const navigate = useNavigate();

  return (
    <div className="heart-beating-container" tabIndex={0}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="heart-beating-canvas"
      >
        <ambientLight intensity={0.7} />
        <DynamicLight />
        <ShadowPlane />
        <Heartb scale={15} position={[0, 0, 0]} />

        <Text
          position={[0, 1.6, 0]}
          color="white"
          fontSize={0.5}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          Insuficiencia Cardiaca
        </Text>
      </Canvas>

      <button
        className="cta-button"
        
        style={{
          position: "absolute",
          bottom: "30px",
          right: "20px",
          width: "auto",
          minWidth: "140px",
          maxWidth: "320px",
          padding: "16px 30px",
          display: "inline-block",
          boxSizing: "border-box",
          zIndex: 10,
        }}
        onClick={() => navigate("/symptoms")}
      >
        Ver síntomas
      </button>

      <div className="description-panel">
        <h2>¿Qué es?</h2>
        <p>
          La insuficiencia cardíaca es una condición clínica crónica y
          progresiva en la que el corazón no puede bombear sangre de manera
          eficiente para satisfacer las necesidades del cuerpo en cuanto a
          oxígeno y nutrientes. Esto puede ocurrir porque el corazón está
          demasiado débil o demasiado rígido para llenarse y expulsar sangre
          adecuadamente.
        </p>
      </div>

      <Outlet />
    </div>
  );
}

export default Beatingheart;
