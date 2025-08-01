/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

function IschemicHeartModel() {
  const group = useRef();
  const { scene } = useGLTF('/models/ischemicHeart.glb');
  const time = useRef(0);
  const [heartbeatSpeed, setHeartbeatSpeed] = useState(4.7);
  const audioRef = useRef();
  const listenerRef = useRef();
  const { camera } = useThree();
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Cargar y configurar audio 3D
  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);
    listenerRef.current = listener;

    const sound = new THREE.PositionalAudio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('/sounds/heartBeat.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setRefDistance(1);
      sound.setLoop(false);
      sound.setVolume(7);
    });

    audioRef.current = sound;
    group.current?.add(sound);

    return () => {
      camera.remove(listener);
      sound.disconnect();
    };
  }, [camera]);

  // Controlar el sonido en cada beat
  const lastBeatTime = useRef(0);
  useFrame((state, delta) => {
    if (!group.current) return;
    time.current += delta;
    const scale = 1 + 0.05 * Math.sin(time.current * heartbeatSpeed);
    group.current.scale.set(scale, scale, scale);

    const interval = (2 * Math.PI) / heartbeatSpeed;
    if (soundEnabled && time.current - lastBeatTime.current >= interval) {
      lastBeatTime.current = time.current;
      if (audioRef.current?.isPlaying) {
        audioRef.current.stop();
      }
      audioRef.current?.play();
    }
  });

  // Manejar teclas T y B para cambiar el ritmo
  useEffect(() => {
    const speeds = { T: 7.3, B: 3.3 };
    const handleKeyDown = (e) => {
      const speed = speeds[e.key.toUpperCase()];
      if (speed) setHeartbeatSpeed(speed);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Manejar clic para activar/desactivar el sonido
  const handleClick = () => {
    setSoundEnabled((prev) => {
      const newState = !prev;
      if (!newState && audioRef.current?.isPlaying) {
        audioRef.current.stop();
      }
      return newState;
    });
  };

  // Preparar el modelo
  useEffect(() => {
    if (!group.current) return;
    while (group.current.children.length) {
      group.current.remove(group.current.children[0]);
    }

    scene.traverse((child) => {
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

    group.current.add(scene.clone());

    return () => {
      if (group.current) {
        scene.traverse((child) => {
          if (child.isMesh) {
            child.material.dispose();
          }
        });
      }
    };
  }, [scene]);

  return (
    <>
      <group ref={group} onClick={handleClick} />
    </>
  );
}

useGLTF.preload('/models/ischemicHeart.glb');

export default IschemicHeartModel;