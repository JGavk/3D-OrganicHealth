import { Outlet, useLocation } from 'react-router';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import HeartModel from '../../modeling/3d-models/HeartModel';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './HeartIssue.css'; 

function HeartIssue() {
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
          <ShadowPlane/>
          <HeartModel scale={1} position={[0, 0, 0]} />
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
            Estenosis Aórtica
          </Text>
        </Canvas>
        
        <div className="description-panel">
          <h2>¿Qué es?</h2>
          <p>Es una enfermedad cardíaca que estrecha la válvula aórtica, dificultando el flujo de sangre desde el ventrículo izquierdo hacia la aorta. Esto hace que el corazón tenga que trabajar más para bombear sangre.</p>
        </div>
        
        <Outlet />
      </div>
    );
}

export default HeartIssue;