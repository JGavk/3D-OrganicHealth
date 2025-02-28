import './Header.css';


const Header = () => {
    return (
        <header>
            <nav class="nav-bar">
                <div className="nav-div">
                    <a href="http://localhost:5173" class="">
                    <img src="/images/logo.png" width="100" height="74" class="h-8" alt="Heart Wise Logo" />
                    <span className='business-name'>Heart Wise</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;