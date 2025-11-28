"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function DetailsCard({ ad }) {
  const [liked, setLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check localStorage if already liked
  useEffect(() => {
    const savedAds = JSON.parse(localStorage.getItem("savedAds")) || [];
    setLiked(savedAds.some((item) => item.id === ad.id));
  }, [ad.id]);

  // Save / Remove from localStorage + Broadcast update
  const toggleLike = () => {
    let savedAds = JSON.parse(localStorage.getItem("savedAds")) || [];

    if (liked) {
      savedAds = savedAds.filter((item) => item.id !== ad.id);
    } else {
      savedAds.push(ad);
    }

    localStorage.setItem("savedAds", JSON.stringify(savedAds));
    setLiked(!liked);

    // Notify all pages
    window.dispatchEvent(new Event("storageUpdated"));
  };

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === ad.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [ad.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white shadow-lg rounded-2xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row relative"
    >
      {/* ♥️ Like Button */}
      {/* <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={toggleLike}
        className="absolute top-4 right-4 z-20 bg-white rounded-full p-3 shadow-md"
      >
        {liked ? <FaHeart size={26} className="text-black" /> : <FaRegHeart size={26} className="text-gray-700" />}
      </motion.button> */}

      {/* Image Slider */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        {ad.images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {ad.images.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${
                currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="p-6 md:w-1/2 flex flex-col">
        <h1 className="text-3xl font-bold">{ad.title}</h1>
        <p className="text-2xl font-semibold text-indigo-800 mb-4">{ad.price}</p>

        <p className="text-gray-700"><strong>Location:</strong> {ad.location}</p>
        <p className="text-gray-700"><strong>Category:</strong> {ad.category}</p>
        <p className="text-gray-700"><strong>Posted:</strong> {ad.posted}</p>

        <p className="mt-4 text-gray-700">{ad.description}</p>

        {ad.features?.length > 0 && (
          <div className="mt-5">
            <h2 className="font-semibold text-lg mb-2">Features:</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {ad.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>
        )}

        <a href="/SellerContact" className="mt-7 px-6 py-3 bg-indigo-600 text-white rounded-lg text-center">
          Chat with Seller
        </a>
      </div>
    </motion.div>
  );
}
