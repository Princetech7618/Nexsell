"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [calling, setCalling] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Handle Call Support button
  const handleCall = () => {
    setCalling(true);
    setTimeout(() => setCalling(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-4">
          Contact NexSell
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          We’re here to help! Fill out the form below or reach out through any
          of the methods listed.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 mt-2 sm:mt-4 w-full sm:w-auto"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-10"
        >
          {/* Office */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
              Our Office
            </h3>
            <p className="text-gray-700">NexSell HQ</p>
            <p className="text-gray-700">123 Business Street</p>
            <p className="text-gray-700">Mumbai, India 400001</p>
            <p className="text-gray-700">Phone: +91 98765 43210</p>
          </div>

          {/* Support */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
              Support
            </h3>
            <p className="text-gray-700 mb-1">Email: support@nexsell.com</p>
            <p className="text-gray-700 mb-1">Live Chat: 9 AM - 9 PM IST</p>
            <p className="text-gray-700">Response Time: Within 24 hours</p>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
              Connect with Us
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-700">
              <a href="#" className="hover:text-blue-600 transition-all">LinkedIn</a>
              <a href="#" className="hover:text-blue-500 transition-all">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-all">Instagram</a>
              <a href="#" className="hover:text-blue-700 transition-all">Facebook</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 sm:mt-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
          Find Us Here
        </h2>
        <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60252.07325316923!2d72.8112!3d19.0821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c9e36c0ab%3A0xcef3790c1adf1cf8!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1697058000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </motion.div>

      {/* Footer CTA - Call Support */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 sm:mt-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Need Immediate Assistance?
        </h2>
        <p className="text-gray-600 mb-4 sm:mb-6">
          Call our support line or use live chat for instant help.
        </p>

        {!calling ? (
          <motion.button
            onClick={handleCall}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Call Support
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <span className="animate-ping inline-block w-3 h-3 rounded-full bg-white"></span>
            Calling...
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
