"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    alert("Logged in successfully!");
    router.push("/dashboard"); // Navigate after login
  };

  const handleSocialLogin = (provider) => {
    alert(`Login with ${provider} clicked!`);
    router.push("/dashboard"); // Navigate after social login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-200"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-black mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
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
            Login
          </motion.button>

       
        </form>
   <a href="/ForgetPassword" className="text-indigo-600 hover:underline float-right pt-1 ">
            Forget Password ?
          </a>

        <div className="mt-8 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/Signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleSocialLogin("Google")}
            className="px-2 py-2 bg-gray-100 text-black rounded-xl shadow-md hover:bg-gray-200 transition flex items-center gap-2"
          >
            <FaGoogle /> Google
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => handleSocialLogin("Facebook")}
            className="px-2 py-2 bg-gray-100 text-black rounded-xl shadow-md hover:bg-gray-200 transition flex items-center gap-2"
          >
            <FaFacebookF /> Facebook
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
