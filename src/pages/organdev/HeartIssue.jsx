import { Outlet } from 'react-router';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';
import FixedText from '../../modeling/lights/FixedText';
import HeartModel from '../../modeling/3d-models/HeartModel';
import HeartSecondAorticModel from '../../modeling/3d-models/HeartSecondAorticModel';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './HeartIssue.css'; 

function HeartIssue() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="heart-issue-container">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="heart-issue-canvas"
      >
        <ambientLight intensity={0.7} />
        <pointLight 
          position={[3, 5, 2]} 
          color="#88aaff"
          intensity={1.5} 
          distance={50}
          decay={1}
          castShadow
        />
        <DynamicLight /> 
        <ShadowPlane/>
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <HeartModel scale={1} position={[0, 0, 0]} />
        <FixedText>Estenosis Aórtica</FixedText>
      </Canvas>
      
      <div className="description-panel">
        <h2>¿Qué es?</h2>
        <p>
          Es una enfermedad cardíaca que estrecha la válvula aórtica,
          dificultando el flujo de sangre desde el ventrículo izquierdo hacia la aorta. 
          Esto hace que el corazón tenga que trabajar más para bombear sangre.
        </p>
        <button onClick={() => setShowOverlay(true)}>
          ¿Quieres conocer tratamientos?
        </button>
      </div>
      
      {showOverlay && (
        <div className="overlay-screen">

          <div className="overlay-content">
                                                <button 
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowOverlay(false);
              }}> × </button>
            
            <h2>Operación y Tratamientos</h2>
            
            <div className="overlay-canvas-container">
              <Canvas
                      shadows
                      camera={{ position: [0, 2, 5], fov: 50 }}
                      gl={{ antialias: true }}
                      className="heart-issue-canvas">
                  <ambientLight intensity={0.5} />
                  <ShadowPlane/>
                  <Stars radius={100} depth={50} count={5000} factor={4} fade />
                  <DynamicLight />
                  <pointLight 
                    position={[3, 5, 2]} 
                    color="#88aaff"
                    intensity={1.5} 
                    distance={50}
                    decay={1}
                    castShadow
                  />
                <HeartSecondAorticModel scale={1} position={[0, 0, 0]} />
              </Canvas>
            </div>
            
            <div className="instruction-panel">
              <p>Gira el modelo para ver la válvula afectada</p>
              <p>Reemplazo Valvular Aórtico (RVA) convencional: Reemplazar la válvula aórtica estrechada por una nueva válvula que permita
                 el flujo normal de sangre desde el ventrículo izquierdo hacia la aorta.</p>

            </div>

          </div>
        </div>
      )}
      
      <Outlet />
    </div>
  );
}

export default HeartIssue;