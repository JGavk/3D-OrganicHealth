import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stars, KeyboardControls } from '@react-three/drei';
import HeartModel4 from '../../modeling/3d-models/HeartModel4';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Heart4.css';

function Heart4() {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="heart4-container" tabIndex={0}>
      <KeyboardControls
        map={[
          { name: 'zoom', keys: ['ArrowUp'] },
          { name: 'rotate', keys: ['ArrowRight'] },
        ]}
      >
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
          gl={{ antialias: true }}
          className={`heart4-canvas ${showOverlay ? 'no-events' : ''}`}
        >
          <ambientLight intensity={0.6} />
          <DynamicLight disabled={showOverlay} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />
          <ShadowPlane />
          <HeartModel4
            scale={0.5}
            position={[0, 0, 0]}
            onClick={() => alert('Este es el modelo 4')}
            onPointerEnter={() => console.log('Hover en Heart4')}
          />
        </Canvas>
      </KeyboardControls>

      <div className="description-wrapper">
        <div className="description-panel">
          <div className="text-2d-overlay title">Modelo Cardíaco 4</div>
          <p>
            Esta vista muestra un modelo avanzado del corazón en estado post-quirúrgico o con intervención. Aquí puedes observar detalles específicos de tratamiento o evolución.
          </p>

          <div className="button-group">
            <button onClick={() => setShowOverlay(true)}>Ver información</button>
            <button onClick={() => navigate('/models/solutions')}>Regresar</button>
          </div>
        </div>

        {showOverlay && (
          <div className="overlay-screen" onClick={() => setShowOverlay(false)}>
            <div className="info-panel">
              <h2>Detalles Médicos Avanzados</h2>
              <p>
                Este modelo 3D representa el corazón tras un procedimiento médico exitoso. Observa cómo ha mejorado la irrigación y la funcionalidad gracias al tratamiento adecuado.
              </p>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Heart4;
