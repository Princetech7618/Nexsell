"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, ThumbsUp, AlertTriangle, MessageSquare, Ban } from "lucide-react";

export default function CommunityGuidelines() {
  const guidelines = [
    {
      icon: <ShieldCheck className="w-10 h-10" />, 
      title: "Stay Honest & Transparent",
      text: "Always provide accurate product details, real images, and truthful information. Misleading listings or false claims are strictly prohibited on Nexsell.",
    },
    {
      icon: <Users className="w-10 h-10" />, 
      title: "Respect Every User",
      text: "Treat buyers and sellers with kindness. Do not use abusive language, harassment, or discrimination in any form.",
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />, 
      title: "Follow Ethical Selling Practices",
      text: "Do not sell illegal, restricted, or counterfeit items. Nexsell aims to build a trustworthy marketplace for everyone.",
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />, 
      title: "No Fraud or Scams",
      text: "Any attempt to scam, cheat, or manipulate another user will lead to immediate action, including account suspension.",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />, 
      title: "Safe Communication Only",
      text: "Use Nexsell chat responsibly. Do not spam, send harmful links, or request unnecessary personal information.",
    },
    {
      icon: <Ban className="w-10 h-10" />, 
      title: "Zero Tolerance for Illegal Content",
      text: "Any item or content involving weapons, drugs, stolen goods, or harmful activities is strictly banned.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 text-white p-6 md:p-12 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl text-black font-bold mb-4 tracking-wide drop-shadow-lg">
          Nexsell Community Guidelines
        </h1>
        <p className="text-lg md:text-xl text-black opacity-90 max-w-3xl mx-auto">
          Our mission is to create a safe, respectful, and trustworthy community for buying and selling. Follow these guidelines to help maintain a positive environment.
        </p>
      </motion.div>

      {/* Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guidelines.map((g, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
          >
            <div className="flex items-center justify-center mb-4 text-indigo-600">{g.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center text-black hover:text-indigo-600">{g.title}</h3>
            <p className="text-sm opacity-90 text-center leading-relaxed text-black">{g.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-16 text-center opacity-90"
      >
        <p className="text-lg text-black">
          Nexsell reserves the right to take appropriate action, including warnings, listing removal, or permanent bans if these guidelines are violated.
        </p>
      </motion.div>
    </div>
  );
}
