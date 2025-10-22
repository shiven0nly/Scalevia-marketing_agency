import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mail, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

function Navbar({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Testimonials', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };



  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
          >
            <span className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                <img src="/logo.jpg" alt="Scalevia logo" className="w-full h-full object-cover" />
              </div>

              <span className="text-3xl font-bold max-w-fit">
      <TypeAnimation
        sequence={[
          'Scalevia', // First word
          1000,      // Wait 1s before next
          'Growth',  // Second word
          1000,      // Wait 1s before next
          'Success', // Third word
          1000,      // Wait 1s before restarting
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
      />
    </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link)}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                {link}
              </motion.button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;