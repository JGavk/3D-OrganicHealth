import { Outlet, Navigate, useLocation } from 'react-router';
import './Landing.css'
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Landing = () => {
    const threeJsContainer = useRef(null);
    const heartModel = useRef(); 

    useEffect(() => {

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);
        
        const camera = new THREE.PerspectiveCamera(
            75, 
            threeJsContainer.current.clientWidth / threeJsContainer.current.clientHeight, 
            0.1, 
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(
            threeJsContainer.current.clientWidth, 
            threeJsContainer.current.clientHeight
        );
        threeJsContainer.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // HEART
        const loader = new GLTFLoader();
        loader.load(
            '/models/healthyHeart.glb',
            (gltf) => {
                heartModel.current = gltf.scene;
                scene.add(gltf.scene);
                
                
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const center = box.getCenter(new THREE.Vector3());
                gltf.scene.position.sub(center);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            }
        );


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;


        const animate = () => {
            requestAnimationFrame(animate);
            if (heartModel.current) {
                heartModel.current.rotation.y += 0.0011; 
            }
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = threeJsContainer.current.clientWidth / threeJsContainer.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(
                threeJsContainer.current.clientWidth, 
                threeJsContainer.current.clientHeight
            );
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (threeJsContainer.current && renderer?.domElement) {
              threeJsContainer.current.removeChild(renderer.domElement);
            }
          };
        }, []);

    return (
        <div className='landing-container'>
            <div className='threejs-section' ref={threeJsContainer} />
            <div className='text-content-section'>
                <h1>This is Heart Wise</h1>
                <p className='subtitle'>An interactive Cardiac Health Visualization</p>
                
                <div className='features'>
                    
                    <div className='feature-item'>
                        <h3>Educational Tool</h3>
                        <p>Learn about prevention, treatment, and heart-healthy lifestyle choices.</p>
                    </div>
                </div>
                <div className='button-container'>
                    <button className='cta-button'>Explore Your Heart</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;