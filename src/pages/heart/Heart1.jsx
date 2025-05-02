import { Outlet } from 'react-router';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import HeartModel1 from '../../modeling/3d-models/HeartModel1'; // Asegúrate de que la ruta sea correcta
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Heart1.css'; // Asegúrate de que la ruta sea correcta

function Heart1() {
    return (
      <div className="heart1-container" tabIndex={0}>
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
          gl={{ antialias: true }}
          className="heart1-canvas"
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
        </Canvas>
        
        <div className="description-panel">
          <h2>¿Qué es?</h2>
          <p>El infarto agudo del miocardio (IAM), comúnmente conocido como ataque al corazón, es una condición médica crítica que ocurre cuando el flujo sanguíneo a una parte del corazón se interrumpe repentinamente, lo que causa daño en el músculo cardíaco. Esta falta de oxígeno puede ocurrir debido a la obstrucción de una arteria coronaria por un coágulo sanguíneo, lo que requiere atención médica urgente.</p>
        </div>
        
        <Outlet />
      </div>
    );
}

export default Heart1;
