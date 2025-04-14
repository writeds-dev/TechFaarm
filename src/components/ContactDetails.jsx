import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full bg-[#111] text-white py-20 px-6 md:px-16">
      {/* Page Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          GET IN TOUCH
        </motion.h2>
        <div className="w-16 h-1 bg-red-600 rounded-full mt-4 mb-4 mx-auto" />
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We're here to help. Whether you're ready to start a project or just exploring — reach out and say hi!
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-20 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop&q=60"
          alt="Dark Interior Design"
          className="w-full h-[500px] object-cover opacity-30"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-3xl md:text-4xl font-bold">We’d Love to Hear From You</h3>
          <p className="text-gray-300 mt-4 max-w-xl">
            Contact us anytime for sales inquiries, support requests, or just to say hello.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-24">
        {/* Contact Form */}
        <div className="bg-[#1c1c1c] p-10 rounded-xl shadow-md border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full p-4 bg-black border border-gray-700 text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full p-4 bg-black border border-gray-700 text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-4 bg-black border border-gray-700 text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition"
                placeholder="Write your message"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8 justify-center">
          {/* Sales */}
          <div className="flex items-start gap-4">
            <Mail className="text-red-500 mt-1" size={28} />
            <div>
              <h4 className="text-lg font-semibold">Chat to Sales</h4>
              <p className="text-gray-400">Speak to our friendly team.</p>
              <p className="text-red-400 font-medium">sales@techfarm.com</p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-start gap-4">
            <Mail className="text-red-500 mt-1" size={28} />
            <div>
              <h4 className="text-lg font-semibold">Chat to Support</h4>
              <p className="text-gray-400">We're here to help.</p>
              <p className="text-red-400 font-medium">support@techfarm.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="text-red-500 mt-1" size={28} />
            <div>
              <h4 className="text-lg font-semibold">Visit Us</h4>
              <p className="text-gray-400">Chandigarh ,Mohali</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 font-medium hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="text-red-500 mt-1" size={28} />
            <div>
              <h4 className="text-lg font-semibold">Call Us</h4>
              <p className="text-gray-400">Mon–Fri from 8am to 5pm</p>
              <p className="text-red-400 font-medium">+91 00000000</p>
            </div>
          </div>
        </div>
      </div>
            <footer className="mt-32 border-t border-gray-700 pt-10 text-center text-gray-500 text-sm">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} Tech Farm. All rights reserved.</p>
        <p className="mt-1">Crafted with ❤️ by Pandit Ji.</p>
      </footer>
    </div>
  );
};

export default Contact;
