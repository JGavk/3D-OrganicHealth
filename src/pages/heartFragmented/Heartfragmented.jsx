import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import * as THREE from "three";
import Heartf from "../../modeling/3d-models/Heartf";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Heartfragmented.css";
import { useNavigate } from "react-router-dom";
import FixedText from "../../modeling/lights/FixedText";

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
        <Heartf scale={17} position={[-1, 0, 0]} />
       <Stars radius={100} depth={50} count={5000} factor={4} fade />
       <FixedText>Sintomas</FixedText>
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
