import { Outlet, useLocation } from 'react-router';
import './HeartIssue.css'
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//This will hold my first heart behaviour with the webgl
const HeartIssue = () => {
    const threeJsContainer = useRef(null);
    const heartIssueModel = useRef(); 

    useEffect (() =>{
        //Generating a new scene to hold the model of our heart
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(10,20,40);
        //Generating a perspective of a camera with three
        const cam = new THREE.PerspectiveCamera(
            80,
            threeJsContainer.current.clientWidth / threeJsContainer.current.clientHeight,
            0.1, 1000
        );
        //Starting position for our camera 
        cam.position.z = 5;
        //Render our Webgl with our client width and height
        const renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(
            threeJsContainer.current.clientWidth,
            threeJsContainer.current.clientHeight
        );
        //Adding child
        threeJsContainer.current.appendChild(renderer.domElement);
        //Adding ambient light to the scene
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        //Adding directional lights to the scene
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(1,1,1);
        scene.add(directionalLight);

        //LOADING MODEL FOR THIS BEHAVIOUR
        const modelLoader = new GLTFLoader();
        modelLoader.load(
            './models/stenosisAorticBehaviour.glb',
            (gltf) => {
                heartIssueModel.current = gltf.scene;
                scene.add(gltf.scene);
        
                // Center the model
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const center = box.getCenter(new THREE.Vector3());
                gltf.scene.position.sub(center);
                const size = box.getSize(new THREE.Vector3()).length();
                cam.position.z = size * 2;
                cam.near = size / 100;
                cam.far = size * 100;
                cam.updateProjectionMatrix();
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        //Adding controls for the orbiting of the object for now the heart
        const control = new OrbitControls(cam, renderer.domElement);
        control.enableDamping = true;
        control.dampingFactor = 0.05;

        const animate = () => {
            requestAnimationFrame(animate);
            control.update(); 
            renderer.render(scene, cam);
        };
        animate();

        
        const handleResize = () =>{
            cam.aspect = 
            threeJsContainer.current.clientWidth / threeJsContainer.current.clientHeight;
            cam.updateProjectionMatrix();
            renderer.setSize(
                threeJsContainer.current.clientWidth,
                threeJsContainer.current.clientHeight
            );
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            threeJsContainer.current.removeChild(renderer.domElement);
        };
    }, []);
    //GGWP
    return (

        <div className='heart-container'>
            <div className='threejs-container' ref={threeJsContainer}/>
        </div>
    );
};

export default HeartIssue;