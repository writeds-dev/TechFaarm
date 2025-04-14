import React, { useState, useEffect } from 'react';
import {
  HiOutlineMenuAlt4,
  HiX,
  HiHome,
  HiBriefcase,
  HiUser,
  HiMail,
  HiLightningBolt,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-6 md:px-12 transition-all duration-300">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Link to="/" className="text-2xl font-bold text-gray-900 cursor-pointer">
            TechFaarm
          </Link>
        </motion.span>
        <div className="hidden md:flex items-center space-x-10 text-lg">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <HiHome /> Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link to="/services" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <HiBriefcase /> Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <HiUser /> About
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link to="/contact" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <HiMail /> Contact
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link
              to="/get-started"
              className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg transition flex items-center gap-2"
            >
              <HiLightningBolt /> Get Started
            </Link>
          </motion.div>
        </div>

        
        <motion.div
          className="md:hidden cursor-pointer text-3xl text-gray-800"
          onClick={toggleMenu}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt4 />}
        </motion.div>
      </div>

    
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white text-gray-800 z-50 flex flex-col items-center justify-center space-y-6 md:hidden transition">

          {/* Close Icon inside menu */}
          <div className="absolute top-6 right-6 text-3xl text-gray-800 cursor-pointer">
            <motion.div whileHover={{ scale: 1.2 }} onClick={toggleMenu}>
              <HiX />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
              <HiHome /> Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/services" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
              <HiBriefcase /> Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
              <HiUser /> About
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
              <HiMail /> Contact
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/get-started"
              onClick={toggleMenu}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg text-xl flex items-center gap-2"
            >
              <HiLightningBolt /> Get Started
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
