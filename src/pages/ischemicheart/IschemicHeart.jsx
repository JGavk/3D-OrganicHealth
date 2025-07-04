import { Outlet } from 'react-router';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, KeyboardControls, Sparkles, Billboard } from '@react-three/drei';
import { useRef, useState } from 'react';
import IschemicHeartModel from '../../modeling/3d-models/IschemicHeartModel';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import SymptomsDisease from './SymptomsDisease';
import './IschemicHeart.css';

function IschemicHeart() {
  const [hovered, setHovered] = useState(false);
  const [showSymptoms, setShowSymptoms] = useState(false);

  const topRef = useRef(null);
  const symptomsRef = useRef(null);

  const scrollToSymptoms = () => {
    setShowSymptoms(true); 
    setTimeout(() => {
      symptomsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setShowSymptoms(false);
    }, 400);
  };

  return (
    <div className="ischemic-heart-container" tabIndex={0}>
      <div ref={topRef} /> {}

      <KeyboardControls
        map={[
          { name: 'Normal', keys: ['Normal', 'N'] },
          { name: 'C.I sin arritmia', keys: ['C.I sin arritmia', 'G'] },
          { name: 'Bradicardia', keys: ['Bradicardia', 'B'] },
          { name: 'Taquicardia', keys: ['Taquicardia', 'T'] },
        ]}
      />

      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="ischemic-heart-canvas"
      >
        <ambientLight intensity={0.7} />
        <DynamicLight />
        <ShadowPlane />
        <spotLight color={"red"} position={[2, 5, 5]} angle={0.3} penumbra={0.5} intensity={45} />
        <Sparkles count={80} scale={6} speed={1.5} />
        <IschemicHeartModel scale={1} position={[0, 0, 0]} onHoverChange={setHovered} />

        <Billboard follow lockRotation>
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
            Cardiopatía Isquémica
          </Text>
        </Billboard>
      </Canvas>

      {hovered && (
        <div className="info-panel">
          <h2>Eventos del teclado</h2>
          <p>
            Presiona una de las siguientes teclas para simular distintas condiciones del ritmo cardíaco:
          </p>
          <div style={{ textAlign: 'center' }}>
            <strong>G</strong> – Sin arritmia<br />
            <strong>B</strong> – Bradicardia<br />
            <strong>T</strong> – Taquicardia<br />
            <strong>N</strong> – Ritmo normal
          </div>
        </div>
      )}

      {!showSymptoms && (
        <div className="description-panel-ih">
          <h2>¿Qué es?</h2>
          <p>
            La cardiopatía isquémica ocurre cuando las arterias coronarias se estrechan o bloquean debido a la acumulación de placas de grasa, colesterol y otras sustancias (aterosclerosis). Esto reduce o interrumpe el flujo sanguíneo al corazón, disminuyendo el suministro de oxígeno y nutrientes necesarios para su funcionamiento. Sin suficiente oxígeno, el músculo cardíaco se debilita, lo que puede causar dolor en el pecho, insuficiencia cardíaca o incluso un infarto.
          </p>
          <button onClick={scrollToSymptoms} className="cta-button-ih">
            ¿Quieres conocer sus SÍNTOMAS?
          </button>
        </div>
      )}

      {showSymptoms && (
        <div ref={symptomsRef}>
          <SymptomsDisease onGoBack={scrollToTop} />
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default IschemicHeart;