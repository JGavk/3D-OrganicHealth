import './AboutUs.css';
import { Outlet } from 'react-router';


function AboutUs() {
    return (
        <div id='grupo' className='grupo-section'>

            <p className='subtitlee' >
                    Equipo de desarrollo
                </p>
            <div className='carouselg'>
                {[
                    { name: 'Juan Pablo Puerta Gaviria', img: '/images/yo.jpg' },
                    { name: 'Cristhian Felipe Ramirez Marulanda', img: '/images/foto.png' },
                    { name: 'Jenifer Ortiz Torres', img: '/images/jot.jpg' },
                    { name: 'Xavier Andreu Lopez Robledo', img: '/images/xalr.jpg' }
                ].map((grupo) => (
                    <div className='carouselg-item' key={grupo.name}>
                        <img src={grupo.img} alt={grupo.name} />
                        <p>{grupo.name}</p>
                    </div>
                ))}
            </div>

            <p className="prop-text">
                Heart Wise tiene como propósito fortalecer las habilidades del equipo de desarrollo en programación web, modelado 3D e integración de tecnologías interactivas aplicadas al ámbito educativo. Además, permite aplicar conocimientos en diseño de experiencia de usuario, lógica de interacción, gestión de versiones, despliegue web y trabajo colaborativo, promoviendo un aprendizaje práctico, autónomo e interdisciplinario
            </p>
        </div>
    );
}

export default AboutUs;