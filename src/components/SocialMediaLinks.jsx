import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Tech & Expertise data
const expertiseList = [
  "Custom Software Development",
  "AI-Powered Automation",
  "Cloud Engineering",
  "Mobile & Web Apps",
  "UI/UX Design",
  "DevOps & SRE"
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Tailwind", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Python", category: "Scripting" }
];

const AboutUs = () => {
  return (
    <div className="bg-[#111] text-white py-20 px-6 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="text-sm text-gray-400 mt-2">Solutions That Drive Implementation</p>
      </div>

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <p className="text-sm tracking-widest text-red-500 font-semibold uppercase mb-2">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Your Vision <span className="text-gray-300">Our Expertise</span> <br />
              <span className="text-white">Your Success. Get Noticed.</span> <br />
              <span className="text-red-500">Generate Leads. Dominate.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?w=600&auto=format&fit=crop&q=60"
              alt="Team working"
              className="rounded-lg object-cover h-48 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60"
              alt="Workspace"
              className="rounded-lg object-cover h-48 w-full"
            />
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            We help you stand out in the digital world. Our talented team builds <span className="text-white font-medium">results-driven solutions</span> with a focus on <span className="text-white font-medium">innovation, speed, and scalability</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div>
              <h3 className="text-2xl font-bold">400+</h3>
              <p className="text-sm text-gray-400">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-sm text-gray-400">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-sm text-gray-400">Years of Mastery</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">45+</h3>
              <p className="text-sm text-gray-400">Worldwide Honors</p>
            </div>
          </div>

          {/* Video Intro */}
          <div className="flex items-center space-x-4 mt-8">
            <div className="relative">
              <button className="p-4 rounded-full bg-red-600 hover:bg-red-700 transition">
                <Play className="w-6 h-6 text-white" />
              </button>
            </div>
            <div>
              <p className="font-semibold">connection secure with Tech Farmm</p>
              
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1625838144804-300f3907c110?w=600&auto=format&fit=crop&q=60"
            alt="Team Presentation"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About the Company */}
      <section className="mt-24 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-2">About the Company</h3>
        <div className="w-16 h-1 bg-red-600 rounded-full mb-6 mx-auto" />
        <p className="text-gray-400 text-lg leading-relaxed">
          We’re a digital powerhouse transforming businesses with tailored software, cloud-native architecture,
          and AI-powered experiences. From startups to enterprises, we build resilient, scalable, and user-centric
          solutions that push boundaries and drive results.
        </p>
      </section>

      

     

      {/* Call to Action */}
      <section className="mt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-red-600 p-10 rounded-xl max-w-4xl mx-auto shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-center bg-cover" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-white text-lg mb-6">
              Contact our team and let’s start planning your digital future.
            </p>
            <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </div>
        
        </motion.div>
      </section>
      

      
    </div>
  );
};

export default AboutUs;
