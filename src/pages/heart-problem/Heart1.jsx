import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import HeartModel1 from '../../modeling/3d-models/HeartModel1';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Heart1.css';

function Heart1() {
  return (
    <div className="heart-issue-container" tabIndex={0}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="heart-issue-canvas"
      >
        <ambientLight intensity={0.7} />
        <DynamicLight />
        <ShadowPlane />
        <HeartModel1 scale={0.5} position={[0, 0, 0]} />

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

        <OrbitControls enableDamping dampingFactor={0.05} />
      </Canvas>

      <div className="description-panel">
        <h2>¿Qué es?</h2>
        <p>
          El infarto agudo de miocardio (IAM), también conocido como ataque cardíaco, ocurre cuando el flujo
          de sangre al músculo cardíaco se bloquea, causando daño o muerte de las células del corazón.
        </p>
      </div>
    </div>
  );
}

export default Heart1;
