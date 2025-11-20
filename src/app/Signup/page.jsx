"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    alert("Signed up successfully!");
    router.push("/dashboard"); // Navigate after signup
  };

  const handleSocialSignUp = (provider) => {
    alert(`Sign up with ${provider} clicked!`);
    router.push("/dashboard"); // Navigate after social signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-200"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-black mb-2">Create Account</h1>
          <p className="text-gray-600">Sign up to get started</p>
        </div>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSignUp} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 bg-white placeholder-gray-400 text-black outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 bg-white placeholder-gray-400 text-black outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 bg-white placeholder-gray-400 text-black outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 flex justify-center items-center gap-2"
          >
            Sign Up
          </motion.button>
    
        </form>

        <div className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/Login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleSocialSignUp("Google")}
            className="p-2 bg-gray-100 text-black rounded-xl shadow-md hover:bg-gray-200 transition flex items-center gap-2"
          >
            <FaGoogle /> Google
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleSocialSignUp("Facebook")}
            className="p-2 bg-gray-100 text-black rounded-xl shadow-md hover:bg-gray-200 transition flex items-center gap-2"
          >
            <FaFacebookF /> Facebook
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
