import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stars, KeyboardControls } from '@react-three/drei';
import HeartModel3 from '../../modeling/3d-models/HeartModel3';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Heart3.css';

function Heart3() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="heart3-container" tabIndex={0}>
      <KeyboardControls
        map={[
          { name: 'zoom', keys: ['ArrowUp'] },
          { name: 'rotate', keys: ['ArrowRight'] }
        ]}
      >
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
          gl={{ antialias: true }}
          className={`heart3-canvas ${showOverlay ? 'no-events' : ''}`}
        >
          <ambientLight intensity={0.6} />
          <DynamicLight disabled={showOverlay} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />
          <ShadowPlane />

          <HeartModel3
            scale={0.03}
            position={[0, 0, 0]}
            onClick={() => alert('¡Hiciste clic en el corazón!')}
            onPointerEnter={() => console.log('El mouse pasó sobre el corazón')}
          />
        </Canvas>
      </KeyboardControls>

      <div className="description-wrapper">
        <div className="description-panel">
          <div className="text-2d-overlay title">Infarto Agudo del Miocardio</div>
          <p>
            El infarto agudo del miocardio ocurre cuando una arteria coronaria se bloquea y corta el suministro de sangre al corazón, lo que provoca daño en el tejido cardíaco. <br />
            Si no se trata a tiempo, puede resultar fatal. Es fundamental una intervención médica urgente.
          </p>

          <div className="button-group">
            <button onClick={() => setShowOverlay(true)}>Posibles Tratamientos</button>
            <button onClick={() => navigate('/models/sintomas')}>Ir a Síntomas</button>
            <button onClick={() => navigate('/models/final-model')}>Siguiente Modelo</button>
          </div>
        </div>

        {showOverlay && (
          <div className="overlay-screen" onClick={() => setShowOverlay(false)}>
            <div className="info-panel">
              <h2>Soluciones Médicas</h2>
              <p>
                <strong>Angioplastia:</strong> Inserción de un balón para desbloquear la arteria y, normalmente, colocación de un stent.<br /><br />
                <strong>Bypass Coronario:</strong> Cirugía para redirigir el flujo sanguíneo usando un vaso sanguíneo de otra parte del cuerpo.<br /><br />
                <strong>Medicamentos:</strong> Trombolíticos, antiplaquetarios y anticoagulantes para disolver coágulos y restaurar el flujo.
              </p>
              <button onClick={() => navigate('/models/sintomas')}>Regresar</button>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Heart3;
