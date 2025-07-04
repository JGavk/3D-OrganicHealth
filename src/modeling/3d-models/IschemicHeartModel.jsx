/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function IschemicHeartModel(props) {
  const group = useRef();
  const { scene } = useGLTF('/models/ischemicHeart.glb');
  const time = useRef(0);
  const [heartbeatSpeed, setHeartbeatSpeed] = useState(4.7);

  useEffect(() => {
    const speeds = { N: 4.7, G: 5, T: 7.3, B: 3.3 };
    const handleKeyDown = (e) => {
      const speed = speeds[e.key.toUpperCase()];
      if (speed) setHeartbeatSpeed(speed);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!group.current) return;
    while (group.current.children.length) {
      group.current.remove(group.current.children[0]);
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = new THREE.MeshStandardMaterial({
          ...child.material,
          roughness: 0.4,
          metalness: 0.2,
        });
      }
    });

    group.current.add(scene.clone());

    return () => {
      if (group.current) {
        scene.traverse((child) => {
          if (child.isMesh) {
            child.material.dispose();
          }
        });
      }
    };
  }, [scene]);

  useFrame((state, delta) => {
    if (group.current) {
      time.current += delta;
      const scale = 1 + 0.05 * Math.sin(time.current * heartbeatSpeed);
      group.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerEnter={() => props.onHoverChange?.(true)}
    onPointerLeave={() => props.onHoverChange?.(false)}
    />
  );
}

useGLTF.preload('/models/ischemicHeart.glb');

export default IschemicHeartModel;