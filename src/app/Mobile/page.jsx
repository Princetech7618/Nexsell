"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../Components/Hero";
import Card from "../Card/pages";

// Sample 20 mobiles data
const mobilesData = [
  {
    id: 1,
    title: "Samsung Galaxy S23 Ultra",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Flagship",
    brand: "Samsung",
    img: "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
  },
  {
    id: 2,
    title: "iPhone 14 Pro Max",
    price: "₹1,35,000",
    location: "Delhi",
    category: "Flagship",
    brand: "Apple",
    img: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg",
  },
  {
    id: 3,
    title: "OnePlus 11",
    price: "₹65,000",
    location: "Bengaluru",
    category: "Mid-range",
    brand: "OnePlus",
    img: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
  },
  {
    id: 4,
    title: "Xiaomi Redmi Note 12 Pro",
    price: "₹18,000",
    location: "Pune",
    category: "Budget",
    brand: "Xiaomi",
    img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
  },
  {
    id: 5,
    title: "Realme GT Neo 3",
    price: "₹28,000",
    location: "Hyderabad",
    category: "Mid-range",
    brand: "Realme",
    img: "https://images.pexels.com/photos/1670711/pexels-photo-1670711.jpeg",
  },
  {
    id: 6,
    title: "Google Pixel 7 Pro",
    price: "₹70,000",
    location: "Chennai",
    category: "Flagship",
    brand: "Google",
    img: "https://images.pexels.com/photos/11850222/pexels-photo-11850222.jpeg",
  },
  {
    id: 7,
    title: "Motorola G82",
    price: "₹15,000",
    location: "Ahmedabad",
    category: "Budget",
    brand: "Motorola",
    img: "https://images.pexels.com/photos/1440363/pexels-photo-1440363.jpeg",
  },
  {
    id: 8,
    title: "Samsung Galaxy A53",
    price: "₹24,000",
    location: "Kolkata",
    category: "Mid-range",
    brand: "Samsung",
    img: "https://images.pexels.com/photos/1462680/pexels-photo-1462680.jpeg",
  },
  {
    id: 9,
    title: "iPhone SE (2022)",
    price: "₹35,000",
    location: "Delhi",
    category: "Budget",
    brand: "Apple",
    img: "https://images.pexels.com/photos/5077040/pexels-photo-5077040.jpeg",
  },
  {
    id: 10,
    title: "OnePlus Nord CE 3",
    price: "₹20,000",
    location: "Mumbai",
    category: "Budget",
    brand: "OnePlus",
    img: "https://images.pexels.com/photos/5405183/pexels-photo-5405183.jpeg",
  },
  {
    id: 11,
    title: "Xiaomi Poco F5 Pro",
    price: "₹38,000",
    location: "Bengaluru",
    category: "Mid-range",
    brand: "Xiaomi",
    img: "https://images.pexels.com/photos/3184409/pexels-photo-3184409.jpeg",
  },
  {
    id: 12,
    title: "Realme 10 Pro+",
    price: "₹20,000",
    location: "Pune",
    category: "Budget",
    brand: "Realme",
    img: "https://images.pexels.com/photos/7550188/pexels-photo-7550188.jpeg",
  },
  {
    id: 13,
    title: "Google Pixel 6a",
    price: "₹25,000",
    location: "Hyderabad",
    category: "Budget",
    brand: "Google",
    img: "https://images.pexels.com/photos/9148696/pexels-photo-9148696.jpeg",
  },
  {
    id: 14,
    title: "Motorola Edge 30",
    price: "₹32,000",
    location: "Chennai",
    category: "Mid-range",
    brand: "Motorola",
    img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
  },
  {
    id: 15,
    title: "Samsung Galaxy Z Flip4",
    price: "₹90,000",
    location: "Ahmedabad",
    category: "Flagship",
    brand: "Samsung",
    img: "https://images.pexels.com/photos/1614024/pexels-photo-1614024.jpeg",
  },
  {
    id: 16,
    title: "iPhone 13 Mini",
    price: "₹55,000",
    location: "Kolkata",
    category: "Mid-range",
    brand: "Apple",
    img: "https://images.pexels.com/photos/5405183/pexels-photo-5405183.jpeg",
  },
  {
    id: 17,
    title: "OnePlus 10T",
    price: "₹45,000",
    location: "Delhi",
    category: "Flagship",
    brand: "OnePlus",
    img: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
  },
  {
    id: 18,
    title: "Xiaomi Redmi 12",
    price: "₹12,000",
    location: "Mumbai",
    category: "Budget",
    brand: "Xiaomi",
    img: "https://images.pexels.com/photos/1270286/pexels-photo-1270286.jpeg",
  },
  {
    id: 19,
    title: "Realme Narzo 60",
    price: "₹11,000",
    location: "Bengaluru",
    category: "Budget",
    brand: "Realme",
    img: "https://images.pexels.com/photos/4207834/pexels-photo-4207834.jpeg",
  },
  {
    id: 20,
    title: "Google Pixel 5",
    price: "₹40,000",
    location: "Pune",
    category: "Mid-range",
    brand: "Google",
    img: "https://images.pexels.com/photos/1251909/pexels-photo-1251909.jpeg",
  },
];

const categories = ["All", "Flagship", "Mid-range", "Budget"];
const brands = [
  "All",
  "Samsung",
  "Apple",
  "OnePlus",
  "Xiaomi",
  "Realme",
  "Google",
  "Motorola",
];

export default function MobilesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");

  const [likedMobile, setLikedMobile] = useState([]);

  // Load liked mobiles from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedMobile")) || [];
    setLikedMobile(stored);
  }, []);

  // Toggle like/unlike
  const toggleLike = (mobile) => {
    setLikedMobile((prev) => {
      const exists = prev.some((m) => m.id === mobile.id);
      const updated = exists
        ? prev.filter((m) => m.id !== mobile.id)
        : [...prev, { ...mobile, type: "mobile" }];

      localStorage.setItem("likedMobile", JSON.stringify(updated));
      window.dispatchEvent(new Event("savedItemsUpdated"));
      return updated;
    });
  };

  const filteredMobiles = mobilesData.filter(
    (mobile) =>
      (activeCategory === "All" || mobile.category === activeCategory) &&
      (activeBrand === "All" || mobile.brand === activeBrand)
  );

  return (
    <>
      {/* Hero */}
      <HeroSection
        tittle="Buy & Sell Used Mobile Phones Easily"
        text="Buy and sell used mobile phones with confidence. Verified listings, great prices, and quick deals."
        bgImg="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
      />

      <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <h1 className="text-5xl mt-5 font-bold text-gray-800 mb-8 text-center">
          Explore Mobiles 
        </h1>

        {/* Filters */}
        <section className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-serif mb-3 text-gray-700">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg border text-sm font-serif transition ${
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
            <h3 className="text-lg font-serif mb-3 text-gray-700">
              Filter by Brand
            </h3>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-4 py-2 rounded-lg border text-sm font-serif transition ${
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

        {/* Mobiles Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMobiles.length > 0 ? (
            filteredMobiles.map((mobile) => (
              <Card
                key={mobile.id}
                ad={mobile}
                liked={likedMobile.some((m) => m.id === mobile.id)}
                img={mobile.img}
                title={mobile.title}
                price={mobile.price}
                location={mobile.location}
                onLike={() => toggleLike(mobile)}
                onClick={() => router.push(`/MobileDetails/${mobile.id}`)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No mobiles found.
            </p>
          )}
        </section>

        {/* Extra Content */}
        <section className="mt-16 bg-indigo-200/50 rounded-3xl p-10 text-center shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">
            Why Choose Nexsell for Mobile Phones?
          </h3>
          <p className="text-gray-700 font-sm max-w-3xl mx-auto leading-relaxed text-lg">
            Nexsell is your trusted platform to buy and sell mobile phones with confidence. Our verified listings, advanced filters, and seamless experience ensure you find the perfect mobile device, while offering a safe marketplace for buyers and sellers across India.
          </p>
        </section>

        {/* Tailwind animated gradient */}
        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% center; }
            50% { background-position: 100% center; }
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
