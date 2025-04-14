import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0f051d] via-[#090917] to-[#02010a] text-white px-6 md:px-20 py-32 font-sans relative overflow-hidden">
      {/* Glowing Background Blobs */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/20 blur-[180px] top-[-100px] left-[-100px] rounded-full" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] bottom-[-100px] right-[-80px] rounded-full" />

      <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
            Let's <span className="text-cyan-400">connect</span> & <br />
            <span className="text-purple-400">collaborate.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Got a bold idea or just need help getting started? We're ready.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: <Mail className="text-cyan-400" size={26} />,
                title: "Mail Us",
                info: "hello@techfarm.com",
              },
              {
                icon: <Phone className="text-cyan-400" size={26} />,
                title: "Call Us",
                info: "+91 00000000",
              },
              {
                icon: <MapPin className="text-cyan-400" size={26} />,
                title: "Visit Us",
                info: "Chandigarh, Mohali",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white">Contact Form</h3>
          <form className="space-y-6">
            {["Name", "Email"].map((label, idx) => (
              <div key={idx}>
                <label className="block text-sm text-gray-300 mb-2">{label}</label>
                <input
                  type={label.toLowerCase()}
                  className="w-full bg-black/40 border border-cyan-600/30 rounded-lg px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/70"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full bg-black/40 border border-cyan-600/30 rounded-lg px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70"
                placeholder="Write your message..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition py-3 rounded-xl font-semibold text-white shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      <footer className="mt-32 text-center text-gray-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Tech Farm. All rights reserved.</p>
        <p className="mt-1">Crafted with ⚡ by Pandit Ji.</p>
      </footer>
    </section>
  );
};

export default Contact;
