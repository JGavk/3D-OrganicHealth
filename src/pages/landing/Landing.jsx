/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Landing.css';

const Landing = () => {
  const threeJsContainer = useRef(null);
  const heartModel = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      threeJsContainer.current.clientWidth / threeJsContainer.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      threeJsContainer.current.clientWidth,
      threeJsContainer.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);            
    threeJsContainer.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 5, 3);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      '/models/healthyHeart.glb',
      (gltf) => {
        heartModel.current = gltf.scene;
        heartModel.current.position.y = -1;
        heartModel.current.scale.set(0.02 , 0.02 , 0.02); 
        scene.add(gltf.scene);

        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
      }
    );

    const control = new OrbitControls(camera, renderer.domElement);
    control.enableDamping = true;
    control.dampingFactor = 0.05;
    control.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      if (heartModel.current) {
        heartModel.current.rotation.y += 0.009;
      }
      control.update();
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
      if (threeJsContainer.current && renderer.domElement) {
        threeJsContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

   return (
    <>
      <div id="inicio" className='landing-container'>
        <div className='text-content-section'>
          <h1>Bievenido a Heart Wise</h1>
          <p className='subtitle'>
            Descubre el fascinante mundo del corazón con nuestra plataforma interactiva, te ofrecemos información sobre las enfermedades cardíacas más comunes, complementada con modelos inmersivos en 3D para que explores cada detalle del órgano vital.
          </p>
          <div className='feature-item'>
            <h3>Tu salud cardíaca en 3D a alcance de un CLIC</h3>
          </div>
          <div className='button-container'>
            <button className='cta-button' onClick={() => scrollToSection('enfermedades')}>
              DESCUBRE MÁS
            </button>
          </div>
        </div>
        <div className='threejs-section' ref={threeJsContainer} />
      </div>

      {/* Sección de enfermedades */}
      <section id='enfermedades' className='enfermedades-section'>
        <p className='subtitle'>
            Enfermedades cardíacas más comunes
          </p>
        <div className='carousel'>
          {[
            { name: 'Estenosis aórtica', img: '/public/images/aaa.jpg' },
            { name: 'Insuficiencia cardíaca', img: '/public/images/bbb.jpg' },
            { name: 'Cardiopatía isquémica', img: '/public/images/ccc.jpg' },
            { name: 'Infarto agudo del miocardio', img: '/public/images/ddd.jpg' }
          ].map((enfermedad) => (
            <div className='carousel-item' key={enfermedad.name}>
              <img src={enfermedad.img} alt={enfermedad.name} />
              <p>{enfermedad.name}</p>
            </div>
          ))}
        </div>
        <button className='cta-button' style={{ marginTop: '2rem' }} onClick={() => scrollToSection('quiz')}>
          PONTE A PRUEBA
        </button>
      </section>

      {/* Sección de quiz */}
      <section id="quiz" className="quiz-section">
        <p className="subtitle">
            ¡Pon a prueba tus conocimientos!
        </p>
        <div className='carouselq'>
          {[
            { name: 'Quiz interactivo', img: '/public/images/quiz.gif' },
          ].map((quiz) => (
            <div className='carousel-item' key={quiz.name}>
              <img src={quiz.img} alt={quiz.name} />
              <p>{quiz.name}</p>
            </div>
          ))}
        </div>
        <button className="cta-button" style={{ marginTop: '2rem' }} onClick={() => scrollToSection('grupo')}>
            CONTÁCTANOS
        </button>
        </section>

        {/* Sección de sobre nosotros */}
      <section id='grupo' className='grupo-section'>
        <p className='subtitle'>
            Somos el grupo 7
          </p>
        <div className='carouselg'>
          {[
            { name: 'Juan Pablo Puerta Gaviria', img: '/public/images/aaa.jpg' },
            { name: 'Cristhian Felipe Ramirez Marulanda', img: '/public/images/bbb.jpg' },
            { name: 'Jenifer Ortiz Torres', img: '/public/images/jot.jpg' },
            { name: 'Xavier Andreu Lopez Robledo', img: '/public/images/ddd.jpg' }
          ].map((grupo) => (
            <div className='carouselg-item' key={grupo.name}>
              <img src={grupo.img} alt={grupo.name} />
              <p>{grupo.name}</p>
            </div>
          ))}
        </div>
        <button className="cta-button" style={{ marginTop: '2rem' }} onClick={() => scrollToSection('inicio')}>
            REINICIAR RECORRIDO
        </button>
        </section>
    </>
  );
}

export default Landing;