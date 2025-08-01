/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

function HeartModel4(props) {
  const group = useRef();
  const { scene } = useGLTF('/models/Heart4.glb');
  const time = useRef(0);
  const [heartbeatSpeed, setHeartbeatSpeed] = useState(4.7);
  const audioRef = useRef();
  const listenerRef = useRef();
  const { camera } = useThree();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const lastBeatTime = useRef(0);

  // Configurar audio 3D
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
      sound.setVolume(1);
    });

    audioRef.current = sound;
    group.current?.add(sound);

    return () => {
      camera.remove(listener);
      sound.disconnect();
    };
  }, [camera]);

  // Animar latido + reproducir sonido
  useFrame((_, delta) => {
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

  // Cambiar velocidad con teclas T y B
  useEffect(() => {
    const speeds = { T: 7.3, B: 3.3 };
    const handleKeyDown = (e) => {
      const speed = speeds[e.key.toUpperCase()];
      if (speed) setHeartbeatSpeed(speed);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click para activar/desactivar sonido
  const handleClick = () => {
    setSoundEnabled((prev) => {
      const newState = !prev;
      if (!newState && audioRef.current?.isPlaying) {
        audioRef.current.stop();
      }
      return newState;
    });
  };

  // Preparar modelo
  useEffect(() => {
    if (!group.current) return;

    while (group.current.children.length > 0) {
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
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.dispose();
        }
      });
    };
  }, [scene]);

  return (
    <group ref={group} {...props} onClick={handleClick} />
  );
}

useGLTF.preload('/models/Heart4.glb');

export default HeartModel4;
