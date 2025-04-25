import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, useTexture} from '@react-three/drei'
import { MathUtils} from 'three';

// Loads the 3D model and adds a pulsing animation effect to simulate a heartbeat.
function AnimatedHeart () {
    const gltf = useGLTF('../models/ischemicHeart.glb')
    const heartRef = useRef()
    const timeRef = useRef(0);

    useEffect(() => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true
          }
        })
      }, [gltf])
    
      useFrame((_, delta) => {
        timeRef.current += delta;
        const scale = 1 + Math.sin(timeRef.current * 3) * 0.05;
        heartRef.current.scale.set(scale, scale, scale);
      });

    return <primitive ref={heartRef} object={gltf.scene} position={[0, 0.5, 0]} />
}

// Adds a realistic floor with multiple PBR textures
function Floor () {
    const PATH = useMemo(() => "textures/floor/herringbone-flooring_", []);

    const floorTexture = useTexture({
        map: PATH + "albedo.png",
        aoMap: PATH + "ao.png",
        displacementMap: PATH + "height.png",
        metalnessMap: PATH + "metallic.png",
        normalMap: PATH + "normal-ogl.png",
        roughnessMap: PATH + "roughness.png"
    });

    return (
        <mesh rotation-x={-Math.PI/2} position-y={-1} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial {...floorTexture}/>
        </mesh>
    );
};

//Adds lighting on the heart model.
function SpotLightRef () { 
    const spotLightRef = useRef();

    return (
        <spotLight
            ref = {spotLightRef}
            color = {"yellow"} 
            position = {[1, 2, 4]}
            distance = {40}
            intensity = {50}
            angle = {Math.PI / 14}
            penumbra = {0.5}
        />
    );
}

//Adds a directional light that moves slightly over time for dynamic lighting.
function DirectionalLightRef () {
    const directionalLightRef = useRef();
    
    useFrame((state) => {
        const elapsedTime = state.clock.getElapsedTime();
        directionalLightRef.current.position.x = MathUtils.lerp(-1, 1, Math.cos(elapsedTime));
    })

    return(
        <directionalLight
        ref={directionalLightRef} 
        color={"white"} 
        position={[2, 5, 2]} 
        intensity={2}
        castShadow={true}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
    />
    )
}

// Main 3D scene setup with Canvas and all components.
export default function IschemicHeart() {
  return (
    <>
      <h1 style={{color: 'Red', backgroundColor: 'white', textAlign: 'center' }}>Cardiopatía Isquémica</h1>
      <Canvas  
        style = {{width: '100vw', height: '100vh'}}
        shadows = {true} 
        camera = {{ position: [0, 1, 2], fov: 45 }}  
      >
        <color attach="background" args={["white"]} />
        <OrbitControls />
        <Suspense fallback={<span style={{ color: 'black' }}>Cargando modelo...</span>}>
          <AnimatedHeart />
        </Suspense>
        <Floor />
        <SpotLightRef />
        <ContactShadows 
          position = {[0, 0.5, 0]} 
          opacity = {1} 
          scale = {15} 
          blur = {2.5} 
          far = {5} />
        <DirectionalLightRef />
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" /> 
      </Canvas>
    </>
  )
}