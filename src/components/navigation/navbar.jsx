import { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
        }, 1000);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50 ? true : false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return<>
    <div className="navbar-container">
        <div className={`navbar ${scrolled ? 'opacity-9' : ''}`}>
            <div className="branding">
                Code Parth
            </div>
            <div className="nav-items">
                <ul>
                    <li>CP</li>
                    <li>
                        <Link to={"/"} className={isActive("/")}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className={isActive("/about")}>About Me</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Hobby</Link>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div className="clock">
                {time}
            </div>
        </div>
    </div>
    </>
}

export default NavBar;