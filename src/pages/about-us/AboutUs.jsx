import './AboutUs.css';
import { Outlet } from 'react-router';


function AboutUs () {
    return (<div id='grupo' className='grupo-section'>
        <p className='subtitle'>
            Equipo de desarrollo
            </p>
        <div className='carouselg'>
            {[
            { name: 'Juan Pablo Puerta Gaviria', img: '/images/aaa.jpg' },
            { name: 'Cristhian Felipe Ramirez Marulanda', img: '/images/bbb.jpg' },
            { name: 'Jenifer Ortiz Torres', img: '/images/jot.jpg' },
            { name: 'Xavier Andreu Lopez Robledo', img: '/images/xalr.jpg' }
            ].map((grupo) => (
            <div className='carouselg-item' key={grupo.name}>
                <img src={grupo.img} alt={grupo.name} />
                <p>{grupo.name}</p>
            </div>
            ))}
        </div>
    </div>
);}

export default AboutUs;