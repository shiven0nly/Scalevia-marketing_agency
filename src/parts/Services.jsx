import React from 'react'
import { Menu, X, Sun, Moon, Mail, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Services({ darkMode }) {
  const services = [
    {
      icon: <TrendingUp size={40} />,
      title: 'SEO Optimization',
      description: 'Boost your organic visibility and drive qualified traffic with strategic SEO techniques tailored to your business.'
    },
    {
      icon: <Users size={40} />,
      title: 'Social Media Strategy',
      description: 'Build a powerful social presence with engaging content strategies that connect with your audience.'
    },
    {
      icon: <Target size={40} />,
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted Google and Meta ad campaigns designed for optimal conversions.'
    },
    {
      icon: <Megaphone size={40} />,
      title: 'Content Marketing',
      description: 'Tell your brand story through compelling content that educates, engages, and converts.'
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Brand Growth Consulting',
      description: 'Strategic guidance to scale your business with data-backed insights and proven growth frameworks.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Marketing Funnels',
      description: 'Design high-converting sales funnels that guide prospects seamlessly from awareness to purchase.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to grow your brand
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-cyan-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
