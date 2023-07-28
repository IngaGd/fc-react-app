import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo/Fingers_crossed_logopos_small.png';

export default function HeaderSticky() {
    return (
        <header className={`header-sticky`}>
            <nav className={`nav-desktop`}>
                <div className={`nav-links`}>
                    <Link className="nav-link" to="/about-us">
                        <div className="text-box"> About us</div>
                    </Link>
                    <a
                        className="nav-link"
                        href="https://fingers-crossed-nail-studio.mytreatwell.lt/?fbclid=PAAaZ1c67PnrUYjey9ZzL7tUeaZ0k4f3P8zsvxOLFeZBP1QSRvGSs4y-K_rW8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-box">Prices</div>
                    </a>
                    <Link className="nav-link" to="/contact">
                        <div className="text-box"> Contacts</div>
                    </Link>
                    <Link className="nav-link" to="/fc-react-app">
                        <div className="logo-box">
                            <img className="logo" src={logo} alt="Logo" />
                        </div>
                    </Link>
                    <Link className="nav-link" to="/shop">
                        <div className="text-box">Products</div>
                    </Link>
                    <Link className="nav-link" to="/cart">
                        <div className="text-box">Cart</div>
                    </Link>
                    <a
                        className="nav-link"
                        href="https://fingers-crossed-nail-studio.mytreatwell.lt/?fbclid=PAAaZ1c67PnrUYjey9ZzL7tUeaZ0k4f3P8zsvxOLFeZBP1QSRvGSs4y-K_rW8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-box nav-booking">
                            <span>Booking</span>
                        </div>
                    </a>
                </div>
            </nav>
            <nav className="header__nav-mobile"></nav>
        </header>
    );
}
