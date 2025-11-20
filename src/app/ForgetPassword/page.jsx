"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";


export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email");
      return;
    }
    setMessage("");
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-200"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-black mb-2">Forget Password</h1>
          <p className="text-gray-600">Enter your email to reset your password</p>
        </div>

        {message && <p className="text-red-500 mb-4 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 bg-white placeholder-gray-400 text-black outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Send Reset Link
          </motion.button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          Remembered your password?{" "}
          <a
            href="/Login"
            className="text-indigo-600 hover:underline transition"
          >
            Login
          </a>
        </div>

         <div className="mt-10  flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialLogin("Google")}
                    className="p-2 bg-gray-100 text-black rounded-xl shadow-md hover:bg-gray-200 transition flex items-center gap-2"
                  >
                    <FaGoogle /> Google
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialLogin("Facebook")}
                    className="p-2 bg-gray-100 text-black rounded-xl shadow-md hover:bg-gray-200 transition flex items-center gap-2"
                  >
                    <FaFacebook /> Facebook
                  </motion.button>
                </div>
      </motion.div>
    </div>
  );
}
