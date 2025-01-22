import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./components/Beranda";
import Berita from "./components/Berita";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/berita" element={<Berita />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
