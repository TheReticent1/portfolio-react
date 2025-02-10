import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return <>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-pages">
                    <h3>Pages</h3>
                    <div className='footer-links'>
                        <Link to={"/"} >Home</Link>
                        <Link to={"/about"}>About Me</Link>
                        <Link to={"/"}>Contacts</Link>
                    </div>
                </div>
                <div className="footer-pages">
                    <h3>Work</h3>
                    <div className="footer-links">
                        <Link to={"/"} >Work 1</Link>
                        <Link to={"/"}>Work 2</Link>
                        <Link to={"/"}>Work 3</Link>
                    </div>
                </div>
                <div className="footer-pages">
                    <h3>Connect</h3>
                    <div className="footer-links">
                        <a href='https://www.linkedin.com/in' target='newtab'><FontAwesomeIcon icon={faLinkedin} /> Linked In</a>
                        <a href='https://github.com/' target='newtab'><FontAwesomeIcon icon={faGithub} /> Github</a>
                        <a href='https://x.com' target='newtab'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='https://wa.me/918830374665' target='newtab'><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}