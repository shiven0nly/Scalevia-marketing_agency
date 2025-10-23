import React from "react";
import { Menu, X, Sun, Moon, Mail, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Services', 'Testimonials', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Scalevia
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Scaling your vision through strategic digital marketing and data-driven growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/iamscalevia"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wearescalevia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              {/* WhatsApp message link - replace 911234567890 with your number (country code + number, no plus sign) */}
              <a
                href="https://wa.me/918944918807?text=Hi%20Scalevia%2C%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Scalevia | Built For Scalevia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
