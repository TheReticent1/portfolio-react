import { useState, useEffect } from "react";

const NavBar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
        }, 1000);
        return () => clearInterval(interval);
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
                    <li>Home</li>
                    <li>About me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
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