import './Header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-div">
                <button onClick={() => navigate('/')} 
                        className="logo-link"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <img src="/images/logo2.png" width="40" height="35" className="h-8" alt="Heart Wise Logo" />
                        <span className='business-name'>HEART WISE</span>
                    </button>
                </div>
                <div className='nav-right'>
                <div className="dropdown-container">
            <button 
              className='nav-button dropdown-toggle'
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              EXPERIENCIA 3D
            </button>
            
            {isDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="dropdown-item"> CORAZON </button>
                <button className="dropdown-item" onClick={() => navigate('/problem')}> PROBLEMAS </button>
                <button className="dropdown-item" onClick={() => navigate('/heart-issue')}>NaN</button>
              </div>
            )}
          </div>
                    <button className='nav-button'> QUIZ </button>
                    <button className='nav-button'> GRUPO </button>
                    <button className='nav-button'> INICIO </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;