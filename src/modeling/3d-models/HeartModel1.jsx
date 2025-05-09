import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function HeartModel1(props) {
  const group = useRef();
  // Cambié el nombre del modelo a tu Heart.glb
  const { scene } = useGLTF('./models/Heart.glb');

  useEffect(() => {
    if (!group.current) return;
    while (group.current.children.length) {
      group.current.remove(group.current.children[0]);
    }

    // Configuración para sombras y material
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = new THREE.MeshStandardMaterial({
          ...child.material,
          roughness: 0.1,
          metalness: 0.1
        });
      }
    });

    group.current.add(scene.clone()); 

    return () => {
      if (group.current) {
        scene.traverse(child => {
          if (child.isMesh) {
            child.material.dispose();
          }
        });
      }
    };
  }, [scene]);

  return <group ref={group} {...props} />;
}

// Pre-cargamos el modelo de Heart.glb para optimizar la carga
useGLTF.preload('./models/Heart.glb');

export default HeartModel1;
