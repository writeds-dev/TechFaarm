

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Code,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Star,
  RefreshCw,
  Users,
  Award,
  Terminal,
  CloudDrizzle,
  Network,
  ServerCog,
  CloudCog,
  Layers3,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: <Database size={36} className="text-indigo-600" />,
    title: "Database Consultation Services",
    description: "Scalable, secure, and optimized data management tailored to your business needs.",
  },
  {
    icon: <Cloud size={36} className="text-indigo-600" />,
    title: "Cloud Consultation Services",
    description: "Robust cloud deployment, monitoring, and DevOps for modern, agile enterprises.",
  },
  {
    icon: <Code size={36} className="text-indigo-600" />,
    title: "Web Development Services",
    description: "Responsive, high-performance websites and apps using modern frameworks.",
  },
  {
    icon: <LayoutDashboard size={36} className="text-indigo-600" />,
    title: "UI/UX Design",
    description: "Intuitive and elegant interfaces that engage users and enhance experience.",
  },
  {
    icon: <LayoutDashboard size={36} className="text-indigo-600" />,
    title: "VmWare Consultation Services",
    description: "Expert consulting for virtualization, ensuring efficiency and performance.",
  },
  {
    icon: <LayoutDashboard size={36} className="text-indigo-600" />,
    title: "Technical Trainer",
    description: "At Tech Farm, our mission is to grow raw potential into tech excellence — and the Technical Trainer plays a pivotal role in cultivating that growth.",
  },
];

const stack = [
  { name: "React", icon: <Code size={24} className="text-white" /> },
  { name: "Node.js", icon: <Terminal size={24} className="text-white" /> },
  { name: "MongoDB", icon: <Database size={24} className="text-white" /> },
  { name: "Java Spring Boot", icon: <Settings size={24} className="text-white" /> },
  { name: "Next.js", icon: <Cpu size={24} className="text-white" /> },
  { name: "AWS", icon: <CloudDrizzle size={24} className="text-white" /> },
  { name: "Kubernetes", icon: <Network size={24} className="text-white" /> },
  { name: "Database Design and Architecture", icon: <ServerCog size={24} className="text-white" /> },
  { name: "Database Migration and Upgrades", icon: <RefreshCw size={24} className="text-white" /> },
  { name: "Cloud Infrastructure Design", icon: <CloudCog size={24} className="text-white" /> },
  { name: "Cloud DevOps and Automation", icon: <Layers3 size={24} className="text-white" /> },
  { name: "Multi Cloud Services", icon: <Layers3 size={24} className="text-white" /> },
];

const reasons = [
  { icon: <ShieldCheck className="text-indigo-600" size={28} />, title: "Reliable & Secure" },
  { icon: <Zap className="text-indigo-600" size={28} />, title: "Lightning Fast" },
  { icon: <HeartHandshake className="text-indigo-600" size={28} />, title: "Client-First Approach" },
  { icon: <Settings className="text-indigo-600" size={28} />, title: "Custom Solutions" },
  { icon: <Star className="text-indigo-600" size={28} />, title: "Quality-Driven" },
  { icon: <RefreshCw className="text-indigo-600" size={28} />, title: "Continuous Improvement" },
  { icon: <Users className="text-indigo-600" size={28} />, title: "Team Collaboration" },
  { icon: <Award className="text-indigo-600" size={28} />, title: "Award-Winning Service" },
];

const testimonials = [
  {
    name: "Arjun Verma",
    feedback: "Tech Farm delivered an amazing website with a slick UI and great performance. Totally recommend them!",
  },
  {
    name: "Nisha Thakur",
    feedback: "Super happy with their cloud infrastructure setup – smooth, fast, and cost-effective!",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white  to-gray-100 py-24 px-6 md:px-16 mt-20 space-y-24 text-gray-800">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <video
          loop
          autoPlay
          muted
          src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
          className="hidden lg:block w-1/2 rounded-3xl shadow-xl"
        ></video>

        <div className="flex flex-col space-y-12 w-full">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
            What We Offer at <span className="text-indigo-600">Tech Farm</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-start hover:shadow-xl transition-all"
              >
                <div>{service.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-gray-600 text-base mt-2 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="initial"
            whileHover="hovered"
            transition={{ duration: 3 }}
            className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-black overflow-hidden hover:cursor-pointer w-max self-start"
          >
            <motion.div
              variants={{
                initial: { y: 0 },
                hovered: { y: "-10%", opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="relative rounded-full py-4 px-10 text-lg text-stone-900/90 bg-white font-semibold"
            >
              Explore Our Work
            </motion.div>
            <motion.div
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
              className="absolute inset-0 rounded-full py-4 px-10 text-lg text-white bg-stone-950 font-semibold"
            >
              Explore Our Work
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-12">Our Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {stack.map((tech, i) => (
            <motion.div
              key={i}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-indigo-600/90 group-hover:bg-indigo-700 transition-colors p-3 rounded-full shadow text-white">
                  {tech.icon}
                </div>
                <span className="text-gray-800 font-medium text-lg mt-2">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-12">Why Choose Tech Farm?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-3">{reason.icon}</div>
              <p className="font-medium text-lg text-gray-700">{reason.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <p className="text-gray-600 text-lg italic leading-relaxed">“{item.feedback}”</p>
              <h5 className="mt-4 text-indigo-600 font-semibold text-lg">— {item.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Services;
