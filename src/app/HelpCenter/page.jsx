"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = {
  Account: [
    { q: "How do I create a NexSell account?", a: "Sign up with email and confirm your account. Then log in to access features." },
    { q: "How do I reset my password?", a: "Go to login → Forgot Password. Enter your email to receive a reset link." },
    { q: "Can I change my email address?", a: "Yes, go to Dashboard → Profile → Edit Email." },
    { q: "How do I close my NexSell account?", a: "Contact support to permanently delete your account." },
  ],
  Listings: [
    { q: "How do I add a product?", a: "Dashboard → Add Product → Fill details → Submit." },
    { q: "Can I edit my listings?", a: "Yes, go to Dashboard → Products → Edit." },
    { q: "How do I remove a product?", a: "Select the product → Delete." },
    { q: "Can I bulk upload products?", a: "Yes, use the CSV import tool in Dashboard → Products." },
  ],
  Orders: [
    { q: "How do I manage orders?", a: "Dashboard → Orders → View, update, or print invoices." },
    { q: "Can I cancel an order?", a: "Yes, select the order → Cancel. Buyer is notified automatically." },
    { q: "How do I process refunds?", a: "Dashboard → Orders → Returns → Process Refund." },
    { q: "How do I track shipments?", a: "Each order has tracking info. Click 'Track' to view status." },
  ],
  Integrations: [
    { q: "Which integrations are supported?", a: "CRMs, analytics tools, and payment gateways." },
    { q: "How do I integrate payment gateways?", a: "Dashboard → Integrations → Payment Gateways → Connect." },
    { q: "Can I use NexSell API?", a: "Yes, API documentation is available in Dashboard → Developer." },
    { q: "How do I connect analytics tools?", a: "Dashboard → Integrations → Analytics → Connect your account." },
  ],
  Security: [
    { q: "How secure is NexSell?", a: "We use encryption, secure payments, and regular audits." },
    { q: "How do I enable 2FA?", a: "Dashboard → Security → Two-Factor Authentication → Enable." },
    { q: "What to do if my account is hacked?", a: "Contact support immediately to secure your account." },
  ],
  Payments: [
    { q: "How do I receive payments?", a: "Set up your bank account in Dashboard → Payments." },
    { q: "What payment methods are supported?", a: "Credit/Debit cards, UPI, Netbanking, PayPal." },
    { q: "When are payouts processed?", a: "Payouts are processed weekly every Friday." },
  ],
};

export default function HelpCenter() {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFAQs = faqData[activeCategory].filter(
    (faq) =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-serif-bold text-gray-800 mb-4">
          NexSell Help Center
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse categories, read FAQs, or search for answers to get the most
          out of NexSell.
        </p>
      </motion.div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
              setSearch("");
            }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800 shadow-sm"
        />
      </div>

      {/* FAQ Cards */}
      <div className="max-w-5xl mx-auto">
        {filteredFAQs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No results found.</p>
        ) : (
          filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white shadow-lg rounded-xl mb-4 overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-xl font-semibold text-gray-800">
                  {faq.q}
                </span>
                <span className="text-gray-500 text-2xl transform transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="px-6 pb-4 text-gray-700 text-lg"
              >
                {faq.a}
              </motion.div>
            </motion.div>
          ))
        )}
      </div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Still Need Help?
        </h2>
        <p className="text-gray-600 mb-6">
          Our support team is here to assist you. Reach out via live chat or
          email.
        </p>
        <a
          href="/Contactus"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
}
