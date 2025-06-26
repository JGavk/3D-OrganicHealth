/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function SymptomsDiseaseModel(props) {
  const group = useRef();
  const { scene } = useGLTF('./models/symptomsDisease.glb');
  const time = useRef(0);

  useEffect(() => {
    if (!group.current) return;
    while (group.current.children.length) {
      group.current.remove(group.current.children[0]);
    }

    // Adding model and shadows StandardMaterial can make shadows
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = new THREE.MeshStandardMaterial({
          ...child.material,
          roughness: 0.4,
          metalness: 0.2
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

  useFrame((state, delta) => {
    if (group.current) {
      time.current += delta;
      const scale = 1 + 0.05 * Math.sin(time.current * 4); // 4 = frequency
      group.current.scale.set(scale, scale, scale);
    }
  });

  return <group ref={group} {...props} />;
}

useGLTF.preload('./models/symptomsDisease.glb');

export default SymptomsDiseaseModel;