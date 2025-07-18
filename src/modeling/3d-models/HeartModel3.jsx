import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

function HeartModel3(props) {
  const group = useRef();
  const { scene } = useGLTF('./models/Heart3.glb');

  useEffect(() => {
    if (!group.current) return;

    while (group.current.children.length > 0) {
      group.current.remove(group.current.children[0]);
    }

    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;
      }
    });

    group.current.add(scene.clone());

    return () => {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.dispose();
        }
      });
    };
  }, [scene]);

  return <group ref={group} {...props} />;
}

useGLTF.preload('./models/Heart3.glb');
export default HeartModel3;