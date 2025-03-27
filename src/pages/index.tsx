'use client'; // This line ensures it's client-side only

import React, { useState, useEffect } from 'react'; // Import React and hooks

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './../new_pages/Home';
import About from './../new_pages/About';
import Contact from './../new_pages/Contact';
import Manifest from './../new_pages/Manifest';
import Navbar from './../components/Navbar';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // We set isClient to true on the client side
  }, []);

  if (!isClient) {
    return null;  // Render nothing on the server-side
  }

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar component */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manifest" element={<Manifest />} />
        </Routes>
      </div>
    </Router>
  );
}
