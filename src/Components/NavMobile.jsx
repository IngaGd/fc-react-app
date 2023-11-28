import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import logo from '../assets/images/logo/Fingers_crossed_logopos_small.png';

export default function NavMobile() {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <nav className="nav-mobile">
            <Link className="nav-link" to="/fc-react-app">
                <div className="logo-box">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
            </Link>
            <button onClick={openPopup} className="btn-icons bars hero sticky">
                <IoMenuOutline />
            </button>
            <div className={`popup ${showPopup ? 'active' : ''}`} id="popup">
                <div className="popup__content">
                    <div className="logo-box">
                        <Link onClick={closePopup} to="/vytautas-portfolio">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <button onClick={closePopup} className="btn-icons times">
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="popup__nav-links">
                    <div className="links">
                        {/* <Link className="nav-link" to="/about-us">
                            <div className="text-box"> About us</div>
                        </Link> */}
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
                        <Link className="nav-link" to="/shop">
                            <div className="text-box">Products</div>
                        </Link>
                        {/* <Link className="nav-link" to="/cart">
                            <div className="text-box">Cart</div>
                        </Link> */}
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
                </div>
            </div>
        </nav>
    );
}
