import React from "react";
import { motion } from "framer-motion";
import { Rocket, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex mt-10 flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
          <Rocket className="w-8 h-8 text-teal-400" />
          Welcome to Tech Farm
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          We grow ideas into full-fledged digital products. Whether you're a startup or a growing brand, Tech Farm is your partner in tech innovation.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-500 hover:border-white text-white font-medium rounded-xl transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 w-full max-w-4xl"
      >
        <div className="bg-gray-800 text-left border border-gray-700 shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-teal-300">Why Tech Farm?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>🌱 Tailored tech solutions from seed to scale</li>
            <li>🚀 Fast, flexible, and scalable development</li>
            <li>💡 Expertise in modern tech stacks & UI/UX</li>
            <li>🤝 Friendly, collaborative team</li>
          </ul>
        </div>
      </motion.div>

      <Link to="/" className="mt-10 text-teal-400 hover:underline">
        ← Back to Home
      </Link>
    </div>
    
  );
};

export default GetStarted;
