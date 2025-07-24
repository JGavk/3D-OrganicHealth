import { Outlet } from 'react-router';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import FixedText from '../../modeling/lights/FixedText';
import Overlay from '../../modeling/overlay-data/Overlay';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import IschemicHeartModel from '../../modeling/3d-models/WhatIsIH';
import './IschemicHeart.css';
import { Sparkles } from '@react-three/drei';


function IschemicHeart() {
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
        <spotLight
          color={"yellow"}
          position={[1, 1, 1]}
          angle={1}
          penumbra={0.5}
          intensity={2} />
        <Sparkles count={80} scale={6} speed={1.5} />
        <IschemicHeartModel scale={1} position={[0, 0, 0]} />
        <FixedText>Cardiopatía Isquémica</FixedText>
      </Canvas>

      <div className="info-panel-wrapper">
        <div className="info-panel">
          <h2>¿Qué es?</h2>
          <p>
            La cardiopatía isquémica ocurre cuando las arterias coronarias se estrechan o bloquean debido a la acumulación de placas de grasa, colesterol y otras sustancias (aterosclerosis). Esto reduce o interrumpe el flujo sanguíneo al corazón, disminuyendo el suministro de oxígeno y nutrientes necesarios para su funcionamiento. Sin suficiente oxígeno, el músculo cardíaco se debilita, lo que puede causar dolor en el pecho, insuficiencia cardíaca o incluso un infarto.
          </p>
          <button onClick={() => setShowOverlay(true)}>
            ¿Quieres conocer más detalles?
          </button>
        </div>
              {showOverlay && (
        <Overlay onClose={() => setShowOverlay(false)} allowedIds={['SymptomsIH', 'TreatmentIH']} />
      )}
      <Outlet />
    </div>
  </div>
  );
}
export default IschemicHeart;