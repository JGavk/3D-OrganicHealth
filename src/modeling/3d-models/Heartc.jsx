import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Heartc = (props) => {
  const heartCRef = useRef();
  const { nodes, materials } = useGLTF(
    'models/heart_Realistic.glb'
  );
      
  useEffect(() => {
    if (heartCRef.current) {
      heartCRef.current.traverse((child) => {
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
  }, [heartCRef]);

    return (
        <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AorticeSemilunarValveGEO.geometry}
        material={materials.AorticeSemilunarValveSHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeartExterorVains1GEO.geometry}
        material={materials.HeartExterorVains1SHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeartExterorVains2GEO.geometry}
        material={materials.HeartExterorVains2SHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MitralValveGEO.geometry}
        material={materials.MitralValveSHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PolySurface1.geometry}
        material={materials.HeartBaseSHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PolySurface2.geometry}
        material={materials.HeartOpeningSHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PulmonarySemilunarValveGEO.geometry}
        material={materials.PulmonarySemilunarValveSHD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TricuspidValveGEO.geometry}
        material={materials.TricuspidValveSHD}
      />
    </group>
  )
}
export default Heartc;

useGLTF.preload('models/heart_Realistic.glb');