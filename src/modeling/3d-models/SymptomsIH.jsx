import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function SymptomsDiseaseModel(props) {
  const group = useRef();            
  const modelContainer = useRef();  
  const { scene } = useGLTF('/models/symptomsDisease.glb');
  const time = useRef(0);
  const direction = useRef(1);

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

  useEffect(() => {
    if (group.current) {
      group.current.position.x = -2;                  
      group.current.rotation.y = Math.PI / 2;       
    }
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;

    time.current += delta;

    group.current.position.x += delta * 0.15 * direction.current;

    const maxX = 2;
    const minX = -2;

    if (group.current.position.x >= maxX && direction.current === 1) {
      direction.current = -1;
      group.current.rotation.y = -Math.PI / 2; 
    }

    if (group.current.position.x <= minX && direction.current === -1) {
      direction.current = 1;
      group.current.rotation.y = Math.PI / 2; 
    }

    
    const limp = Math.sin(time.current * 3);
    group.current.position.y = 0.01 * Math.abs(limp);
    group.current.rotation.z = 0.07 * limp;
    group.current.rotation.x = -0.1 + 0.02 * limp;

    group.current.position.z = 0;
  });

  return (
    <group ref={group} scale={[1.2, 1.2, 1.2]} {...props}>
      <group ref={modelContainer} />
    </group>
  );
}

useGLTF.preload('/models/symptomsDisease.glb');

export default SymptomsDiseaseModel;