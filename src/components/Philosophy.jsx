import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="bg-[#111] text-white font-sans h-full pb-16 md:pb-36 md:rounded-t-[4rem] md:-mt-[4rem]">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 md:px-32 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white rounded-b-[4rem] shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Our <span className="text-yellow-400">Philosophy</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-red-200 max-w-2xl mx-auto">
          Great products are built with purpose, passion, and people in mind.
        </p>
      </div>

      {/* About Description */}
      <div className="text-center px-6 md:px-32 mt-16 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          What Drives Tech Farm
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          At Tech Farm, we don’t just build software — we cultivate digital ecosystems. Grounded in purpose, inspired by innovation, and driven by impact, our philosophy revolves around creating meaningful, scalable, and human-centric technology.
        </p>
      </div>

      {/* New: Core Beliefs Section */}
      <div className="px-6 md:px-32 mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              desc: "We constantly challenge the status quo to bring fresh, future-ready solutions.",
            },
            {
              title: "User-Centered Design",
              desc: "Every interface, feature, and flow is thoughtfully crafted for real people.",
            },
            {
              title: "Collaboration Over Ego",
              desc: "We believe great things happen when talented minds co-create with humility.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h4>
              <p className="text-gray-400 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video + Text */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-32 mt-24 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105"
        >
          <video
            src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
            autoPlay
            muted
            loop
            className="w-full rounded-xl"
          />
        </motion.div>
        <div className="w-full md:w-1/2 space-y-6 text-lg md:text-xl font-medium text-gray-300">
          <p>
            We merge design thinking with agile execution. Our process is transparent, collaborative, and obsessively focused on results.
          </p>
          <p>
            From discovery to deployment, we stay adaptive, intentional, and relentlessly aligned with our clients’ goals. That’s the Tech Farm promise.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16 text-center mt-28 rounded-t-[4rem] shadow-xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Let’s Build With Purpose
        </motion.h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          We’re more than a dev shop — we’re your strategic digital partner.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default Philosophy;
