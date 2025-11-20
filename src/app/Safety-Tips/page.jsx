

"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Shield, AlertTriangle, Lock, UserCheck, Eye, Phone, MapPin, CreditCard, AlertCircle } from "lucide-react";
import Image from "next/image";
import HeroSection from "../Components/Hero";

// BRAND COLORS — Blue & Purple
const BRAND = {
  primary: "#4F46E5", // Indigo 600
  accent: "#1BFFFF", // Neon Aqua
  textDark: "#000000",
  bgLight: "#FFFFFF",
  cardBg: "#F8F9FC",
  glass: "rgba(255,255,255,0.55)",
  border: "rgba(0,0,0,0.08)",
};

// ------------------ SAFETY TIPS DATA ------------------
const safetyTips = [
  { title: "Meet in a Public Place", desc: "Always choose a busy public location such as malls, cafes, or police-approved meetup zones.", icon: MapPin },
  { title: "Inspect Before Buying", desc: "Check the item thoroughly and verify its condition before paying.", icon: Eye },
  { title: "Verify Identity", desc: "Ask the seller for valid ID or proofs if the item is expensive.", icon: UserCheck },
  { title: "Avoid Sharing Personal Details", desc: "Never share Aadhaar, PAN, bank login, OTP or any private documents.", icon: Lock },
  { title: "Use Safe Payment Methods", desc: "Prefer cash, UPI or COD. Avoid unknown links or payment requests.", icon: CreditCard },
  { title: "Beware of Unrealistic Deals", desc: "If a price is too good to be true, it usually is.", icon: AlertTriangle },
  { title: "Do Not Pay Advance", desc: "Never send money before physically checking the product.", icon: AlertCircle },
  { title: "Keep Communication on Nexsell", desc: "Avoid switching to unknown apps or links shared by strangers.", icon: Phone },
  { title: "Trust Your Instincts", desc: "If something feels off, walk away immediately.", icon: Shield },
  // More added for large content
  { title: "Check Seller’s Profile", desc: "Look at activity, ratings, and history before meeting.", icon: UserCheck },
  { title: "Use Meeting Mode", desc: "Enable one-time meet-up PIN for extra safety.", icon: Shield },
  { title: "Check Product Documents", desc: "Verify receipts, warranty, and serial numbers.", icon: Eye },
  { title: "Avoid Rush Deals", desc: "Scammers often create urgency—don’t fall for it.", icon: AlertTriangle },
  { title: "Take a Friend with You", desc: "Never meet alone if the deal involves high value.", icon: UserCheck },
  { title: "Keep Chats Within App", desc: "Nexsell automatically filters scam messages—stay inside the app.", icon: Phone },
  { title: "Report Suspicious Users", desc: "Use the report button if a buyer/seller behaves unusually.", icon: AlertCircle },
];

// ------------------ COMPONENT ------------------
export default function NexsellSafetyPage() {
  const [query, setQuery] = useState("");
  const filteredTips = useMemo(() => safetyTips.filter(tip => tip.title.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
 <>


 <HeroSection 
      tittle={"Nexsell Safety Tips – Buy & Sell with Confidence"}
    text={"Your safety matters. Follow these essential guidelines to stay protected while using Nexsell."}
     bgImg={"/img/safetytips1.avif"}
     
 
 
 />
    <div className="min-h-screen w-full bg-white text-black overflow-x-hidden">

      {/* ------------------ SEARCH BAR ------------------ */}
      <div className="max-w-3xl mx-auto px-4 mt-20 ">
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 flex items-center gap-3 px-4 py-3">
          <Search className="w-5 h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search safety tips..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* ------------------ TIPS GRID ------------------ */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-[#F8F9FC] shadow-md hover:shadow-xl border border-gray-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-7 h-7 text-indigo-600" />
                <h2 className="text-xl font-bold">{tip.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
            </motion.div>
          );
        })}
      </div>



    </div>
 
 
 
 </>
  );
}
