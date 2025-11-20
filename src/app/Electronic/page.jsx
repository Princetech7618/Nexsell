"use client";

import React, { useState } from "react";
import Link from "next/link";

import HeroSection from "../Components/Hero";

// Sample 20 electronics data with category and brand
const electronicsData = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Headphones",
    price: "₹25,000",
    location: "Mumbai",
    category: "Headphones",
    brand: "Sony",
    img: "https://images.pexels.com/photos/339466/pexels-photo-339466.jpeg",
  },
  {
    id: 2,
    title: "Apple MacBook Air M2",
    price: "₹1,20,000",
    location: "Delhi",
    category: "Laptop",
    brand: "Apple",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 3,
    title: "Samsung 4K Smart TV",
    price: "₹55,000",
    location: "Bengaluru",
    category: "Television",
    brand: "Samsung",
    img: "https://images.pexels.com/photos/40815/pexels-photo-40815.jpeg",
  },
  {
    id: 4,
    title: "Dell Inspiron 15",
    price: "₹45,000",
    location: "Pune",
    category: "Laptop",
    brand: "Dell",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 5,
    title: "Bose SoundLink Speaker",
    price: "₹15,000",
    location: "Hyderabad",
    category: "Speaker",
    brand: "Bose",
    img: "https://images.pexels.com/photos/1117933/pexels-photo-1117933.jpeg",
  },
  {
    id: 6,
    title: "Apple iPad Pro",
    price: "₹80,000",
    location: "Chennai",
    category: "Tablet",
    brand: "Apple",
    img: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg",
  },
  {
    id: 7,
    title: "Sony PlayStation 5",
    price: "₹50,000",
    location: "Ahmedabad",
    category: "Gaming Console",
    brand: "Sony",
    img: "https://images.pexels.com/photos/716363/pexels-photo-716363.jpeg",
  },
  {
    id: 8,
    title: "Logitech MX Master 3 Mouse",
    price: "₹8,000",
    location: "Kolkata",
    category: "Accessories",
    brand: "Logitech",
    img: "https://images.pexels.com/photos/819711/pexels-photo-819711.jpeg",
  },
  {
    id: 9,
    title: "HP Pavilion Gaming Laptop",
    price: "₹70,000",
    location: "Delhi",
    category: "Laptop",
    brand: "HP",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 10,
    title: "Amazon Echo Dot",
    price: "₹4,500",
    location: "Mumbai",
    category: "Smart Home",
    brand: "Amazon",
    img: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg",
  },
  {
    id: 11,
    title: "Canon EOS 1500D DSLR",
    price: "₹28,000",
    location: "Bengaluru",
    category: "Camera",
    brand: "Canon",
    img: "https://images.pexels.com/photos/159106/pexels-photo-159106.jpeg",
  },
  {
    id: 12,
    title: "Apple Watch Series 8",
    price: "₹40,000",
    location: "Pune",
    category: "Wearable",
    brand: "Apple",
    img: "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg",
  },
  {
    id: 13,
    title: "Samsung Galaxy Tab S8",
    price: "₹55,000",
    location: "Hyderabad",
    category: "Tablet",
    brand: "Samsung",
    img: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg",
  },
  {
    id: 14,
    title: "JBL Flip 5 Speaker",
    price: "₹7,000",
    location: "Chennai",
    category: "Speaker",
    brand: "JBL",
    img: "https://images.pexels.com/photos/1117933/pexels-photo-1117933.jpeg",
  },
  {
    id: 15,
    title: "Microsoft Surface Laptop 4",
    price: "₹85,000",
    location: "Ahmedabad",
    category: "Laptop",
    brand: "Microsoft",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 16,
    title: "Nintendo Switch",
    price: "₹28,000",
    location: "Kolkata",
    category: "Gaming Console",
    brand: "Nintendo",
    img: "https://images.pexels.com/photos/716363/pexels-photo-716363.jpeg",
  },
  {
    id: 17,
    title: "Sony Alpha a6400",
    price: "₹60,000",
    location: "Delhi",
    category: "Camera",
    brand: "Sony",
    img: "https://images.pexels.com/photos/159106/pexels-photo-159106.jpeg",
  },
  {
    id: 18,
    title: "Fitbit Charge 5",
    price: "₹12,000",
    location: "Mumbai",
    category: "Wearable",
    brand: "Fitbit",
    img: "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg",
  },
  {
    id: 19,
    title: "Google Nest Hub",
    price: "₹8,000",
    location: "Bengaluru",
    category: "Smart Home",
    brand: "Google",
    img: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg",
  },
  {
    id: 20,
    title: "Logitech C920 Webcam",
    price: "₹7,500",
    location: "Pune",
    category: "Accessories",
    brand: "Logitech",
    img: "https://images.pexels.com/photos/819711/pexels-photo-819711.jpeg",
  },
];

// Categories & Brands for filter buttons
const categories = [
  "All",
  "Laptop",
  "Smart Home",
  "Camera",
  "Wearable",
  "Gaming Console",
  "Speaker",
  "Accessories",
  "Headphones",
  "Tablet",
];

const brands = [
  "All",
  "Apple",
  "Samsung",
  "Sony",
  "Google",
  "Dell",
  "HP",
  "Amazon",
  "Bose",
  "Microsoft",
  "Canon",
  "JBL",
  "Logitech",
  "Nintendo",
  "Fitbit",
];

export default function ElectronicsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");

  // Filtering data based on active filters
  const filteredElectronics = electronicsData.filter(
    (item) =>
      (activeCategory === "All" || item.category === activeCategory) &&
      (activeBrand === "All" || item.brand === activeBrand)
  );

  return (
  <>


       {/* Hero  */}
<HeroSection     
tittle={"Electronics for Sale"}
text={"Find the best deals on mobiles, laptops, gadgets & home electronics — all in one place."}
bgImg={"https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1600"}

/>


    <main className="bg-white min-h-screen py-10 font-serif px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl font-semibold text-indigo-500 mb-8 text-center">
        Electronics for Sale
      </h1>

      {/* Filters */}
      <section className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        {/* Category Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3 max-w-xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition whitespace-nowrap
                  ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white border-transparent animate-gradient-x"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Filter by Brand
          </h3>
          <div className="flex flex-wrap gap-3 max-w-xl mx-auto">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition whitespace-nowrap
                  ${
                    activeBrand === brand
                      ? "bg-indigo-600 text-white border-transparent animate-gradient-x"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                aria-pressed={activeBrand === brand}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Grid */}
   <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredElectronics.length > 0 ? (
    filteredElectronics.map((item) => (
      <Link
        key={item.id}
        href={`/ElectronicsDetails/${item.id}`}
        className="block group"
      >
        <article
          className="w-full max-w-[400px] mx-auto bg-white border border-gray-200 
          rounded-xl overflow-hidden shadow-sm transition-all duration-300
          group-hover:shadow-xl group-hover:-translate-y-1"
        >
          {/* IMAGE */}
          <div className="overflow-hidden h-44">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 
              group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* CONTENT */}
          <div className="p-4 space-y-1">
            {/* TITLE */}
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-1 
            group-hover:text-indigo-700 transition">
              {item.title}
            </h2>

            {/* PRICE */}
            <p className="text-indigo-700 font-bold text-md"> {item.price}</p>

            {/* LOCATION */}
            <p classname="text-gray-500 text-md">{item.location}</p>

            {/* TAGS */}
            <div className="mt-2 flex flex-wrap gap-2 text-md font-medium">
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                {item.category}
              </span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                {item.brand}
              </span>
            </div>
          </div>
        </article>
      </Link>
    ))
  ) : (
    <p className="text-center col-span-full text-gray-500 text-lg">
      No electronics found.
    </p>
  )}
</section>


      {/* Extra Content Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-white rounded-3xl p-10 text-center shadow-lg max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-indigo-600 mb-6">
          Why Choose Nexsell for Electronics?
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          Nexsell offers a reliable marketplace for electronics where buyers and
          sellers connect seamlessly. With secure transactions, verified listings,
          and advanced filters, finding the perfect gadget or selling yours has
          never been easier.
        </p>
      </section>

      {/* Tailwind animated gradient */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </main>
  
  </>
  );
}
