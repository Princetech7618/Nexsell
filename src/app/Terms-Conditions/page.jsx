"use client";

import React from "react";
import { motion } from "framer-motion";

const termsContent = [
  {
    title: "1. Introduction",
    content: `Welcome to Nexsell. By accessing or using our platform, you agree to comply with these Terms and Conditions. Nexsell is a marketplace that connects buyers and sellers, facilitating transactions in a safe and secure environment.`
  },
  {
    title: "2. Account Registration",
    content: `To use certain features of Nexsell, you must create an account. You are responsible for maintaining the confidentiality of your login information and for all activities under your account.`
  },
  {
    title: "3. Listing Rules",
    content: `Sellers must provide accurate, complete, and legal information for their listings. Items prohibited by law or policy may not be listed. Nexsell reserves the right to remove any listing at its discretion.`
  },
  {
    title: "4. Buyer Responsibilities",
    content: `Buyers should verify the authenticity and quality of the product before making a purchase. Nexsell is not responsible for disputes between buyers and sellers.`
  },
  {
    title: "5. Payment and Fees",
    content: `All transactions are between buyers and sellers. Nexsell may charge service fees for certain transactions, as described in the platform. Fees are non-refundable unless specified.`
  },
  {
    title: "6. Prohibited Activities",
    content: `Users shall not engage in fraudulent, illegal, or harmful activities. Any violation may result in suspension or termination of account.`
  },
  {
    title: "7. Limitation of Liability",
    content: `Nexsell is not liable for any indirect, incidental, or consequential damages arising from the use of the platform or transactions between users.`
  },
  {
    title: "8. Intellectual Property",
    content: `All content, logos, and materials on Nexsell are the property of Nexsell or its licensors. Users may not copy or distribute without permission.`
  },
  {
    title: "9. Termination",
    content: `Nexsell may terminate or suspend your access at any time without notice if these Terms are violated.`
  },
  {
    title: "10. Governing Law",
    content: `These Terms are governed by the laws of India. Any disputes arising will be resolved in accordance with applicable Indian law.`
  },
];

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-12">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Terms and Conditions
      </motion.h1>

      <div className="space-y-6">
        {termsContent.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
