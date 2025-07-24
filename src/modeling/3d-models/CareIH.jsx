import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function CareDiseaseModel(props) {
  const group = useRef();            
  const modelContainer = useRef();  
  const { scene } = useGLTF('/models/preventionCare.glb');

  useEffect(() => {
    if (!modelContainer.current) return;

    while (modelContainer.current.children.length) {
      modelContainer.current.remove(modelContainer.current.children[0]);
    }

    const clone = scene.clone();

    clone.traverse((child) => {
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

    const bbox = new THREE.Box3().setFromObject(clone);
    const yOffset = bbox.min.y;
    clone.position.y = -yOffset - 1; 

    modelContainer.current.add(clone);

    return () => {
      clone.traverse((child) => {
        if (child.isMesh) child.material.dispose();
      });
    };
  }, [scene]);

  return (
    <group ref={group} scale={[1.2, 1.2, 1.2]} {...props}>
      <group ref={modelContainer} />
    </group>
  );
}

useGLTF.preload('/models/preventionCare.glb');

export default CareDiseaseModel;