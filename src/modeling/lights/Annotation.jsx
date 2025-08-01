import {  Html } from '@react-three/drei'
import { geometry } from 'maath'
import { extend ,useFrame } from '@react-three/fiber'
import { useRef, useState} from 'react';
import * as THREE from 'three';


function Annotation({ children, info = '', ...props }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Html
      {...props}
      transform
      occlude
      zIndexRange={[10, 0]}
      pointerEvents="auto"
    >
      <div
        className="annotation"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
        {showTooltip && (
          <div className="annotation-tooltip">
            {info}
          </div>
        )}
      </div>
    </Html>
  );
}

export default Annotation;