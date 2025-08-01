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
import Annotation from '../../modeling/lights/Annotation';
import './HeartIssue.css'; 

function HeartIssue() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="heart-scene-wrapper">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className={`heart-canvas ${showOverlay ? 'no-pointer' : ''}`}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 5, 2]} color="#88aaff" intensity={1.5} />
        <DynamicLight disabled={showOverlay} />
        <ShadowPlane />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <HeartModel scale={1} position={[0, 0, 0]} />
        <FixedText>Estenosis Aórtica</FixedText>
        <Annotation
          position={[0.3, 0.7, 0.2]}
          info="La aorta es la arteria principal que transporta sangre rica en oxígeno desde el corazón al resto del cuerpo"
        >
          Aorta
        </Annotation>
        <Annotation
          position={[-1.2, 0.5, -0.7]}
          info="vena grande que transporta la sangre desoxigenada de regreso al corazón"
        >
          Vena Cava
        </Annotation>
      </Canvas>

      <div className="info-panel-wrapper">
        <div className="info-panel">
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

      {showOverlay && (
        <Overlay onClose={() => setShowOverlay(false)} allowedIds={['stenosisSymp', 'StenosisOperation', 'KKK']} />
      )}

      <Outlet />
    </div>
  );
}

export default HeartIssue;