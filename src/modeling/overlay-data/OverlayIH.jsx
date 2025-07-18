import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, SpotLight } from "@react-three/drei";
import overlayInfo from "./overDataIH";
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Overlay.css';

const OverlayIH = ({ onClose }) => {
  const [index, setIndex] = useState(0);
  const [canvasFocused, setCanvasFocused] = useState(false);
  const info = overlayInfo[index];

  return (
    <div className="overlay-screen">
      <div className="overlay-content">
        <button className="overlay-close-button" onClick={onClose}>×</button>
        <h2>{info.title}</h2>

        <div
          className="overlay-canvas-container"
          onMouseEnter={() => setCanvasFocused(true)}
          onMouseLeave={() => setCanvasFocused(false)}
        >
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <SpotLight
                position={[1,7,1]}
                distance={400}
                angle={25}
                decay={10}
                intensidad={4}
                color="#ffd37b"
                />
            <Sparkles count={100} scale={6} speed={1.5} />
            <ShadowPlane />
            <DynamicLight disabled={false} focused={canvasFocused} />
            {info.getModel()}
          </Canvas>
        </div>

        <div className="instruction-panel">
          <p>Gira el modelo con WASD o manteniendo click en el</p>
        </div>

        <div className="info-panel">
          <p>{info.description}</p>
        </div>

        <div className="overlay-indicators">
          {overlayInfo.map((_, i) => (
            <button
              key={i}
              className={`indicator-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir al info${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlayIH;