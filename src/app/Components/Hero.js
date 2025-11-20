"use client";

import React, { useState } from "react";

export default function HeroSection({ tittle, text, bgImg }) {
  // const [search, setSearch] = useState("");

  return (
    <section
      className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30 "></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif drop-shadow-lg animate-pulse">
          {tittle}
        </h1>

        <p className="text-base  font-serif sm:text-lg md:text-xl mt-4 opacity-90 leading-relaxed">
          {text}
        </p>

        {/* Search Box */}
        {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-[350px] px-4 py-3 rounded-xl text-black shadow-xl outline-none border border-gray-300 focus:ring-4 focus:ring-indigo-500 transition"
          />

          <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition text-white font-semibold shadow-xl hover:shadow-2xl">
            Search
          </button>
        </div> */}

        {/* Bottom Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm md:text-base font-medium mt-10">
          <span className="bg-white/10 font-serif backdrop-blur-md p-2 rounded-full border border-white/20 hover:bg-indigo-500/30 transition cursor-pointer whitespace-nowrap">
             Live Listings
          </span>

          <span className="bg-white/10 font-serif backdrop-blur-md p-2 rounded-full border border-white/20 hover:bg-indigo-500/30 transition cursor-pointer whitespace-nowrap">
            Verified Sellers
          </span>
        </div>
      </div>
    </section>
  );
}
