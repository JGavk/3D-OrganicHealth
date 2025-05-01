import { Outlet, useLocation } from 'react-router';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import IschemicHeartModel from '../../modeling/3d-models/IschemicHeartModel';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './IschemicHeart.css'; 

function IschemicHeart() {
    return (
      <div className="ischemic-heart-container" tabIndex={0}>
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
          gl={{ antialias: true }}
          className="ischemic-heart-canvas"
        >
          <ambientLight intensity={0.7} />
          <DynamicLight /> 
          <ShadowPlane/>
          <spotLight
            color={"red"}
            position={[2,5,5]}
            angle={0.3}
            penumbra={0.5}
            intensity={45}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <IschemicHeartModel scale={1} position={[0, 0, 0]} />
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
        </Canvas>
        
        <div className="description-panel">
          <h2>¿Qué es?</h2>
          <p>La cardiopatía isquémica ocurre cuando las arterias coronarias se estrechan o bloquean debido a la acumulación de placas de grasa, colesterol y otras sustancias (aterosclerosis). Esto reduce o interrumpe el flujo sanguíneo al corazón, disminuyendo el suministro de oxígeno y nutrientes necesarios para su funcionamiento. Sin suficiente oxígeno, el músculo cardíaco se debilita, lo que puede causar dolor en el pecho, insuficiencia cardíaca o incluso un infarto.</p>
        </div>
        
        <Outlet />
      </div>
    );
}

export default IschemicHeart;