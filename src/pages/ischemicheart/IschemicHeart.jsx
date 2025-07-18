import { Outlet } from 'react-router';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useState } from 'react';
import IschemicHeartModel from '../../modeling/3d-models/IschemicHeartModel';
import './IschemicHeart.css';
import FixedText from '../../modeling/lights/FixedText';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import OverlayIH from '../../modeling/overlay-data/OverlayIH';

function IschemicHeart() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="ischemic-heart-container" tabIndex={0}>

      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className={`ischemic-heart-canvas ${showOverlay ? 'no-events' : ''}`}
      >
        <ambientLight intensity={0.7} />
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

      <div className="description-wrapper">
        <div className="description-panel">
          <div className="text-2d-overlay title">¿Qué es?</div> 
          <p>
            La cardiopatía isquémica ocurre cuando las arterias coronarias se estrechan o bloquean debido a la acumulación de placas de grasa, colesterol y otras sustancias (aterosclerosis). Esto reduce o interrumpe el flujo sanguíneo al corazón, disminuyendo el suministro de oxígeno y nutrientes necesarios para su funcionamiento. Sin suficiente oxígeno, el músculo cardíaco se debilita, lo que puede causar dolor en el pecho, insuficiencia cardíaca o incluso un infarto.
          </p>
          <button onClick={() => setShowOverlay(true)}>
            ¿Quieres conocer más detalles?
          </button>
        </div>
        {showOverlay && <OverlayIH onClose={() => setShowOverlay(false)} />}
        <Outlet />
      </div>
    </div>
  );
}
export default IschemicHeart;