import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderSticky from './Components/HeaderSticky';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

import './style/main.scss';

function App() {
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
        <Router>
            {isSticky ? <HeaderSticky /> : ''}
            <Routes>
                <Route path="/fc-react-app" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
