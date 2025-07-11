import { Outlet, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Stars, KeyboardControls } from '@react-three/drei';
import HeartModel1 from '../../modeling/3d-models/HeartModel1';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Heart1.css';

function Heart1() {
  const navigate = useNavigate();

  return (
    <div className="heart1-container" tabIndex={0}>
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
          className="heart1-canvas"
        >
          <ambientLight intensity={0.5} />
          <DynamicLight />
          <ShadowPlane />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />

          <HeartModel1
            scale={0.5}
            position={[0, 0, 0]}
            onClick={() => alert('¡Hiciste clic en el corazón!')}
          />

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
            Infarto Agudo del Miocardio
          </Text>

          <OrbitControls />
        </Canvas>
      </KeyboardControls>

      <div className="description-wrapper">
        <div className="description-panel">
          <h2>¿Qué es?</h2>
          <p>
            El infarto agudo del miocardio (IAM), comúnmente conocido como ataque al corazón,
            es una condición médica crítica que ocurre cuando el flujo sanguíneo a una parte
            del corazón se interrumpe repentinamente, lo que causa daño en el músculo cardíaco.
            Esta falta de oxígeno puede ocurrir debido a la obstrucción de una arteria coronaria
            por un coágulo sanguíneo, lo que requiere atención médica urgente.
          </p>
          <button onClick={() => navigate('/models/sintomas')}>
            Ver síntomas
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Heart1;
