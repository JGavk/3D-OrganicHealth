import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, SpotLight, Stars } from "@react-three/drei";
import overlayTreatments from "./overData";
import ShadowPlane from '../../modeling/recipient/ShadowPlane';
import DynamicLight from '../../modeling/lights/Light';
import './Overlay.css';

const Overlay = ({ onClose, allowedIds = [] }) => {
  const filteredTreatments = overlayTreatments.filter(t => allowedIds.includes(t.id));
  const [index, setIndex] = useState(0);
  const [canvasFocused, setCanvasFocused] = useState(false);
  const treatment = filteredTreatments[index];

  if (filteredTreatments.length === 0) {
    return (
      <div className="overlay-screen">
        <div className="overlay-content">
          <p>No hay modelos disponibles para mostrar.</p>
          <button className="overlay-close-button" onClick={onClose}>×</button>
        </div>
      </div>
    );
  }

  return (
    <div className="overlay-screen">
      <div className="overlay-content">
        <button className="overlay-close-button" onClick={onClose}>×</button>
        <h2>{treatment.title}</h2>

        <div
          className="overlay-canvas-container"
          onMouseEnter={() => setCanvasFocused(true)}
          onMouseLeave={() => setCanvasFocused(false)}
        >
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[3, 5, 2]} color="#88aaff" intensity={1.5} decay={1} castShadow />
            <SpotLight position={[0, 5, 2]} castShadow color="#9734afff" distance={400} fov={90} angle={20} lookAt={[0, 0, 0]} decay={1} />
            <Sparkles count={230} scale={10} speed={1.5} />
            <Stars radius={100} depth={50} count={5000} factor={4} fade />
            <ShadowPlane />
            <DynamicLight disabled={false} focused={canvasFocused} />
            {treatment.getModel()}
          </Canvas>
        </div>

        <div className="instruction-panel">
          <p>Gira el modelo con WASD o manteniendo click en el</p>
          <p>{treatment.description}</p>
        </div>

        <div className="overlay-indicators">
          {filteredTreatments.map((_, i) => (
            <button
              key={i}
              className={`indicator-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir al tratamiento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;