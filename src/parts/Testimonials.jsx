import React from 'react'
import { useState } from 'react';
import { Menu, X, Sun, Moon, Mail, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Testimonials({ darkMode }) {
  const testimonials = [
    {
      name: 'Rahul',
      company: 'TechFlow Inc.',
      text: 'Working with Sujay transformed our digital presence. Our organic traffic increased by 300% in just 6 months. His strategic approach and attention to detail are unmatched.',
      image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=0ea5e9&color=fff&size=200'
    },
    {
      name: 'Michael',
      company: 'GrowthLabs',
      text: 'Sujay\'s expertise in paid advertising helped us achieve a 5x ROAS on our campaigns. His data-driven approach and creative strategies delivered exceptional results.',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=06b6d4&color=fff&size=200'
    },
    {
      name: 'Sara',
      company: 'BrandVista',
      text: 'The social media strategy Sujay developed for us was game-changing. Our engagement rates tripled, and we saw consistent growth in our follower base and conversions.',
      image: 'https://ui-avatars.com/api/?name=Sarah+Thompson&background=0891b2&color=fff&size=200'
    },
    {
      name: 'David',
      company: 'E-commerce Solutions',
      text: 'Sujay\'s SEO expertise brought our products to the top of search results. The increase in qualified leads has been phenomenal, directly impacting our bottom line.',
      image: 'https://ui-avatars.com/api/?name=David+Kumar&background=3b82f6&color=fff&size=200'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients say about working with Scalevia
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mb-6 border-4 border-cyan-500"
                  loading="lazy"
                />
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="text-xl font-bold mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-cyan-500">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials
