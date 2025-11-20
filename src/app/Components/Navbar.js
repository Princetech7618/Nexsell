"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/Cars" },
    { name: "Bikes", href: "/Bikes" },
    { name: "Mobiles", href: "/Mobile" },
    { name: "Electronics", href: "/Electronic" },
    { name: "My Listing", href: "/MyListing" },
  ];

  // const underline = {
  //   rest: { opacity: 0, width: 0 },
  //   hover: { opacity: 1, width: "100%" },
  // };

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.07 }}>
          <Link href="/">
            <img
              src="/img/logo.png"
              alt="NexSell Logo"
              className="h-12 w-auto object-contain rounded"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Menu Items with underline */}
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative cursor-pointer"
            >
              <Link
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                {item.name}
              </Link>

              {/* Underline */}
              <motion.div
                variants={{
                  rest: { opacity: 0, width: 0 },
                  hover: { opacity: 1, width: "100%" },
                }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 -bottom-1 h-[3px] bg-indigo-500 rounded-full"
              />
            </motion.div>
          ))}

          {/* Login (NO UNDERLINE HERE) */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/Login"
              className="px-4 py-2 border border-indigo-700 text-indigo-600 rounded-lg hover:bg-indigo-700 hover:text-white transition-all"
            >
              Login
            </Link>
          </motion.div>

          {/* SELL Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/Sell"
              className="px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
            >
              + SELL
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="md:hidden bg-white shadow-lg p-6 flex flex-col gap-6"
        >
          {/* Menu Items with underline */}
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative"
            >
              <Link
                href={item.href}
                className="text-gray-800 text-lg font-semibold hover:text-indigo-600 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>

              {/* Underline for mobile */}
              <motion.div
                variants={{
                  rest: { opacity: 0, width: 0 },
                  hover: { opacity: 1, width: "100%" },
                }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 -bottom-1 h-[3px] bg-indigo-500 rounded-full"
              />
            </motion.div>
          ))}

          {/* Login in Mobile (NO underline here also) */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/Login"
              className="text-indigo-600 text-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </motion.div>

          {/* SELL Button */}
          <Link
            href="/Sell"
            className="px-6 py-3 bg-green-600 text-white rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            + SELL
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
