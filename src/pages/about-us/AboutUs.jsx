import './AboutUs.css';
import { Outlet } from 'react-router';


function AboutUs () {
    return (<div id='grupo' className='grupo-section'>
        <p className='subtitle'>
            Equipo de desarrollo
            </p>
        <div className='carouselg'>
            {[
            { name: 'Juan Pablo Puerta Gaviria', img: '/public/images/aaa.jpg' },
            { name: 'Cristhian Felipe Ramirez Marulanda', img: '/public/images/bbb.jpg' },
            { name: 'Jenifer Ortiz Torres', img: '/public/images/jot.jpg' },
            { name: 'Xavier Andreu Lopez Robledo', img: '/public/images/xalr.jpg' }
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