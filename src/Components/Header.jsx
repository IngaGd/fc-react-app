import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo/Fingers_crossed_logopos_small.png';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            <nav className={`header ${isSticky ? 'sticky' : ''} + nav-desktop`}>
                <div
                    className={`header ${
                        isSticky ? 'sticky' : ''
                    } + nav-desktop + nav-links`}
                >
                    <Link className="nav-link" to="/about-us">
                        <div className="text-box"> About us</div>
                    </Link>
                    <Link className="nav-link" to="/contact">
                        <div className="text-box"> Contacts</div>
                    </Link>
                    <Link className="nav-link" to="/fingers-crossed">
                        {isSticky ? (
                            <div className={`header sticky`}>
                                <div className="logo-box">
                                    <img
                                        className="logo"
                                        src={logo}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={`header`}>
                                <div className="text-box">
                                    <span>Home</span>
                                </div>
                            </div>
                        )}
                    </Link>
                    <Link className="nav-link" to="/shop">
                        <div className="text-box">Products</div>
                    </Link>
                    <Link className="nav-link" to="/cart">
                        <div className="text-box">Cart</div>
                    </Link>
                </div>
            </nav>
            <nav className="header__nav-mobile"></nav>
        </header>
    );
}
