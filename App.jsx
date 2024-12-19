
import './App.css'
import React, { useState } from 'react';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Contact from './Page/Contact';
import Navbar from './Page/Navbar';
import Footer from './Page/Footer';
import Resume from './Page/Resume';
import Projects from './Page/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects  />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

      </div>
      </BrowserRouter>
  );
}

export default App;