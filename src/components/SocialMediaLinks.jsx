import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-[#0f0c29] text-white py-24 px-6 md:px-24 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          About <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">TechFarm</span>
        </h1>
        <p className="text-gray-400 text-lg mt-3">Solutions That Drive Implementation</p>
      </motion.div>

      {/* Grid Content */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Vision <span className="text-gray-300">Our Expertise</span> <br />
            <span className="text-white">Your Success. Get Noticed.</span> <br />
            <span className="text-pink-500">Generate Leads. Dominate.</span>
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?w=600&auto=format&fit=crop&q=60"
              className="rounded-lg object-cover h-44 w-full"
              alt="Team"
            />
            <img
              src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60"
              className="rounded-lg object-cover h-44 w-full"
              alt="Workspace"
            />
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            We help you stand out in the digital world with{" "}
            <span className="text-white font-medium">innovation, speed, and scale</span>. 
            Our team builds <span className="text-white font-medium">results-driven</span> solutions that evolve with your growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {[
              ["400+", "Completed Projects"],
              ["500+", "Happy Clients"],
              ["3+", "Years of Mastery"],
              ["45+", "Global Honors"],
            ].map(([num, label], i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-cyan-400">{num}</h3>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Video Button */}
          <div className="flex items-center gap-4 mt-8">
            <button className="p-4 rounded-full bg-pink-600 hover:bg-pink-700 transition">
              <Play className="w-6 h-6 text-white" />
            </button>
            <p className="font-semibold text-gray-300">
              Secure your future with TechFarm 🚀
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1625838144804-300f3907c110?w=600&auto=format&fit=crop&q=60"
            alt="Presentation"
            className="rounded-2xl shadow-2xl w-full object-cover h-full"
          />
        </motion.div>
      </div>

      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-28 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-2">About the Company</h3>
        <div className="w-16 h-1 bg-pink-500 rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-400 leading-relaxed">
          We’re a digital powerhouse transforming businesses with tailored software, cloud-native infrastructure,
          and AI-powered experiences. From startups to enterprises, we deliver modern, resilient, and user-centric
          solutions that create real-world impact.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-28 bg-gradient-to-r from-pink-600 to-cyan-500 p-10 rounded-xl max-w-4xl mx-auto text-center shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-lg text-white mb-6">
          Connect with our team and let’s plan your next big leap.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
