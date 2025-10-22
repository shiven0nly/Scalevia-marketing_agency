import './index.css'
import './App.css'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mail, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';

import Testimonials from './parts/Testimonials';
import Navbar from './parts/Navbar';
import About from './parts/About';
import Contact from './parts/Contact';
import Hero from './parts/Hero';
import Services from './parts/Services';
import Footer from './parts/Footer';

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize dark mode from memory state
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Toggle dark mode and save to memory
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;