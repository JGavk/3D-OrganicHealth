import { Outlet } from "react-router";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { Sparkles, SpotLight } from "@react-three/drei";

import * as THREE from "three";
import Heartb from "../../modeling/3d-models/Heartb";
import ShadowPlane from "../../modeling/recipient/ShadowPlane";
import DynamicLight from "../../modeling/lights/Light";
import "./Beatingheart.css";
import FixedText from "../../modeling/lights/FixedText";
import OverlayC from "../../modeling/overlay-data/OverlayC";

function Beatingheart() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="heart-scene-wrapper">
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

        <Sparkles count={100} scale={6} speed={1.5} />

        <DynamicLight />
        <ShadowPlane />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Heartb scale={15} position={[0, 0, 0]} />
        <FixedText>Insuficiencia Cardiaca</FixedText>
      </Canvas>
      <div className="description-text-wrapper">
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
            🔍 ¿Quieres conocer más?
          </button>
        </div>
      </div>
      {showOverlay && (
        <OverlayC
          onClose={() => setShowOverlay(false)}
          allowedIds={["symptoms", "treatments", "prevention"]}
        />
      )}
      <Outlet />
    </div>
  );
}

export default Beatingheart;
