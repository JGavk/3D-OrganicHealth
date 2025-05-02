import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function HeartModel1(props) {
  const group = useRef();
  const { scene } = useGLTF('./models/Heart.glb'); // Asegúrate de que esta ruta es correcta

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

  return <group ref={group} {...props} />;
}

useGLTF.preload('./models/Heart.glb'); // Igual que arriba

export default HeartModel1;
