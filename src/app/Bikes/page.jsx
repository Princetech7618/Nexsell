"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../Components/Hero";
import Card from "../Card/pages";

// Sample 20 bikes data
const bikesData = [
  {
    id: 1,
    title: "Royal Enfield Classic 350",
    price: "₹1,50,000",
    location: "Delhi",
    category: "Classic",
    brand: "Royal Enfield",
    img: "https://images.pexels.com/photos/17693829/pexels-photo-17693829.jpeg",
  },
  {
    id: 2,
    title: "Honda CB Shine",
    price: "₹90,000",
    location: "Mumbai",
    category: "Commuter",
    brand: "Honda",
    img: "https://images.pexels.com/photos/1166751/pexels-photo-1166751.jpeg",
  },
  {
    id: 3,
    title: "Bajaj Pulsar NS200",
    price: "₹1,45,000",
    location: "Pune",
    category: "Sports",
    brand: "Bajaj",
    img: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg",
  },
  {
    id: 4,
    title: "TVS Apache RTR 160",
    price: "₹1,29,000",
    location: "Hyderabad",
    category: "Sports",
    brand: "TVS",
    img: "https://images.pexels.com/photos/3778707/pexels-photo-3778707.jpeg",
  },
  {
    id: 5,
    title: "Hero Splendor Plus",
    price: "₹75,000",
    location: "Jaipur",
    category: "Commuter",
    brand: "Hero",
    img: "https://images.pexels.com/photos/382753/pexels-photo-382753.jpeg",
  },
  {
    id: 6,
    title: "KTM Duke 200",
    price: "₹2,15,000",
    location: "Bengaluru",
    category: "Sports",
    brand: "KTM",
    img: "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
  },
  {
    id: 7,
    title: "Royal Enfield Himalayan",
    price: "₹1,80,000",
    location: "Chennai",
    category: "Adventure",
    brand: "Royal Enfield",
    img: "https://images.pexels.com/photos/896688/pexels-photo-896688.jpeg",
  },
  {
    id: 8,
    title: "Suzuki Access 125",
    price: "₹65,000",
    location: "Ahmedabad",
    category: "Scooter",
    brand: "Suzuki",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  },
  {
    id: 9,
    title: "Yamaha FZ-S",
    price: "₹1,05,000",
    location: "Kolkata",
    category: "Commuter",
    brand: "Yamaha",
    img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
  },
  {
    id: 10,
    title: "Honda Activa 6G",
    price: "₹60,000",
    location: "Delhi",
    category: "Scooter",
    brand: "Honda",
    img: "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
  },
  {
    id: 11,
    title: "Bajaj Avenger Cruise 220",
    price: "₹1,40,000",
    location: "Mumbai",
    category: "Cruiser",
    brand: "Bajaj",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    id: 12,
    title: "Yamaha R15 V4",
    price: "₹1,80,000",
    location: "Pune",
    category: "Sports",
    brand: "Yamaha",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
  },
  {
    id: 13,
    title: "Hero Karizma ZMR",
    price: "₹90,000",
    location: "Bengaluru",
    category: "Sports",
    brand: "Hero",
    img: "https://images.pexels.com/photos/158056/motorcycle-street-bikelife-bike-158056.jpeg",
  },
  {
    id: 14,
    title: "TVS Jupiter",
    price: "₹80,000",
    location: "Chennai",
    category: "Scooter",
    brand: "TVS",
    img: "https://images.pexels.com/photos/369941/pexels-photo-369941.jpeg",
  },
  {
    id: 15,
    title: "KTM RC 200",
    price: "₹2,30,000",
    location: "Jaipur",
    category: "Sports",
    brand: "KTM",
    img: "https://images.pexels.com/photos/237692/pexels-photo-237692.jpeg",
  },
  {
    id: 16,
    title: "Royal Enfield Bullet 350",
    price: "₹1,50,000",
    location: "Hyderabad",
    category: "Classic",
    brand: "Royal Enfield",
    img: "https://images.pexels.com/photos/2175298/pexels-photo-2175298.jpeg",
  },
  {
    id: 17,
    title: "Yamaha Fascino 125",
    price: "₹62,000",
    location: "Delhi",
    category: "Scooter",
    brand: "Yamaha",
    img: "https://images.pexels.com/photos/237692/pexels-photo-237692.jpeg",
  },
  {
    id: 18,
    title: "Honda CB Hornet 160R",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Sports",
    brand: "Honda",
    img: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg",
  },
  {
    id: 19,
    title: "Bajaj CT 100",
    price: "₹55,000",
    location: "Kolkata",
    category: "Commuter",
    brand: "Bajaj",
    img: "https://images.pexels.com/photos/1059942/pexels-photo-1059942.jpeg",
  },
  {
    id: 20,
    title: "Hero Maestro Edge",
    price: "₹65,000",
    location: "Pune",
    category: "Scooter",
    brand: "Hero",
    img: "https://images.pexels.com/photos/382996/pexels-photo-382996.jpeg",
  },
];

const categories = [
  "All",
  "Classic",
  "Commuter",
  "Sports",
  "Scooter",
  "Adventure",
  "Cruiser",
];

const brands = [
  "All",
  "Royal Enfield",
  "Honda",
  "Bajaj",
  "TVS",
  "Hero",
  "Yamaha",
  "KTM",
  "Suzuki",
];

export default function BikesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");

  const [likedBikes, setLikedBikes] = useState([]);

  // Load liked bikes from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedBikes")) || [];
    setLikedBikes(stored);
  }, []);

  // Toggle like/unlike
  const toggleLike = (bike) => {
    setLikedBikes((prev) => {
      const exists = prev.some((b) => b.id === bike.id);
      const updated = exists
        ? prev.filter((b) => b.id !== bike.id)
        : [...prev, { ...bike, type: "bike" }];

      localStorage.setItem("likedBikes", JSON.stringify(updated));
      window.dispatchEvent(new Event("savedItemsUpdated"));
      return updated;
    });
  };

  // Filter bikes
  const filteredBikes = bikesData.filter(
    (bike) =>
      (activeCategory === "All" || bike.category === activeCategory) &&
      (activeBrand === "All" || bike.brand === activeBrand)
  );

  return (
    <>
      <HeroSection
        tittle="Find Your Perfect Used Bike Today"
        text="✔ Bikes for every budget — from commuters to superbikes"
        bgImg="https://images.unsplash.com/photo-1524429656589-6633a470097c"
      />

      <main className="bg-white  min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        Explore Bikes
        </h1>

        {/* Filters */}
        <section className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <div>
            <h3 className="text-lg font-serif mb-3 text-gray-700">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
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

          <div>
            <h3 className="text-lg font-serif mb-3 text-gray-700">
              Filter by Brand
            </h3>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
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

        {/* Bikes Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-serif">
          {filteredBikes.length > 0 ? (
            filteredBikes.map((bike) => (
              <Card
                key={bike.id}
                ad={bike}
                liked={likedBikes.some((b) => b.id === bike.id)}
                img={bike.img}
                title={bike.title}
                price={bike.price}
                location={bike.location}
                onLike={() => toggleLike(bike)}
                onClick={() => router.push(`/BikesDetails/${bike.id}`)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No bikes found.
            </p>
          )}
        </section>

        {/* Extra Content */}
        <section className="mt-16 bg-indigo-200/50 rounded-3xl p-10 text-center shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl text-gray-800 font-bold mb-6">
            Why Choose Nexsell for Bikes?
          </h3>
          <p className="text-gray-700 font-sm max-w-3xl mx-auto leading-relaxed text-lg">
            Nexsell provides a trusted marketplace for quality bikes with verified sellers and buyers. Enjoy hassle-free browsing with powerful filters, real-time updates, and a seamless experience across all devices.
          </p>
        </section>

        {/* Gradient animation */}
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
