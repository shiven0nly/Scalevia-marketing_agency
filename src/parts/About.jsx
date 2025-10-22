import React from "react";
import { Menu, X, Sun, Moon, Mail, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function About({ darkMode }) {
  const skills = [
    'SEO Optimization',
    'Google Ads',
    'Social Media Marketing',
    'PPC Campaigns',
    'Branding',
    'Marketing Funnels'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20"></div>
              <img
                src="/public/Sujay_pfp.jpg"
                alt="Sujay Mahato"
                className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Digital Marketing Strategist</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With years of experience in the digital marketing landscape, I help businesses scale their online presence through strategic campaigns, data-driven insights, and creative storytelling.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My approach combines technical expertise with creative thinking to deliver measurable results that align with your business goals. Let's work together to take your brand to the next level.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default About;