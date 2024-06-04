import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
  <Route path="/" element={<div>
    <Hero />
    <Services />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <Blog />
    <Footer />
  </div>} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  {/* Tambahkan rute untuk halaman 404 di sini */}
  <Route path="*" element={<NotFoundPage />} />
</Routes>

            </div>
        </Router>
    );
}

export default App;
