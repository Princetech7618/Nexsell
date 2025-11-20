"use client";

import React, { useState } from "react";
import Hero from "../Components/Hero";


// Sample 20 cars data with category and brand
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");

  // Filter cars based on active category and brand
  const filteredCars = carsData.filter((car) => {
    return (
      (activeCategory === "All" || car.category === activeCategory) &&
      (activeBrand === "All" || car.brand === activeBrand)
    );
  });

  return (
 
   <div>
    {/* Hero */}
<Hero tittle="welcome to cars  " 
bgImg={"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg"}
/>
     <main className="bg-white min-h-screen py-10 font-serif px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  
  
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-8 text-center">Cars for Sale</h1>

      {/* Filters */}
      <section className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        {/* Category Filter */}
        <div>
          <h3 className="text-lg font-serif mb-3 text-gray-700">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition
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
          <h3 className="text-lg font-serif mb-3 text-gray-700">Filter by Brand</h3>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition
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

      {/* Cars Grid */}
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredCars.length > 0 ? (
    filteredCars.map((car) => (
      <a
        key={car.id}
        href={`/CarsDetails/${car.id}`}
        className="block bg-white rounded-lg overflow-hidden border border-gray-200 
                   hover:shadow-lg  transition-all duration-600 fade-up"
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={car.img}
            alt={car.title}
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        </div>

        {/* CARD BODY */}
        <div className="p-2">
          
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {car.title}
          </h2>

          {/* Price */}
          <p className="text-indigo-700 font-bold mt-1 text-md">
            {car.price}
          </p>

          {/* Location */}
          <p className="text-gray-500 text-mx mt-1 flex items-center gap-1">
            <span className="material-icons text-mx">location_on</span>
            {car.location}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2 text-mx">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {car.category}
            </span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {car.brand}
            </span>
          </div>
        </div>
      </a>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500 text-lg">
      No cars found.
    </p>
  )}
</section>



      {/* Extra Content Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-white rounded-3xl p-10 text-center shadow-lg">
        <h3 className="text-3xl font-serif text-indigo-600 mb-6">Why Choose Nexsell for Cars ?</h3>
        <p className="text-gray-700 font-serif max-w-3xl mx-auto leading-relaxed text-lg">
          Nexsell offers a trusted platform with verified listings and buyers, making selling or
          buying cars effortless and secure. With powerful filters, thousands of vehicles, and a
          seamless user experience, Nexsell helps you find your perfect vehicle faster.
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
   </div>
  );
}
