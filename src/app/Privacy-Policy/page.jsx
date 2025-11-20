"use client";

import React from "react";
import { motion } from "framer-motion";

const privacyContent = [
  {
    title: "1. Introduction",
    content: `At Nexsell, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform. By using Nexsell, you agree to the terms of this policy.`
  },
  {
    title: "2. Information We Collect",
    content: `We collect information you provide directly, such as account details, listings, and messages. We may also collect information automatically, like IP address, device details, browsing behavior, and cookies.`
  },
  {
    title: "3. How We Use Your Information",
    content: `Your information helps us provide our services, improve user experience, process transactions, send notifications, and comply with legal obligations. We may use aggregated data for analytics and marketing purposes.`
  },
  {
    title: "4. Sharing Your Information",
    content: `We do not sell your personal information. However, we may share information with service providers, legal authorities, or in case of mergers or acquisitions. Personal data is shared only to the extent necessary.`
  },
  {
    title: "5. Cookies and Tracking",
    content: `Nexsell uses cookies and similar technologies to enhance your experience, remember preferences, and analyze platform usage. You can manage or disable cookies via your browser settings.`
  },
  {
    title: "6. User Control and Choices",
    content: `You can access, update, or delete your personal information via your account settings. You may opt out of marketing communications at any time.`
  },
  {
    title: "7. Security of Your Information",
    content: `We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.`
  },
  {
    title: "8. Third-Party Links",
    content: `Nexsell may include links to third-party websites. We are not responsible for the privacy practices of these websites. Users should review their privacy policies before using them.`
  },
  {
    title: "9. Children's Privacy",
    content: `Our platform is not intended for children under 13. We do not knowingly collect personal information from children. If we discover such data, we take steps to delete it promptly.`
  },
  {
    title: "10. Changes to Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Updates will be posted on this page with the effective date. Continued use of Nexsell indicates your acceptance of changes.`
  },
  {
    title: "11. Contact Us",
    content: `If you have questions about this Privacy Policy or your personal data, please contact us at support@nexsell.com.`
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-12">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policy
      </motion.h1>

      <div className="space-y-6">
        {privacyContent.map((section, index) => (
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
