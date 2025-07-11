import { Outlet, useLocation, useNavigate } from 'react-router';
import { Canvas } from '@react-three/fiber';
import { Billboard, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import SymptomsDiseaseModel from '../../modeling/3d-models/symptomsDiseaseModel';
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './SymptomsDisease.css';

function SymptomsDisease({ onGoBack }) {
  return (
    <div className="symptoms-disease-container" tabIndex={0}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        className="symptoms-disease-canvas"
      >
        <ambientLight intensity={0.4} />
        <DynamicLight />

        <ShadowPlane />

        <SymptomsDiseaseModel position={[0, 0, 0]} />
        
        <Billboard>follow={true} lockRotation={true}<Text
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
        </Text></Billboard>
      </Canvas>

      <div className="description-panel-s">
        <h2>Síntomas</h2>
        <p>
          1. Dolor o presión en el pecho<br />
          2. Falta de aire<br />
          3. Fatiga extrema<br />
          4. Dolor en brazos cuello o mandíbula<br />
          5. Mareos o desmayo<br />
          6. Sudoración excesiva
        </p>
        <button className="cta-button-s" onClick={onGoBack}>
        Regresar a ¿QUÉ ES?
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default SymptomsDisease;