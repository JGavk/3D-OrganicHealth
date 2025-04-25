import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-div">
                    <a href="http://localhost:5173" className="logo-link">
                        <img src="/images/logo2.png" width="50" height="35" className="h-8" alt="Heart Wise Logo" />
                        <span className='business-name'>HEART WISE</span>
                    </a>
                </div>
                <div className='nav-right'>
                <div className="dropdown-container">
            <button 
              className='nav-button dropdown-toggle'
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              INTERACTIVE EXPERIENCE
            </button>
            
            {isDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="dropdown-item">3D Anatomy</button>
                <button className="dropdown-item">Heart Issues</button>
                <button className="dropdown-item">NaN</button>
              </div>
            )}
          </div>
                    <button className='nav-button'>TEST YOURSELF</button>
                    <button className='nav-button'>THE TEAM</button>
                    <button className='nav-button'>SIGN IN</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;