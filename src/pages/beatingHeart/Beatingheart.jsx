import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import * as THREE from "three";
import Heartb from "../../modeling/3d-models/Heartb";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Beatingheart.css";
import { useNavigate } from "react-router-dom";
import FixedText from "../../modeling/lights/FixedText";

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
        <pointLight
          position={[10, 10, 10]}
          color="#88aaff"
          intensity={1.5}
          castShadow
          distance={30}
          decay={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-near={0.5}
        />
        <DynamicLight />
        <ShadowPlane />
        <Heartb scale={15} position={[0, 0, 0]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <FixedText>Insificiencia Cardiaca</FixedText>
        

      </Canvas>

      <button className="cta-button" onClick={() => navigate("/symptoms")}>
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
