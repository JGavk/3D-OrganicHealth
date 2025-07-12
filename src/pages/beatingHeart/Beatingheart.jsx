import { Outlet } from "react-router";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Stars } from "@react-three/drei";

import * as THREE from "three";
import Heartb from "../../modeling/3d-models/Heartb";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Beatingheart.css";
import Heartf from "../../modeling/3d-models/Heartf";
import FixedText from "../../modeling/lights/FixedText";

function Beatingheart() {
  const [showOverlay, setShowOverlay] = useState(false);
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
          position={[3, 5, 2]}
          color="#88aaff"
          intensity={1.5}
          distance={50}
          decay={1}
          castShadow
        />
        <DynamicLight />
        <ShadowPlane />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Heartb scale={15} position={[0, 0, 0]} />
        <FixedText>Insuficiencia Cardiaca</FixedText>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

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
        <button onClick={() => setShowOverlay(true)}>
          ¿Quieres conocer los sintomas?
        </button>
      </div>
      {showOverlay && (
        <div className="overlay-screen">
          <div className="overlay-content">
            <button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowOverlay(false);
              }}
            >
              {" "}
              ×{" "}
            </button>

            <h2>Sintomas</h2>

            <div className="overlay-canvas-container">
              <Canvas
                shadows
                camera={{ position: [0, 2, 5], fov: 50 }}
                gl={{ antialias: true }}
                className="heart-issue-canvas"
              >
                <ambientLight intensity={0.5} />
                <ShadowPlane />
                <Stars radius={100} depth={50} count={5000} factor={4} fade />
                <DynamicLight />
                <pointLight
                  position={[3, 5, 2]}
                  color="#88aaff"
                  intensity={2}
                  distance={50}
                  decay={1}
                  castShadow
                  
                />
                <Heartf scale={26} position={[-1, 0, 0]} />
              </Canvas>
            </div>

            <div className="instruction-panel">
              <p>Gira el modelo para ver los latidos y partes afectadas</p>
              <p>
                Los síntomas pueden desarrollarse lentamente. A veces, los
                síntomas de la insuficiencia cardíaca comienzan repentinamente.
                Algunos síntomas de la insuficiencia cardíaca son los
                siguientes: Falta de aire durante una actividad o cuando estás
                acostado. Fatiga y debilidad. Hinchazón en las piernas, en los
                tobillos y en los pies. Latidos del corazón rápidos o
                irregulares. Menor capacidad para hacer ejercicio. Sibilancia.
                Tos que no desaparece o tos con mucosidad de color blanca o rosa
                y puntos de sangre. Hinchazón del abdomen. Aumento de peso muy
                rápido debido a la acumulación de líquidos. Náuseas y falta de
                apetito. Dificultad para concentrarse o menor estado de alerta.
                Dolor en el pecho si la insuficiencia cardíaca es producto de un
                ataque cardíaco..
              </p>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default Beatingheart;
