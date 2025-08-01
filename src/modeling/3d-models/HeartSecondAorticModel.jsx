import {useEffect, useRef, useState} from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

function HeartSecondAorticModel (props) {
    const group = useRef();
    const { scene } = useGLTF('./models/stenosisOperationHeart.glb');
    const audioRef = useRef();
    const listenerRef = useRef();
    const { camera } = useThree();
    const [soundEnabled, setSoundEnabled] = useState(true);

      useEffect(() => {
        const listener = new THREE.AudioListener();
        camera.add(listener);
        listenerRef.current = listener;
    
        const sound = new THREE.PositionalAudio(listener);
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load('/sounds/zzzcut.mp3', (buffer) => {
          sound.setBuffer(buffer);
          sound.setRefDistance(1);
          sound.setLoop(false);
          sound.setVolume(5);
        });
    
        audioRef.current = sound;
        group.current?.add(sound);
    
        return () => {
          camera.remove(listener);
          sound.disconnect();
        };
      }, [camera]);

      const handleClick = () => {
    if (audioRef.current && !audioRef.current.isPlaying) {
      audioRef.current.play();
    }
    };
    
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
    return <group ref={group} onClick={handleClick} {...props} />;
}
useGLTF.preload('./models/stenosisOperationHeart.glb');
export default HeartSecondAorticModel;