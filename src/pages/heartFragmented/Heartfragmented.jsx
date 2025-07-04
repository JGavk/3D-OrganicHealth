import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import Heartf from "../../modeling/3d-models/Heartf";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Heartfragmented.css";
import { useNavigate } from "react-router-dom";

function Heartfragmented() {
  const navigate = useNavigate();
  return (
    <div className="heart-fragmented-container" tabIndex={0}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="heart-fragmented-canvas"
      >
        <OrbitControls />
        <ambientLight intensity={0.7} />
        <DynamicLight />
        <ShadowPlane />
        <Heartf scale={17} position={[-1, 0, 0]} />
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
          Sintomas
        </Text>
      </Canvas>

      <button
        className="cta-button"
        onClick={() => navigate('/models/beating')}
        
      >
        Atras
      </button>

      <div className="description-panel">
        <h2>¿cuales son los sintomas?</h2>
        <p>
          Los síntomas pueden desarrollarse lentamente. A veces, los síntomas de
          la insuficiencia cardíaca comienzan repentinamente. Algunos síntomas
          de la insuficiencia cardíaca son los siguientes: Falta de aire durante
          una actividad o cuando estás acostado. Fatiga y debilidad. Hinchazón
          en las piernas, en los tobillos y en los pies. Latidos del corazón
          rápidos o irregulares. Menor capacidad para hacer ejercicio.
          Sibilancia. Tos que no desaparece o tos con mucosidad de color blanca
          o rosa y puntos de sangre. Hinchazón del abdomen. Aumento de peso muy
          rápido debido a la acumulación de líquidos. Náuseas y falta de
          apetito. Dificultad para concentrarse o menor estado de alerta. Dolor
          en el pecho si la insuficiencia cardíaca es producto de un ataque
          cardíaco.
        </p>
      </div>

      <Outlet />
    </div>
  );
}
export default Heartfragmented;
