import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import useControls from './useControls';

function DynamicLight({ disabled = false,  focused = true }) {
    const lightRef = useRef();
    const { camera } = useThree();
    const controls = useControls();
    
    
    const orbitDistance = useRef(5); 
    const orbitAngle = useRef(Math.PI / 4); 
    const orbitHeight = useRef(2); 
    
  
    const orbitSpeed = 0.02; 
    const heightSpeed = 0.05; 
    const minHeight = 0.5; 
    const maxHeight = 4; 

    useFrame(() => {
        if (disabled || !focused ||!lightRef.current) return;

        // Q for an up diagonally movement 
        if (controls.current.forward) { 
            orbitHeight.current = THREE.MathUtils.clamp(
                orbitHeight.current + heightSpeed,
                minHeight,
                maxHeight
            );
            orbitAngle.current -= orbitSpeed;
        }
        // E for a down diagonally movement
        if (controls.current.backward) { 
            orbitHeight.current = THREE.MathUtils.clamp(
                orbitHeight.current - heightSpeed,
                minHeight,
                maxHeight
            );
            orbitAngle.current += orbitSpeed;
        }
        // A for a left movement
        if (controls.current.left) { 
            orbitAngle.current += orbitSpeed;
        }

        // D for a right movement
        if (controls.current.right) { 
            orbitAngle.current -= orbitSpeed;
        }
        //W for an UP movement
        if (controls.current.up) { 
            orbitHeight.current = THREE.MathUtils.clamp(
                orbitHeight.current + heightSpeed,
                minHeight,
                maxHeight
            );
        }
        //S for a Down movement
        if (controls.current.down) { 
            orbitHeight.current = THREE.MathUtils.clamp(
                orbitHeight.current - heightSpeed,
                minHeight,
                maxHeight
            );
        }

        if (controls.current.isRotating) {
            orbitAngle.current -= controls.current.rotationDelta.x * 0.005;
            orbitHeight.current = THREE.MathUtils.clamp(
                orbitHeight.current - controls.current.rotationDelta.y * 0.01,
                minHeight,
                maxHeight
            );
            controls.current.rotationDelta = { x: 0, y: 0 };
        }

        const x = orbitDistance.current * Math.cos(orbitAngle.current);
        const z = orbitDistance.current * Math.sin(orbitAngle.current);
        camera.position.set(x, orbitHeight.current, z);
        camera.lookAt(0, 0, 0);

        lightRef.current.position.copy(camera.position).add(new THREE.Vector3(1, 1, -1));
        lightRef.current.lookAt(0, 0, 0);
    });

    return (
        <directionalLight
            ref={lightRef}
            intensity={2}
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-camera-far={50}
            shadow-bias={-0.0001}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
    );
}

export default DynamicLight;