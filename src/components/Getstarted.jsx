import React from "react";
import { motion } from "framer-motion";
import { Rocket, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="min-h-screen flex flex-col mt-10 items-center justify-center px-4 md:px-8 lg:px-20 bg-gradient-to-br from-[#0f051d] via-[#090917] to-[#02010a] text-white relative overflow-hidden py-20">
      {/* Blurred Glowing Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-purple-700/20 blur-[150px] top-[-100px] left-[-100px] rounded-full z-0" />
      <div className="absolute w-[250px] h-[250px] bg-cyan-500/20 blur-[130px] bottom-[-80px] right-[-80px] rounded-full z-0" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full max-w-4xl z-10 px-2"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight flex flex-wrap items-center justify-center gap-2 text-white drop-shadow-xl">
          <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 animate-pulse" />
          Welcome to <span className="text-purple-400">Tech Farm</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed px-2 sm:px-4">
          We grow ideas into full-fledged digital products. Whether you're a startup or a growing brand,
          <span className="text-cyan-300 font-medium"> Tech Farm </span>
          is your partner in innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base bg-gradient-to-r from-cyan-500 to-purple-600 hover:brightness-110 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base border border-white/30 hover:border-white/70 text-white font-semibold rounded-xl backdrop-blur-md bg-white/5 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Why Tech Farm Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-14 w-full max-w-3xl px-4 z-10"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,255,255,0.05)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Why Tech Farm?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
            <li>🌱 Tailored tech solutions from seed to scale</li>
            <li>🚀 Fast, flexible, and scalable development</li>
            <li>💡 Expertise in modern tech stacks & UI/UX</li>
            <li>🤝 Friendly, collaborative team ready to ship</li>
          </ul>
        </div>
      </motion.div>

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-10 sm:mt-12 text-cyan-400 hover:text-white transition duration-300 underline underline-offset-4 z-10 text-sm sm:text-base"
      >
        ← Back to Home
      </Link>
    </section>
  );
};

export default GetStarted;
