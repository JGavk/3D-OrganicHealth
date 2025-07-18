import { Outlet } from 'react-router';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';
import FixedText from '../../modeling/lights/FixedText';
import HeartModel from '../../modeling/3d-models/HeartModel';
import Overlay from '../../modeling/overlay-data/Overlay';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './HeartIssue.css'; 

function HeartIssue() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="heart-issue-container">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className={`heart-issue-canvas ${showOverlay ? 'no-events' : ''}`}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 5, 2]} color="#88aaff" intensity={1.5} distance={50} decay={1} castShadow />
        <DynamicLight disabled={showOverlay} />
        <ShadowPlane />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <HeartModel scale={1} position={[0, 0, 0]} />
        <FixedText>Estenosis Aórtica</FixedText>
      </Canvas>

      <div className="description-wrapper">
        <div className="description-panel">
          <h2>¿Qué es?</h2>
          <p>
            Es una enfermedad cardíaca que estrecha la válvula aórtica,
            dificultando el flujo de sangre desde el ventrículo izquierdo hacia la aorta. 
            Esto hace que el corazón tenga que trabajar más para bombear sangre.
          </p>
          <button onClick={() => setShowOverlay(true)}>
            ¿Quieres conocer tratamientos?
          </button>
        </div>
      </div>
      {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
      <Outlet />
    </div>
  );
}

export default HeartIssue;