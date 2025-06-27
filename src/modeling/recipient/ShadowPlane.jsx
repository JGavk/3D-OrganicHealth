import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ShadowPlane() {
    return (
          <mesh
            rotation-x={-Math.PI / 2}
            position={[0, -1.5, 0]}
            receiveShadow
          >
            <circleGeometry args={[8, 64]} />
            <meshStandardMaterial
              color="#dddddd"
              roughness={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
    )
  }
  
  export default ShadowPlane