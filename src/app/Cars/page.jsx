"use client";

import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Card from "../Card/pages";
import { useRouter } from "next/navigation";

const carsData = [
  {
    id: 1,
    title: "Hyundai Creta 2022",
    price: "₹15,50,000",
    location: "Mumbai",
    category: "SUV",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
  },
  {
    id: 2,
    title: "Maruti Swift 2020",
    price: "₹7,00,000",
    location: "Pune",
    category: "Hatchback",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    id: 3,
    title: "Honda City 2019",
    price: "₹9,50,000",
    location: "Delhi",
    category: "Sedan",
    brand: "Honda",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  },
  {
    id: 4,
    title: "Tata Nexon 2021",
    price: "₹10,25,000",
    location: "Bengaluru",
    category: "SUV",
    brand: "Tata",
    img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
  },
  {
    id: 5,
    title: "Kia Seltos 2023",
    price: "₹16,00,000",
    location: "Chennai",
    category: "SUV",
    brand: "Kia",
    img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
  },
  {
    id: 6,
    title: "Maruti Baleno 2021",
    price: "₹8,20,000",
    location: "Hyderabad",
    category: "Hatchback",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  },
  {
    id: 7,
    title: "Honda WR-V 2019",
    price: "₹8,50,000",
    location: "Jaipur",
    category: "SUV",
    brand: "Honda",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
  },
  {
    id: 8,
    title: "Hyundai i20 2018",
    price: "₹7,50,000",
    location: "Ahmedabad",
    category: "Hatchback",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
  },
  {
    id: 9,
    title: "Toyota Fortuner 2022",
    price: "₹32,00,000",
    location: "Chennai",
    category: "SUV",
    brand: "Toyota",
    img: "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
  },
  {
    id: 10,
    title: "Ford EcoSport 2020",
    price: "₹9,00,000",
    location: "Kolkata",
    category: "SUV",
    brand: "Ford",
    img: "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg",
  },
  {
    id: 11,
    title: "Maruti Dzire 2022",
    price: "₹6,50,000",
    location: "Mumbai",
    category: "Sedan",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/1105762/pexels-photo-1105762.jpeg",
  },
  {
    id: 12,
    title: "Hyundai Venue 2021",
    price: "₹8,00,000",
    location: "Delhi",
    category: "SUV",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/57012/pexels-photo-57012.jpeg",
  },
  {
    id: 13,
    title: "Honda Amaze 2019",
    price: "₹7,00,000",
    location: "Pune",
    category: "Sedan",
    brand: "Honda",
    img: "https://images.pexels.com/photos/128988/pexels-photo-128988.jpeg",
  },
  {
    id: 14,
    title: "Kia Carnival 2023",
    price: "₹24,00,000",
    location: "Bengaluru",
    category: "SUV",
    brand: "Kia",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
  },
  {
    id: 15,
    title: "Tata Altroz 2021",
    price: "₹6,20,000",
    location: "Jaipur",
    category: "Hatchback",
    brand: "Tata",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
  },
  {
    id: 16,
    title: "Ford Aspire 2020",
    price: "₹6,50,000",
    location: "Ahmedabad",
    category: "Sedan",
    brand: "Ford",
    img: "https://images.pexels.com/photos/1586431/pexels-photo-1586431.jpeg",
  },
  {
    id: 17,
    title: "Toyota Yaris 2023",
    price: "₹9,80,000",
    location: "Chennai",
    category: "Hatchback",
    brand: "Toyota",
    img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
  },
  {
    id: 18,
    title: "Maruti Ertiga 2022",
    price: "₹7,30,000",
    location: "Kolkata",
    category: "SUV",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/1367299/pexels-photo-1367299.jpeg",
  },
  {
    id: 19,
    title: "Honda Jazz 2021",
    price: "₹6,80,000",
    location: "Mumbai",
    category: "Hatchback",
    brand: "Honda",
    img: "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
  },
  {
    id: 20,
    title: "Hyundai Verna 2020",
    price: "₹10,50,000",
    location: "Delhi",
    category: "Sedan",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/3707995/pexels-photo-3707995.jpeg",
  },
]; 

const categories = ["All", "SUV", "Sedan", "Hatchback"];
const brands = ["All", "Hyundai", "Maruti", "Honda", "Tata", "Kia", "Toyota", "Ford"];

export default function CarsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");

  // ❤️ Liked cars
  const [likedCars, setLikedCars] = useState([]);

  // Load liked cars from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedCars")) || [];
    setLikedCars(stored);
  }, []);

  // ❤️ Toggle Like
  const toggleLike = (car) => {
    setLikedCars((prev) => {
      const exists = prev.some((c) => c.id === car.id);
      const updated = exists
        ? prev.filter((c) => c.id !== car.id)
        : [...prev, { ...car, type: "car" }]; // ⭐ MUST ADD type
      localStorage.setItem("likedCars", JSON.stringify(updated));
      window.dispatchEvent(new Event("savedItemsUpdated"));
      return updated;
    });
  };

  // Filter cars based on category + brand
  const filteredCars = carsData.filter((car) => {
    return (
      (activeCategory === "All" || car.category === activeCategory) &&
      (activeBrand === "All" || car.brand === activeBrand)
    );
  });

  return (
    <div>
      <Hero
        tittle={"Find Your Perfect Ride"}
        text={"Browse top cars and deals to drive your dream ride" }
        bgImg={"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg"}
      />

      <main className="bg-white  min-h-screen py-10  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Explore Cars</h1>

        {/* Filters */}
        <section className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <div>
            <h3 className="text-lg mb-3 text-gray-700 font-serif">Filter by Category</h3>
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
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-3 text-gray-700 font-serif">Filter by Brand</h3>
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
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <Card
                key={car.id}
                ad={car}
                liked={likedCars.some((c) => c.id === car.id)} // ❤️ UI state
                img={car.img}
                title={car.title}
                price={car.price}
                location={car.location}
                  onLike={() => toggleLike(car)}  
                onClick={() => router.push(`/CarsDetails/${car.id}`)} // 🔥 Navigate to details
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">No cars found.</p>
          )}
        </section>

        {/* Extra Content */}
        <section className="mt-16 bg-indigo-200/50 rounded-3xl p-10 text-center shadow-lg">
          <h3 className="text-3xl font-bold  text-gray-800 mb-6">Why Choose Nexsell for Cars ?</h3>
          <p className="text-gray-700 font-sm max-w-3xl mx-auto text-lg leading-relaxed">
            Nexsell offers a trusted platform with verified listings and buyers. Seamless filters,
            secure deals & the perfect vehicle in minutes.
          </p>
        </section>

        {/* Animated UI */}
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
    </div>
  );
}
