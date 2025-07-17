import {useRef, useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function StenosisSymptoms (props) {
    const group = useRef();
    const { scene } = useGLTF('./models/SymHeart.glb');
    
    useEffect(() =>{
        if(!group.current) return;
        while (group.current.children.length){
            group.current.remove(group.current.children[0]);
        }
    
    scene.traverse(child => {
        if(child.isMesh){
            child.castShadow = true;
            child.receiveShadow = true;
            child.material = new THREE.MeshStandardMaterial({
                ...child.material,
                roughness: 0.2,
                metalness: 0.3
            });
        }
    });
       
    group.current.add(scene.clone());
    return () => {
        if(group.current){
            scene.traverse(child => {
                if(child.isMesh){
                    child.material.dispose();
                }
            });
        }
    };
    }, [scene]);
    return <group ref={group} {...props} />;
}
useGLTF.preload('./models/SymHeart.glb');
export default StenosisSymptoms;