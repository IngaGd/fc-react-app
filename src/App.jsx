import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

import './style/main.scss';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/fingers-crossed" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
