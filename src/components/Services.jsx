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
  WandSparkles,
  Rocket,
  Smile,
  Globe2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Database size={36} className="text-cyan-400" />,
    title: "Database Consultation Services",
    description: "Scalable, secure, and optimized data management tailored to your business needs.",
  },
  {
    icon: <Cloud size={36} className="text-cyan-400" />,
    title: "Cloud Consultation Services",
    description: "Robust cloud deployment, monitoring, and DevOps for modern, agile enterprises.",
  },
  {
    icon: <Code size={36} className="text-cyan-400" />,
    title: "Web Development Services",
    description: "Responsive, high-performance websites and apps using modern frameworks.",
  },
  {
    icon: <LayoutDashboard size={36} className="text-cyan-400" />,
    title: "UI/UX Design",
    description: "Intuitive and elegant interfaces that engage users and enhance experience.",
  },
  {
    icon: <Settings size={36} className="text-cyan-400" />,
    title: "VmWare Consultation Services",
    description: "Expert consulting for virtualization, ensuring efficiency and performance.",
  },
  {
    icon: <WandSparkles size={36} className="text-cyan-400" />,
    title: "Technical Trainer",
    description: "We cultivate tech excellence through professional training and mentorship.",
  },
];

const stack = [
  { name: "React", icon: <Code size={24} className="text-white" /> },
  { name: "Node.js", icon: <Terminal size={24} className="text-white" /> },
  { name: "MongoDB", icon: <Database size={24} className="text-white" /> },
  { name: "Spring Boot", icon: <Settings size={24} className="text-white" /> },
  { name: "Next.js", icon: <Cpu size={24} className="text-white" /> },
  { name: "AWS", icon: <CloudDrizzle size={24} className="text-white" /> },
  { name: "Kubernetes", icon: <Network size={24} className="text-white" /> },
  { name: "DB Design", icon: <ServerCog size={24} className="text-white" /> },
  { name: "DB Migration", icon: <RefreshCw size={24} className="text-white" /> },
  { name: "Cloud Infra", icon: <CloudCog size={24} className="text-white" /> },
  { name: "Cloud DevOps", icon: <Layers3 size={24} className="text-white" /> },
  { name: "Multi Cloud", icon: <Layers3 size={24} className="text-white" /> },
];

const reasons = [
  { icon: <ShieldCheck className="text-emerald-400" size={28} />, title: "Reliable & Secure" },
  { icon: <Zap className="text-yellow-400" size={28} />, title: "Lightning Fast" },
  { icon: <HeartHandshake className="text-pink-400" size={28} />, title: "Client-First Approach" },
  { icon: <Settings className="text-blue-400" size={28} />, title: "Custom Solutions" },
  { icon: <Star className="text-indigo-400" size={28} />, title: "Quality-Driven" },
  { icon: <RefreshCw className="text-purple-400" size={28} />, title: "Continuous Improvement" },
  { icon: <Users className="text-rose-400" size={28} />, title: "Team Collaboration" },
  { icon: <Award className="text-orange-400" size={28} />, title: "Award-Winning Service" },
  { icon: <WandSparkles className="text-fuchsia-400" size={28} />, title: "Creative Innovation" },
  { icon: <Rocket className="text-cyan-400" size={28} />, title: "Growth-Oriented" },
];

const testimonials = [
  {
    name: "Arjun Verma",
    feedback: "Tech Farm delivered an amazing website with a slick UI and great performance. Totally recommend them!",
    icon: <Smile className="text-green-400" size={24} />,
  },
  {
    name: "Nisha Thakur",
    feedback: "Super happy with their cloud infrastructure setup – smooth, fast, and cost-effective!",
    icon: <Globe2 className="text-sky-400" size={24} />,
  },
];

const Services = () => {
  return (
    <div id="services" className="scroll-mt-28">
      <div className="w-full bg-gradient-to-br mt-20 from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-6 md:px-16 space-y-24 text-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="relative hidden lg:block w-1/2">
            <video
              loop
              autoPlay
              muted
              poster="/fallback-image.jpg"
              src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
              className="w-full rounded-3xl shadow-xl opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl" />
          </div>

          <div className="flex flex-col space-y-12 w-full">
            <h2 className="text-5xl font-extrabold tracking-tight leading-tight text-balance">
              What We Offer at <span className="text-cyan-400">Tech Farm</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-900 rounded-2xl shadow-lg p-6 flex gap-4 items-start hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-300"
                >
                  <div>{service.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                    <p className="text-slate-400 mt-2 leading-relaxed font-light">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial="initial"
              whileHover="hovered"
              className="relative flex items-center gap-2 rounded-full border border-cyan-500 overflow-hidden w-max self-start shadow-lg shadow-cyan-600/40 text-white font-semibold"
            >
              <motion.div
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%", opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full py-4 px-10 text-lg bg-cyan-500"
              >
                Explore Our Work <ArrowRight className="inline ml-1" size={20} />
              </motion.div>
              <motion.div
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{ duration: 0.3, type: "tween", ease: "easeIn" }}
                className="absolute inset-0 rounded-full py-4 px-10 text-lg text-cyan-400 bg-gray-950"
              >
                Explore Our Work <ArrowRight className="inline ml-1" size={20} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full bg-gray-950 py-24 px-6 md:px-16 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Our Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {stack.map((tech, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-cyan-600/20 border border-gray-700 transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="bg-cyan-600 group-hover:bg-cyan-700 transition-colors p-3 rounded-full shadow text-white">
                    {tech.icon}
                  </div>
                  <span className="text-slate-200 font-medium text-lg mt-2">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-24 px-6 md:px-16 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Why Choose Tech Farm?</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 p-6 rounded-xl shadow text-center hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <div className="flex justify-center mb-3">{reason.icon}</div>
                <p className="font-medium text-lg text-slate-200">{reason.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 py-24 px-6 md:px-16 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-10">What Our Clients Say</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="bg-indigo-800/20 p-6 rounded-2xl shadow-xl hover:shadow-purple-600/50 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="text-indigo-100 text-lg italic leading-relaxed">“{item.feedback}”</p>
                <h5 className="mt-4 text-cyan-300 font-semibold text-lg">— {item.name}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;