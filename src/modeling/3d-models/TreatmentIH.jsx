import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function TreatmentDiseaseModel(props) {
  const group = useRef();
  const container1 = useRef();
  const container2 = useRef();
  const { scene: scene1 } = useGLTF('/models/conventionalTreatment.glb');
  const { scene: scene2 } = useGLTF('/models/alternativeTreatment.glb');
  const time = useRef(0);

  // Cargar modelo convencional
  useEffect(() => {
    if (!container1.current) return;

    while (container1.current.children.length) {
      container1.current.remove(container1.current.children[0]);
    }

    const clone = scene1.clone();
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
    clone.position.x = -1.5; // más cerca del centro
    clone.scale.set(2.5, 2.5, 2.5); 

    container1.current.add(clone);
  }, [scene1]);

  // Cargar modelo alternativo
  useEffect(() => {
    if (!container2.current) return;

    while (container2.current.children.length) {
      container2.current.remove(container2.current.children[0]);
    }

    const clone = scene2.clone();
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
    clone.position.x = 1.5; // más cerca del centro
    clone.scale.set(2.5, 2.5, 2.5); 

    container2.current.add(clone);
  }, [scene2]);

  // Animación: solo flotación leve
  useFrame((_, delta) => {
    if (!group.current) return;
    time.current += delta;
    group.current.position.y = Math.sin(time.current * 1.5) * 0.05;
  });

  return (
    <group
      ref={group}
      scale={[3, 3, 3]}
      position={[0, 0, 0]} // puedes acercar con z negativo, como [0, 0, -1]
      {...props}
    >
      <group ref={container1} />
      <group ref={container2} />
    </group>
  );
}

useGLTF.preload('/models/conventionalTreatment.glb');
useGLTF.preload('/models/alternativeTreatment.glb');

export default TreatmentDiseaseModel;