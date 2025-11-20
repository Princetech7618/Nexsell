






"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 border-t border-gray-700 font-serif">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link href="/">
              <img
                src="/img/logo.png"
                alt="NexSell Logo"
                className="h-12 w-auto object-cover rounded"
              />
            </Link>
          </motion.div>

          <h2 className="text-2xl font-bold text-indigo-600 mb-3 mt-2">
            NexSell
          </h2>

          <p className="text-sm opacity-80">
            Buy & Sell vehicles easily with secure experience. Best deals in your city.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white transition cursor-pointer text-blue-600">
                <FaFacebookF />
              </div>
            </Link>

            <Link href="https://twitter.com" target="_blank">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white transition cursor-pointer text-blue-600">
                <FaTwitter />
              </div>
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white transition cursor-pointer text-pink-600">
                <FaInstagram />
              </div>
            </Link>

            <Link href="https://google.com" target="_blank">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white transition cursor-pointer text-blue-600">
                <FaGoogle />
              </div>
            </Link>
          </div>
        </div>

        {/* REUSABLE HOVER LIST COMPONENT */}
        <FooterList
          title="Categories"
          items={[
            { name: "Cars", href: "/Cars" },
            { name: "Bikes", href: "/Bikes" },
            { name: "Mobiles", href: "/Mobile" },
            { name: "Electronics", href: "/Electronic" },
            { name: "My Listing", href: "/MyListing" },
          ]}
        />

        <FooterList
          title="Support"
          items={[
            { name: "Help Center", href: "/HelpCenter" },
            { name: "Safety Tips", href: "/Safety-Tips" },
            { name: "Report Issue", href: "/Reportissue" },
            { name: "Community Guidelines", href: "/Community" },
            { name: "FAQs", href: "/Faqs" },
          ]}
        />

        <FooterList
          title="About Us"
          items={[
            { name: "About NexSell", href: "/About" },
            { name: "Terms & Conditions", href: "/Terms-Conditions" },
            { name: "Privacy Policy", href: "/Privacy-Policy" },
            { name: "Contact Us", href: "/Contactus" },
          ]}
        />
      </div>

      {/* BOTTOM FOOTER */}
      <div className="text-center mt-10 pt-5 border-t border-gray-700">
        <p className="text-sm text-gray-400 hover:text-indigo-400 transition">
          © {new Date().getFullYear()} NexSell — All Rights Reserved ❤️
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------
   REUSABLE FOOTER LIST COMPONENT
--------------------------------*/
function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 hover:text-indigo-400 transition">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative cursor-pointer"
          >
            <Link href={item.href} className="hover:text-indigo-400 transition">
    
    <span className="text-indigo-600 font-bold ">
           {"  >  " } 
    </span>
     <span>
    {item.name} 
         </span>
            </Link>

            {/*  UNDERLINE EFFECT */}
            <motion.div
              variants={{
                rest: { opacity: 0, width: 0 },
                hover: { opacity: 1, width: "60%" },
              }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 -bottom-1 h-[3px] bg-indigo-500/70  rounded-full"
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
