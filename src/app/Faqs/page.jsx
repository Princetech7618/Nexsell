"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQs() {
  const faqs = [
    { q: "What is Nexsell?", a: "Nexsell is a community-driven marketplace where users can buy and sell products safely and easily." },
    { q: "Is Nexsell free to use?", a: "Yes, Nexsell is completely free for browsing, posting ads, and connecting with buyers or sellers." },
    { q: "How do I post an ad?", a: "Simply log in, click on 'Post Ad', fill the product details, upload images, and publish instantly." },
    { q: "Are my chats private?", a: "Yes, all chats on Nexsell are encrypted and remain private between the buyer and seller." },
    { q: "How do I report a scam?", a: "Go to the user's profile or listing and click 'Report'. Provide details and our team will review it quickly." },
    { q: "What items are not allowed?", a: "Illegal items, weapons, drugs, counterfeit goods, adult content, and restricted items are strictly prohibited." },
    { q: "Can I edit my posted ad?", a: "Yes, you can edit the title, price, description, and images anytime from your dashboard." },
    { q: "How long does an ad stay active?", a: "Ads stay active for 30 days. You can renew them anytime before expiry." },
    { q: "Does Nexsell offer buyer protection?", a: "We provide safety guidelines but do not handle payments directly. Always meet in public places." },
    { q: "How do I delete my account?", a: "Go to Settings > Account > Delete Account. All your data will be permanently removed." },
    { q: "Why was my listing removed?", a: "Listings are removed if they violate Nexsell policies, contain misleading information, or receive multiple reports." },
    { q: "Can I sell used items?", a: "Yes, Nexsell is designed especially for buying and selling pre-owned items." },
    { q: "How do I contact a seller?", a: "Open a listing and click 'Chat with Seller' to start a secure conversation instantly." },
    { q: "Is my phone number visible?", a: "No, Nexsell hides your phone number unless you choose to share it manually in chat." },
    { q: "What payment method should I use?", a: "Use UPI, cash, or other trusted methods. Always avoid sending money before receiving the product." },
    { q: "How do I stay safe on Nexsell?", a: "Follow our Safety Tips: meet in public places, verify products in person, and avoid sharing sensitive details." },
    { q: "Can businesses sell on Nexsell?", a: "Yes, small businesses and dealers are welcome as long as they follow community guidelines." },
    { q: "What should I do if the buyer does not respond?", a: "You may wait or contact another buyer/seller. Inactive chats automatically close after 7 days." },
    { q: "Can I post ads in multiple cities?", a: "Yes, as long as the product is actually available in the selected city." },
    { q: "How do I boost my listing?", a: "We offer paid boosts and highlight features. You can access them from your dashboard to increase visibility." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 text-black font-serif p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">
          Nexsell FAQs
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Find answers to the most common questions and learn how Nexsell works.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg overflow-hidden cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-5 text-left">
              <h3 className="text-lg md:text-xl font-semibold">{item.q}</h3>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </div>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-5 text-sm opacity-90 leading-relaxed"
              >
                {item.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mt-14 opacity-90 text-lg"
      >
        Still have questions? Contact our support team anytime.
      </motion.p>
    </div>
  );
}