
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';


const Heartb = (props) => {
  const heartBRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    'models/heartBeating.glb'
  );
  const { actions } = useAnimations(animations , heartBRef);
  useEffect(() => {
    actions?.test.play();
  }, [actions]);
  useEffect(() => {
    if (!heartBRef.current) return;
    heartBRef.current.traverse((child) => {
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
  }, [heartBRef]);

  return (
    <group ref={ heartBRef} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 1.5, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 1.5, 0, 0]}>
              <group name='RootNode0_0' scale={0.0050}>
                <group name='skeletal3_3'>
                  <group name='GLTF_created_0'>
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name='Object_30'
                      geometry={nodes.Object_30.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_30.skeleton}
                    />
                    <group name='heart2_2_correction'>
                      <group name='heart2_2' />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Heartb;

useGLTF.preload('models/heartBeating.glb');
