import './Header.css';


const Header = () => {
    return (
        <header>
            <nav class="nav-bar">
                <div className="nav-div">
                    <a href="https://3-d-organic-health.vercel.app" class="">
                    <img src="/images/logo.png" width="100" height="74" class="h-8" alt="Heart Wise Logo" />
                    <span className='business-name'>Heart Wise</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;