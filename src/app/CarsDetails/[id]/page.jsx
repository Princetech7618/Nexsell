

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
export const featuredAds = [
  {
    id: 1,
    title: "Hyundai Creta 2022",
    price: "₹15,50,000",
    location: "Mumbai",
    category: "SUV",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
    year: 2022,
    fuel: "Petrol",
    kmsDriven: "18,000 km",
    owner: "1st Owner",
    transmission: "Automatic",
    description:
      "The Hyundai Creta 2022 offers a premium SUV experience with modern features, smooth performance, and bold styling.",
    features: ["Sunroof", "ABS", "Rear Camera", "Touchscreen", "Keyless Entry"],
    images: [
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 2,
    title: "Maruti Swift 2020",
    price: "₹7,00,000",
    location: "Pune",
    category: "Hatchback",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "42,000 km",
    owner: "2nd Owner",
    transmission: "Manual",
    description:
      "A perfect city car offering great mileage, comfort, and Maruti’s reliable performance.",
    features: ["Power Steering", "Bluetooth", "Dual Airbags"],
    images: [
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 3,
    title: "Honda City 2019",
    price: "₹9,50,000",
    location: "Delhi",
    category: "Sedan",
    brand: "Honda",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    year: 2019,
    fuel: "Diesel",
    kmsDriven: "55,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A premium sedan known for comfort, reliability, and powerful performance.",
    features: ["Cruise Control", "Rear AC Vents", "Alloy Wheels"],
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg"
    ],
  },

  {
    id: 4,
    title: "Tata Nexon 2021",
    price: "₹10,25,000",
    location: "Bengaluru",
    category: "SUV",
    brand: "Tata",
    img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "30,000 km",
    owner: "1st Owner",
    transmission: "Automatic",
    description:
      "India’s safest compact SUV with strong build quality and modern tech.",
    features: ["ABS + EBD", "Digital Cluster", "Harman Music System"],
    images: [
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
      "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    ],
  },

  {
    id: 5,
    title: "Kia Seltos 2023",
    price: "₹16,00,000",
    location: "Chennai",
    category: "SUV",
    brand: "Kia",
    img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    year: 2023,
    fuel: "Petrol",
    kmsDriven: "12,000 km",
    owner: "1st Owner",
    transmission: "Automatic",
    description:
      "The latest Kia Seltos offers a futuristic design, smooth drive, and segment-leading technology.",
    features: ["10.25-inch Display", "ADAS", "Sunroof"],
    images: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg"
    ],
  },

  {
    id: 6,
    title: "Maruti Baleno 2021",
    price: "₹8,20,000",
    location: "Hyderabad",
    category: "Hatchback",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "28,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A premium hatchback with spacious interiors and great fuel economy.",
    features: ["Apple CarPlay", "Reverse Camera", "Auto AC"],
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 7,
    title: "Honda WR-V 2019",
    price: "₹8,50,000",
    location: "Jaipur",
    category: "SUV",
    brand: "Honda",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    year: 2019,
    fuel: "Diesel",
    kmsDriven: "60,000 km",
    owner: "2nd Owner",
    transmission: "Manual",
    description:
      "A compact SUV with Honda’s trusted performance and a spacious interior.",
    features: ["Sunroof", "ABS", "Steering Controls"],
    images: [
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    ],
  },

  {
    id: 8,
    title: "Hyundai i20 2018",
    price: "₹7,50,000",
    location: "Ahmedabad",
    category: "Hatchback",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
    year: 2018,
    fuel: "Petrol",
    kmsDriven: "48,000 km",
    owner: "2nd Owner",
    transmission: "Manual",
    description:
      "A premium hatchback with great comfort and smooth drive quality.",
    features: ["Touchscreen", "Reverse Sensors"],
    images: [
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 9,
    title: "Toyota Fortuner 2022",
    price: "₹32,00,000",
    location: "Chennai",
    category: "SUV",
    brand: "Toyota",
    img: "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
    year: 2022,
    fuel: "Diesel",
    kmsDriven: "22,000 km",
    owner: "1st Owner",
    transmission: "Automatic",
    description:
      "A powerful luxury SUV known for reliability, road presence, and comfort.",
    features: ["4x4 Mode", "Leather Seats", "LED Headlamps"],
    images: [
      "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 10,
    title: "Ford EcoSport 2020",
    price: "₹9,00,000",
    location: "Kolkata",
    category: "SUV",
    brand: "Ford",
    img: "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg",
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "45,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A tough and stylish compact SUV with Ford’s iconic handling.",
    features: ["Push Start", "Cruise Control", "Rear Camera"],
    images: [
      "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    ],
  },

  {
    id: 11,
    title: "Maruti Dzire 2022",
    price: "₹6,50,000",
    location: "Mumbai",
    category: "Sedan",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/1105762/pexels-photo-1105762.jpeg",
    year: 2022,
    fuel: "Petrol",
    kmsDriven: "19,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A practical family sedan with refined engine and excellent mileage.",
    features: ["ABS", "Rear AC", "Power Windows"],
    images: [
      "https://images.pexels.com/photos/1105762/pexels-photo-1105762.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 12,
    title: "Hyundai Venue 2021",
    price: "₹8,00,000",
    location: "Delhi",
    category: "SUV",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/57012/pexels-photo-57012.jpeg",
    year: 2021,
    fuel: "Diesel",
    kmsDriven: "33,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A compact SUV with bold styling and advanced connected features.",
    features: ["Airbags", "Connected Car Tech", "ABS"],
    images: [
      "https://images.pexels.com/photos/57012/pexels-photo-57012.jpeg",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
      "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg"
    ],
  },

  {
    id: 13,
    title: "Honda Amaze 2019",
    price: "₹7,00,000",
    location: "Pune",
    category: "Sedan",
    brand: "Honda",
    img: "https://images.pexels.com/photos/128988/pexels-photo-128988.jpeg",
    year: 2019,
    fuel: "Diesel",
    kmsDriven: "52,000 km",
    owner: "2nd Owner",
    transmission: "Manual",
    description:
      "A compact sedan with excellent mileage and comfort.",
    features: ["Reverse Camera", "Touchscreen", "ABS"],
    images: [
      "https://images.pexels.com/photos/128988/pexels-photo-128988.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 14,
    title: "Kia Carnival 2023",
    price: "₹24,00,000",
    location: "Bengaluru",
    category: "SUV",
    brand: "Kia",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    year: 2023,
    fuel: "Diesel",
    kmsDriven: "14,000 km",
    owner: "1st Owner",
    transmission: "Automatic",
    description:
      "A premium MPV offering unmatched comfort, luxury, and space.",
    features: ["VIP Seats", "Dual Sunroof", "Electric Tailgate"],
    images: [
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1614580/pexels-photo-1614580.jpeg",
      "https://images.pexels.com/photos/1051408/pexels-photo-1051408.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 15,
    title: "Tata Altroz 2021",
    price: "₹6,20,000",
    location: "Jaipur",
    category: "Hatchback",
    brand: "Tata",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "25,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A 5-star safety rated hatchback with stylish design and premium feel.",
    features: ["Touchscreen", "Ambient Lighting"],
    images: [
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 16,
    title: "Ford Aspire 2020",
    price: "₹6,50,000",
    location: "Ahmedabad",
    category: "Sedan",
    brand: "Ford",
    img: "https://images.pexels.com/photos/1586431/pexels-photo-1586431.jpeg",
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "40,000 km",
    owner: "2nd Owner",
    transmission: "Manual",
    description:
      "A compact sedan known for punchy performance and stylish looks.",
    features: ["ABS", "Climate Control"],
    images: [
      "https://images.pexels.com/photos/1586431/pexels-photo-1586431.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 17,
    title: "Toyota Yaris 2023",
    price: "₹9,80,000",
    location: "Chennai",
    category: "Hatchback",
    brand: "Toyota",
    img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
    year: 2023,
    fuel: "Petrol",
    kmsDriven: "10,000 km",
    owner: "1st Owner",
    transmission: "Automatic",
    description:
      "A premium, reliable Toyota hatchback offering great comfort.",
    features: ["Auto AC", "Airbags", "Cruise Control"],
    images: [
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 18,
    title: "Maruti Ertiga 2022",
    price: "₹7,30,000",
    location: "Kolkata",
    category: "SUV",
    brand: "Maruti",
    img: "https://images.pexels.com/photos/1367299/pexels-photo-1367299.jpeg",
    year: 2022,
    fuel: "Petrol",
    kmsDriven: "32,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A practical family 7-seater with excellent mileage and comfort.",
    features: ["Rear AC", "ABS", "Parking Sensors"],
    images: [
      "https://images.pexels.com/photos/1367299/pexels-photo-1367299.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg"
    ],
  },

  {
    id: 19,
    title: "Honda Jazz 2021",
    price: "₹6,80,000",
    location: "Mumbai",
    category: "Hatchback",
    brand: "Honda",
    img: "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "22,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "A premium hatchback with massive cabin space and comfort.",
    features: ["Push Start", "Rear Camera"],
    images: [
      "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    ],
  },

  {
    id: 20,
    title: "Hyundai Verna 2020",
    price: "₹10,50,000",
    location: "Delhi",
    category: "Sedan",
    brand: "Hyundai",
    img: "https://images.pexels.com/photos/3707995/pexels-photo-3707995.jpeg",
    year: 2020,
    fuel: "Diesel",
    kmsDriven: "50,000 km",
    owner: "2nd Owner",
    transmission: "Automatic",
    description:
      "A stylish midsize sedan with powerful performance and premium interiors.",
    features: ["Sunroof", "Ventilated Seats", "Digital Cluster"],
    images: [
      "https://images.pexels.com/photos/3707995/pexels-photo-3707995.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/1652602/pexels-photo-1652602.jpeg"
    ],
  },
];

export default function HomeDetails() {
  const params = useParams();
  const router = useRouter();
  const { id } = params || {};

  if (!id) return <p>Loading...</p>;

  const ad = featuredAds.find((item) => item.id === parseInt(id));

  if (!ad) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">
          Item not found
        </h2>
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // ---- Auto Image Slider Logic ----
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === ad.images.length - 1 ? 0 : prev + 1
      );
    }, 2500); // Auto change every 2.5s

    return () => clearInterval(interval);
  }, [ad.images.length]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-24  gap-2 flex justify-center">

      {/* TOP BACK BUTTON */}
         <div className="absolute top-16 left-4 md:left-10">
        <button
          onClick={() => router.back()}
          className="bg-white shadow-md px-4 py-2 mt-10 rounded-lg text-indigo-600 font-semibold hover:bg-indigo-50"
        >
          {"<"} Back
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row"
      >

        {/* AUTO SLIDER SECTION */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          {ad.images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={ad.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}

          {/* Slider Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {ad.images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentImage === index ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 md:w-1/2 flex flex-col">

          {/* Title + Price */}
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">{ad.title}</h1>
          <p className="text-2xl font-semibold text-indigo-800 mb-4">{ad.price}</p>

          {/* Basic Info */}
          <div className="space-y-1 text-gray-700 text-sm">
            <p><strong>Location:</strong> {ad.location}</p>
            <p><strong>Brand:</strong> {ad.brand}</p>
            <p><strong>Category:</strong> {ad.category}</p>
            <p><strong>Posted On:</strong> {ad.postedOn}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4 leading-relaxed">{ad.description}</p>

          {/* Features */}
          <div className="mt-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Features</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {ad.features?.map((item, index) => (
                <li key={index} className="flex items-center">✅ {item}</li>
              ))}
            </ul>
          </div>

          {/* Chat Button */}
          <div className="mt-8">
            <Link
              href="/SellerContact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition block text-center"
            >
              Chat with Seller
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
