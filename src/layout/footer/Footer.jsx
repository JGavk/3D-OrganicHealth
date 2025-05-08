import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Heart Wise. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;