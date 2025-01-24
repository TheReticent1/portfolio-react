import { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })); //8:31PM

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
        }, 1000);
        return () => clearInterval(interval); //component destroy
    }, []);
    return<>
    <div className="navbar-container">
        <div className="navbar">
            <div className="branding">
                Code Parth
            </div>
            <div className="nav-items">
                <ul>
                    <li>CP</li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Me</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Contact</Link>
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