"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card({ id, img, title, price, location, liked, onLike, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className="bg-white  rounded overflow-hidden border-gray-400/80 border   cursor-pointer relative"
    >
      {/* Like / Unlike Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onLike(id);
        }}
        className="absolute top-3  right-3 bg-white cursor-pointer  p-2 rounded-full shadow-md text-black hover:scale-110 transition z-10"
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Image */}
      <img src={img} className="w-full p-2 h-52 object-cover" />

      {/* Content */}
      <div className="px-3">
        <h3 className="font-sm text-xl text-gray-400 ">{title}</h3>
      </div>
      <div className="flex px-3 py-3 justify-between items-center">
                <p className="text-black font-bold text-xl ">{price}</p>
        <p className="text-gray-400 font-sm text-xl  ">{location}</p>

      </div>
    </motion.div>
  );
}
