import { Outlet } from 'react-router';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import FixedText from '../../modeling/lights/FixedText';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import { Html, Sparkles } from '@react-three/drei';
import IschemicHeartModel from '../../modeling/3d-models/WhatIsIH';
import Overlay from '../../modeling/overlay-data/Overlay';
import './IschemicHeart.css';

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
        <DynamicLight disabled={showOverlay} />
        <ShadowPlane />
        <spotLight
          color={"yellow"}
          position={[1, 1, 1]}
          angle={1}
          penumbra={0.5}
          intensity={3} />
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
          <Overlay onClose={() => setShowOverlay(false)} allowedIds={['SymptomsIH', 'TreatmentIH', 'CareIH']} />
        )}
        <Outlet />
      </div>

      <div
        style={{
          position: 'fixed',
          top: '430px',
          left: '1650px',
          background: 'rgba(0, 0, 0, 0.65)',
          color: 'white',
          padding: '1rem',
          borderRadius: '10px',
          width: '200px',
          fontSize: '13px',
          textAlign: 'justify',
          zIndex: 10,
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        Presiona T o B para cambiar el ritmo. Haz clic en el corazón para activar o detener el sonido.
      </div>
    </div>
  );
}
export default IschemicHeart;