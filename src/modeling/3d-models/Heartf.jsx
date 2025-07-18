import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Heartf = (props) => {
  const heartFRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    'models/fragmented_Heart.glb'
  );
  const { actions } = useAnimations(animations, heartFRef);

  
  
  useEffect(() => {
    if (!heartFRef.current) return;
    actions.Beating_0.play();
    actions.Beating_1.play();
    actions.Beating_2.play();
    actions.Beating_3.play();
    actions.Beating_4.play();
    actions.Beating_5.play();
    
    
    heartFRef.current.traverse((child) => {
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
  }, [heartFRef, actions]);

    return (
    <group ref={heartFRef} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="heart_0"
          castShadow
          receiveShadow
          geometry={nodes.heart_0.geometry}
          material={materials.VentriclesM}
          morphTargetDictionary={nodes.heart_0.morphTargetDictionary}
          morphTargetInfluences={nodes.heart_0.morphTargetInfluences}
        />
        <mesh
          name="heart_1"
          castShadow
          receiveShadow
          geometry={nodes.heart_1.geometry}
          material={materials.L_AtriumM}
          morphTargetDictionary={nodes.heart_1.morphTargetDictionary}
          morphTargetInfluences={nodes.heart_1.morphTargetInfluences}
        />
        <mesh
          name="heart_2"
          castShadow
          receiveShadow
          geometry={nodes.heart_2.geometry}
          material={materials.R_AtriumM}
          morphTargetDictionary={nodes.heart_2.morphTargetDictionary}
          morphTargetInfluences={nodes.heart_2.morphTargetInfluences}
        />
        <mesh
          name="heart_3"
          castShadow
          receiveShadow
          geometry={nodes.heart_3.geometry}
          material={materials.AortaM}
          morphTargetDictionary={nodes.heart_3.morphTargetDictionary}
          morphTargetInfluences={nodes.heart_3.morphTargetInfluences}
        />
        <mesh
          name="heart_4"
          castShadow
          receiveShadow
          geometry={nodes.heart_4.geometry}
          material={materials.ArteryM}
          morphTargetDictionary={nodes.heart_4.morphTargetDictionary}
          morphTargetInfluences={nodes.heart_4.morphTargetInfluences}
        />
        <mesh
          name="heart_5"
          castShadow
          receiveShadow
          geometry={nodes.heart_5.geometry}
          material={materials.VeinsM}
          morphTargetDictionary={nodes.heart_5.morphTargetDictionary}
          morphTargetInfluences={nodes.heart_5.morphTargetInfluences}
        />
      </group>
    </group>
  )
}
export default Heartf;

useGLTF.preload('models/fragmented_Heart.glb');