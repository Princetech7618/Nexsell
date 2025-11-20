


"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
export const featuredAds = [
  {
    id: 1,
    title: "iPhone 13 – 128GB, Excellent Condition",
    price: "₹42,500",
    location: "Delhi",
    category: "Mobiles",
    brand: "Apple",
    year: 2022,
    fuel: "N/A",
    kmsDriven: "N/A",
    owner: "Single User",
    transmission: "N/A",
    description:
      "iPhone 13 in excellent condition with 128GB storage. No scratches, battery health above 90%. Fully functional and well maintained.",
    features: ["128GB Storage", "Dual Camera", "OLED Display", "5G Support"],
    images: [
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
      "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 2,
    title: "Samsung Galaxy S21 FE – 5G",
    price: "₹23,000",
    location: "Mumbai",
    category: "Mobiles",
    brand: "Samsung",
    year: 2021,
    fuel: "N/A",
    kmsDriven: "N/A",
    owner: "Single User",
    transmission: "N/A",
    description:
      "Samsung Galaxy S21 FE 5G in very good condition. Smooth performance, great cameras and AMOLED display.",
    features: ["6GB RAM", "128GB Storage", "Triple Camera", "5G Support"],
    images: [
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      "https://images.pexels.com/photos/3612932/pexels-photo-3612932.jpeg",
      "https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 3,
    title: "Redmi Note 12 Pro – 6GB RAM",
    price: "₹14,500",
    location: "Jaipur",
    category: "Mobiles",
    brand: "Xiaomi",
    year: 2022,
    fuel: "N/A",
    kmsDriven: "N/A",
    owner: "Single User",
    transmission: "N/A",
    description:
      "Redmi Note 12 Pro in excellent working condition with high performance, fast charging, and a vivid display.",
    features: ["6GB RAM", "128GB Storage", "Fast Charging", "5G Support"],
    images: [
      "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
      "https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg",
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      "https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg",
      "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
    ],
    postedOn: "2024-12-01",
  },

  // ---------- CARS ----------
  {
    id: 4,
    title: "Maruti Swift 2019 VXI",
    price: "₹4,50,000",
    location: "Jaipur",
    category: "Cars",
    brand: "Maruti Suzuki",
    year: 2019,
    fuel: "Petrol",
    kmsDriven: "48,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "Maruti Swift 2019 VXI in top condition. Single owner, no accidents, full service history available.",
    features: ["Petrol", "Manual", "20 kmpl Mileage", "Single Owner"],
    images: [
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 5,
    title: "Royal Enfield Classic 350 – 2021",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Bikes",
    brand: "Royal Enfield",
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "12,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "RE Classic 350 2021 model. Excellent condition, original parts, no modifications.",
    features: ["350cc", "Single Owner", "ABS", "Excellent Mileage"],
    images: [
      "https://images.pexels.com/photos/17693829/pexels-photo-17693829.jpeg",
      "https://images.pexels.com/photos/339466/pexels-photo-339466.jpeg",
      "https://images.pexels.com/photos/424982/pexels-photo-424982.jpeg",
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
      "https://images.pexels.com/photos/17693829/pexels-photo-17693829.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 6,
    title: "Hyundai i20 2018 Sports",
    price: "₹3,95,000",
    location: "Pune",
    category: "Cars",
    brand: "Hyundai",
    year: 2018,
    fuel: "Petrol",
    kmsDriven: "52,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "Hyundai i20 2018 Sports variant. Scratchless body, fully serviced, excellent engine condition.",
    features: ["Petrol", "Manual", "Rear Camera", "Keyless Entry"],
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1038987/pexels-photo-1038987.jpeg",
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  // ---------- ELECTRONICS ----------
  {
    id: 7,
    title: "Sony 55-inch 4K Smart TV – HDR",
    price: "₹36,000",
    location: "Bengaluru",
    category: "Electronics",
    brand: "Sony",
    year: 2020,
    fuel: "N/A",
    kmsDriven: "N/A",
    owner: "Single User",
    transmission: "N/A",
    description:
      "Sony 55-inch 4K HDR Smart TV in excellent condition. No issues, great picture quality.",
    features: ["4K Display", "HDR10", "Smart TV", "55 inch"],
    images: [
      "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/3042701/pexels-photo-3042701.jpeg",
      "https://images.pexels.com/photos/705675/pexels-photo-705675.jpeg",
      "https://images.pexels.com/photos/3965527/pexels-photo-3965527.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 8,
    title: "Dell Inspiron i5 Laptop – 8GB RAM",
    price: "₹28,000",
    location: "Pune",
    category: "Electronics",
    brand: "Dell",
    year: 2019,
    fuel: "N/A",
    kmsDriven: "N/A",
    owner: "Single User",
    transmission: "N/A",
    description:
      "Dell Inspiron i5 8th Gen with 8GB RAM and SSD. Perfect for office and college work.",
    features: ["Intel i5", "8GB RAM", "256GB SSD", "15.6-inch Display"],
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    ],
    postedOn: "2024-12-01",
  },

  // ---------- COMMERCIAL ----------
  {
    id: 9,
    title: "LG 1.5 Ton Inverter AC – 5 Star",
    price: "₹22,500",
    location: "Chandigarh",
    category: "Electronics",
    brand: "LG",
    year: 2021,
    fuel: "N/A",
    kmsDriven: "N/A",
    owner: "Single User",
    transmission: "N/A",
    description:
      "LG 1.5 Ton 5-Star Inverter AC. Powerful cooling and very energy efficient.",
    features: ["1.5 Ton", "Inverter", "5 Star Rating", "Remote Included"],
    images: [
      "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg",
      "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg",
      "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg",
      "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg",
      "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 10,
    title: "Tata Ace Gold – 2018 Model",
    price: "₹2,25,000",
    location: "Ahmedabad",
    category: "Commercial",
    brand: "Tata",
    year: 2018,
    fuel: "Diesel",
    kmsDriven: "78,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "Tata Ace Gold 2018 model in great running condition. Ideal for transport business.",
    features: ["Diesel", "Manual", "High Payload", "Low Maintenance"],
    images: [
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      "https://images.pexels.com/photos/163845/truck-heavy-transportation-vehicle-163845.jpeg",
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 11,
    title: "Mahindra Bolero Pickup – 2020",
    price: "₹3,10,000",
    location: "Indore",
    category: "Commercial",
    brand: "Mahindra",
    year: 2020,
    fuel: "Diesel",
    kmsDriven: "65,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "Mahindra Bolero Pickup 2020 model. Strong engine and excellent loading capacity.",
    features: ["Diesel", "High Torque", "Power Steering", "Strong Chassis"],
    images: [
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
      "https://images.pexels.com/photos/163845/truck-heavy-transportation-vehicle-163845.jpeg",
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg"
    ],
    postedOn: "2024-12-01",
  },

  {
    id: 12,
    title: "Ashok Leyland Dost – 2019",
    price: "₹4,80,000",
    location: "Kolkata",
    category: "Commercial",
    brand: "Ashok Leyland",
    year: 2019,
    fuel: "Diesel",
    kmsDriven: "82,000 km",
    owner: "1st Owner",
    transmission: "Manual",
    description:
      "Ashok Leyland Dost 2019 model in excellent working condition. Perfect for goods transport.",
    features: ["Diesel", "High Load Capacity", "Great Mileage", "Reliable Engine"],
    images: [
      "https://images.pexels.com/photos/163845/truck-heavy-transportation-vehicle-163845.jpeg",
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      "https://images.pexels.com/photos/163845/truck-heavy-transportation-vehicle-163845.jpeg"
    ],
    postedOn: "2024-12-01",
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
