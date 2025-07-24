import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Heartr = (props) => {
  const heartRRef = useRef();
  const { nodes, materials } = useGLTF(
    'models/heartRecamera.glb'
  );
      
  useEffect(() => {
    if (heartRRef.current) {
      heartRRef.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = new THREE.MeshStandardMaterial({
            ...child.material,
            roughness: -0.8,
            metalness: 0.9,
          });
        }
      });
    }
  }, [heartRRef]);

    return (
    <group ref={heartRRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heartRecamera_1.geometry}
        material={materials.heartMaterial1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heartRecamera_2.geometry}
        material={materials.heartMaterial1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heartRecamera_3.geometry}
        material={materials.heartMaterial1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heartRecamera_4.geometry}
        material={materials.heartMaterial1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heartRecamera_5.geometry}
        material={materials.heartMaterial1}
      />
    </group>
  )
}
export default Heartr;

useGLTF.preload('models/heartRecamera.glb');