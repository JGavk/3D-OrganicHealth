import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

function FixedText({ children, position = [0, 1.5, 0] }) { 
  const textRef = useRef();
  const initialPosition = useRef(new THREE.Vector3(...position));
  
  useFrame(({ camera }) => {
    if (!textRef.current) return;
    
    textRef.current.quaternion.copy(camera.quaternion);
    textRef.current.position.copy(initialPosition.current);
    const dist = camera.position.distanceTo(textRef.current.position);
    textRef.current.scale.setScalar(Math.min(dist * 0.15, 1.5));  
  });

  return (
    <Text
      ref={textRef}
      position={position}
      color="white"
      fontSize={0.5}
      anchorX="center"
      anchorY="middle"
      outlineColor="#000000"
      outlineWidth={0.02}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
    >
      {children}
    </Text>
  );
}
export default FixedText;