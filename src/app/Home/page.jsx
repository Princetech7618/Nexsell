"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "../Components/Hero";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Card from "../Card/pages";

function AnimatedNumber({ value, duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const end =
      typeof value === "number"
        ? value
        : parseFloat(value.toString().replace(/[^\d.]/g, "")) || 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const ratio = Math.min(progress / duration, 1);
      const current = end * ratio;
      setCount(current);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

const categories = [
  "All",
  "Mobiles",
  "Cars",
  "Bikes",
  "Electronics",
  "Commercial",
];
const brands = [
  "All",
  "Apple",
  "Samsung",
  "Redmi",
  "Maruti",
  "Hyundai",
  "Royal Enfield",
  "Sony",
  "Dell",
  "LG",
  "Tata",
  "Mahindra",
  "Ashok Leyland",
];

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Mumbai",
    feedback:
      "Nexsell helped me sell my bike within 24 hours! Super smooth experience.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    location: "Delhi",
    feedback:
      "Amazing platform for finding verified buyers. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Verma",
    location: "Bengaluru",
    feedback:
      "User interface is clean and easy. Got a great deal on my used car!",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const featuredAds = [
  {
    id: 1,
    title: "iPhone 13 – 128GB, Excellent Condition",
    price: "₹42,500",
    location: "Delhi",
    category: "Mobiles",
    img: "https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21 FE – 5G",
    price: "₹23,000",
    location: "Mumbai",
    category: "Mobiles",
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
  },
  {
    id: 3,
    title: "Redmi Note 12 Pro – 6GB RAM",
    price: "₹14,500",
    location: "Jaipur",
    category: "Mobiles",
    img: "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
  },
  {
    id: 4,
    title: "Maruti Swift 2019 VXI",
    price: "₹4,50,000",
    location: "Jaipur",
    category: "Cars",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    id: 5,
    title: "Royal Enfield Classic 350 – 2021",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Bikes",
    img: "/img/Home1.avif",
  },
  {
    id: 6,
    title: "Hyundai i20 2018 Sports",
    price: "₹3,95,000",
    location: "Pune",
    category: "Cars",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  },
  {
    id: 7,
    title: "Sony 55-inch 4K Smart TV – HDR",
    price: "₹36,000",
    location: "Bengaluru",
    category: "Electronics",
    img: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg",
  },
  {
    id: 8,
    title: "Dell Inspiron i5 Laptop – 8GB RAM",
    price: "₹28,000",
    location: "Pune",
    category: "Electronics",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 9,
    title: "LG 1.5 Ton Inverter AC – 5 Star",
    price: "₹22,500",
    location: "Chandigarh",
    category: "Electronics",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    id: 10,
    title: "Tata Ace Gold – 2018 Model",
    price: "₹2,25,000",
    location: "Ahmedabad",
    category: "Commercial",
    img: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
  },
  {
    id: 11,
    title: "Mahindra Bolero Pickup – 2020",
    price: "₹3,10,000",
    location: "Indore",
    category: "Commercial",
    img: "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
  },
  {
    id: 12,
    title: "Ashok Leyland Dost – 2019",
    price: "₹4,80,000",
    location: "Kolkata",
    category: "Commercial",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
];
const trendingDeals = [
  {
    id: 1,
    title: "iPhone 13 – Like New",
    price: "₹42,000",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    location: "Mumbai",
  },
  {
    id: 2,
    title: "Honda Activa 2020",
    price: "₹52,000",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    location: "Delhi",
  },
  {
    id: 3,
    title: "HP Victus Gaming Laptop",
    price: "₹58,000",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    location: "Pune",
  },
  {
    id: 4,
    title: "Maruti Swift 2019 – VXI",
    price: "₹4,80,000",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    location: "Bangalore",
  },
  {
    id: 5,
    title: "Sony Bravia 55-inch 4K TV",
    price: "₹39,000",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    location: "Hyderabad",
  },
  {
    id: 6,
    title: "MacBook Air M1 – 2021",
    price: "₹62,000",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    location: "Chennai",
  },
];

export default function Home() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 9999999]);
  const [searchText, setSearchText] = useState("");
  // FIXED — store as array
  const [likedListingAds, setLikedListingAds] = useState([]);
  const [likedTrendingAds, setLikedTrendingAds] = useState([]);
  const toggleListingLike = (ad) => {
    const newAd = { ...ad, type: "listing" }; // 🟢 type added
    setLikedListingAds((prev) => {
      const exists = prev.some((item) => item.id === newAd.id);
      const updated = exists
        ? prev.filter((item) => item.id !== newAd.id)
        : [...prev, newAd];
      localStorage.setItem("likedListingAds", JSON.stringify(updated));
      window.dispatchEvent(new Event("savedItemsUpdated"));
      return updated;
    });
  };

  const toggleTrendingLike = (deal) => {
    const newDeal = { ...deal, type: "trending" }; // 🟢 type added
    setLikedTrendingAds((prev) => {
      const exists = prev.some((item) => item.id === newDeal.id);
      const updated = exists
        ? prev.filter((item) => item.id !== newDeal.id)
        : [...prev, newDeal];
      localStorage.setItem("likedTrendingAds", JSON.stringify(updated));
      window.dispatchEvent(new Event("savedItemsUpdated"));
      return updated;
    });
  };

  useEffect(() => {
    const updateSaved = () => {
      const listingSaved =
        JSON.parse(localStorage.getItem("likedListingAds")) || [];
      setLikedListingAds(listingSaved);
    };

    window.addEventListener("savedItemsUpdated", updateSaved);
    return () => window.removeEventListener("savedItemsUpdated", updateSaved);
  }, []);

  useEffect(() => {
    const updateSaved = () => {
      const trendingSaved =
        JSON.parse(localStorage.getItem("likedTrendingAds")) || [];
      setLikedTrendingAds(trendingSaved);
    };

    window.addEventListener("savedItemsUpdated", updateSaved);
    return () => window.removeEventListener("savedItemsUpdated", updateSaved);
  }, []);

  function getBrandFromTitle(title) {
    for (const brand of brands.slice(1)) {
      if (title.toLowerCase().includes(brand.toLowerCase().replace(/ /g, ""))) {
        return brand;
      }
    }
    if (title.toLowerCase().includes("swift")) return "Maruti";
    if (title.toLowerCase().includes("i20")) return "Hyundai";
    if (title.toLowerCase().includes("note")) return "Redmi";
    return "";
  }

  const filteredAds = featuredAds.filter((ad) => {
    const catMatch =
      selectedCategory === "All" || ad.category === selectedCategory;
    const brandMatch =
      selectedBrand === "All" || getBrandFromTitle(ad.title) === selectedBrand;
    const adPrice = parseInt(ad.price.replace(/[^\d]/g, "").replace(/,/g, ""));
    const priceMatch = adPrice >= priceRange[0] && adPrice <= priceRange[1];
    const search =
      searchText === "" ||
      ad.title.toLowerCase().includes(searchText.toLowerCase()) ||
      ad.location.toLowerCase().includes(searchText.toLowerCase());
    return catMatch && brandMatch && priceMatch && search;
  });

  return (
    <main className="overflow-hidden bg-white text-gray-900 font-sm">
      {/* HERO */}
      <HeroSection
        tittle="Sell Anything, Anytime, Anywhere"
        bgImg="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
        text="Buy & Sell Cars, Bikes, Scooters — Fast, Safe, and Easy in Your City!"
      />

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-lg">
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md text-sm w-40"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="p-2 border rounded-md text-sm w-40"
            >
              {brands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Price Range:</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange[0]}
                min={0}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                placeholder="From"
                className="p-2 border rounded-md text-sm w-20"
              />
              <input
                type="number"
                value={priceRange[1]}
                min={0}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                placeholder="To"
                className="p-2 border rounded-md text-sm w-20"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="text-gray-700 mb-1">Search:</label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="By title or location..."
              className="p-2 border rounded-md text-sm w-full"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBrand("All");
                setPriceRange([0, 9999999]);
                setSearchText("");
              }}
              className="p-2 mt-5 cursor-pointer bg-indigo-500 text-white rounded-full shadow transition hover:bg-indigo-600"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED ADS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-5xl mb-6 font-bold text-gray-600 text-center">
          Latest Listings
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAds.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-20">
              No listings found.
            </div>
          ) : (
            filteredAds.map((ad) => (
              <Card
                key={ad.id}
                ad={ad}
                img={ad.img}
                title={ad.title}
                price={ad.price}
                location={ad.location}
                liked={likedListingAds.some((item) => item.id === ad.id)}
                onLike={() => toggleListingLike(ad)}
                onClick={() => router.push(`/Homedetails/${ad.id}`)}
              />
            ))
          )}
        </div>
      </section>

      {/* About Section */}

      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center bg-indigo-50 rounded-3xl shadow-lg gap-8">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
            alt="About Nexsell"
            className="w-full h-full rounded"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800  mb-2">
            About Nexsell
          </h2>
          <div className="text-gray-700 mb-2 text-lg">
            <p>
              ✔ Buy & sell Cars, Bikes, Electronics, Mobiles & more in one
              place.
            </p>
            <p>
              ✔ Find exactly what you’re looking for with location, price, brand
              & category filters.
            </p>
            <p> ✔ No middleman; chat and deal securely with real users. </p>
            <p> ✔ Save your favourite listings and compare them anytime.</p>
            <p> ✔ Only genuine listings with strong fraud-prevention checks.</p>
            <p>✔ Upload photos, add details and publish your ad in minutes. </p>
            <p>✔ Discover deals near you for faster and safer transactions. </p>
            <p>✔ Clean design for easy browsing on any device. </p>
            <p>
              ✔ Manage listings, chats, notifications and saved ads in one
              place.
            </p>
          </div>
          <button
            onClick={() => router.push("/About")}
            className="cursor-pointer  bg-indigo-600 hover:bg-indigo-700 p-2 rounded-xl text-white shadow transition"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* ====================== TRENDING DEALS ====================== */}
      <section className="bg-gray-100 py-10">
        <h1 className="text-5xl text-center  mb-4 text-gray-600 font-bold">
          Treanding Deals
        </h1>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingDeals.map((deal) => (
              <Card
                key={deal.id}
                ad={deal}
                img={deal.img}
                title={deal.title}
                price={deal.price}
                location={deal.location}
                liked={likedTrendingAds.some((item) => item.id === deal.id)}
                onLike={() => toggleTrendingLike(deal)}
                onClick={() => router.push(`/TreandingDetails/${deal.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY NEXSELL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12 text-gray-700">
            Why Choose Nexsell?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-indigo-100/50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Fast Selling
              </h3>
              <p>Post your ad & get buyers quickly.</p>
            </div>
            <div className="p-8 bg-indigo-100/50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Verified Buyers
              </h3>
              <p>Connect with genuine people.</p>
            </div>
            <div className="p-8 bg-indigo-100/50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Secure Platform
              </h3>
              <p>Safe & scam-free experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-gray-600 font-bold  mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-indigo-200/50 rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 italic">"{t.feedback}"</p>
                <h4 className="mt-4 font-bold text-xl text-indigo-600">
                  {t.name}
                </h4>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
