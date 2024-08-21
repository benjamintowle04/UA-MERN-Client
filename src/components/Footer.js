
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container footer-content">
                <span className="text-muted text-start d-block">
                    Website powered by <a href="https://getbootstrap.com/">Bootstrap</a>
                </span>
            </div>
            <div>
                <p className="float-end d-block text-start" style={{marginRight: '40px'}}>Developed by Benjamin Towle</p>
            </div>
        </footer>
    );
};

export default Footer;