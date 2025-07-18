import { Outlet, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Stars, KeyboardControls } from '@react-three/drei';
import HeartModel2 from '../../modeling/3d-models/HeartModel2';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Heart2.css';

function Heart2() {
  const navigate = useNavigate();

  return (
    <div className="heart2-container" tabIndex={0}>
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
          className="heart2-canvas"
        >
          <ambientLight intensity={0.5} />
          <DynamicLight />
          <ShadowPlane />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />

          <HeartModel2
            scale={1}
            position={[0, 0, 0]}
            onClick={() => alert('¡Hiciste clic en los síntomas!')}
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
            Síntomas del Infarto Agudo del Miocardio
          </Text>

          <OrbitControls />
        </Canvas>
      </KeyboardControls>

      <div className="description-wrapper">
        <div className="description-panel">
          <h2>¿Cuáles son?</h2>
          <p>
            Dolor en el pecho, dificultad para respirar, náuseas, fatiga, sudoración excesiva,
            y sensación de presión o ardor. Estos síntomas pueden variar, pero son signos clave
            del infarto agudo del miocardio.
          </p>
          <button onClick={() => navigate('/models/miocard')}>
            Regresar
          </button>
          <button onClick={() => navigate('/models/solutions')}>
            Posibles soluciones
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Heart2;
