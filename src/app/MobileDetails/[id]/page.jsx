








"use client";

import React, { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import Link from "next/link";

import { motion } from "framer-motion";

export const featuredAds= [
  {
    id: 1,
    title: "Samsung Galaxy S23 Ultra",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Flagship",
    brand: "Samsung",
    images: [
      "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
      "https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg",
      "https://images.pexels.com/photos/4042808/pexels-photo-4042808.jpeg",
      "https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
    ],
    year: 2023,
    ram: "12 GB",
    storage: "256 GB",
    battery: "5000 mAh",
    condition: "Like New",
    warranty: "6 Months",
    seller: "Amit Electronics",
    description:
      "Samsung Galaxy S23 Ultra with Snapdragon 8 Gen 2 and 200MP camera. Perfect for photography and gaming.",
  },

  {
    id: 2,
    title: "iPhone 14 Pro Max",
    price: "₹1,35,000",
    location: "Delhi",
    category: "Flagship",
    brand: "Apple",
    images: [
      "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg",
      "https://images.pexels.com/photos/12096674/pexels-photo-12096674.jpeg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      "https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    ],
    year: 2022,
    ram: "6 GB",
    storage: "256 GB",
    battery: "4323 mAh",
    condition: "Excellent",
    warranty: "5 Months",
    seller: "Delhi Mobile Hub",
    description:
      "iPhone 14 Pro Max with A16 Bionic chip and Dynamic Island. Very well maintained.",
  },

  {
    id: 3,
    title: "OnePlus 11",
    price: "₹65,000",
    location: "Bengaluru",
    category: "Mid-range",
    brand: "OnePlus",
    images: [
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
      "https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    ],
    year: 2023,
    ram: "8 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Good",
    warranty: "No Warranty",
    seller: "OnePlus Store BLR",
    description:
      "OnePlus 11 powered by Snapdragon 8 Gen 2. Smooth performance and clean display.",
  },

  {
    id: 4,
    title: "Xiaomi Redmi Note 12 Pro",
    price: "₹18,000",
    location: "Pune",
    category: "Budget",
    brand: "Xiaomi",
    images: [
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
      "https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg",
      "https://images.pexels.com/photos/5081389/pexels-photo-5081389.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg",
    ],
    year: 2022,
    ram: "6 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Very Good",
    warranty: "No Warranty",
    seller: "Pune Gadget World",
    description:
      "Redmi Note 12 Pro with 67W fast charging and excellent battery backup.",
  },

  {
    id: 5,
    title: "Realme GT Neo 3",
    price: "₹28,000",
    location: "Hyderabad",
    category: "Mid-range",
    brand: "Realme",
    images: [
      "https://images.pexels.com/photos/1670711/pexels-photo-1670711.jpeg",
      "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
      "https://images.pexels.com/photos/5081388/pexels-photo-5081388.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    ],
    year: 2022,
    ram: "8 GB",
    storage: "256 GB",
    battery: "4500 mAh",
    condition: "Good",
    warranty: "3 Months",
    seller: "Realme Official Store",
    description:
      "Realme GT Neo 3 with 80W fast charging and Dimensity 8100 processor.",
  },

  {
    id: 6,
    title: "Google Pixel 7 Pro",
    price: "₹70,000",
    location: "Chennai",
    category: "Flagship",
    brand: "Google",
    images: [
      "https://images.pexels.com/photos/11850222/pexels-photo-11850222.jpeg",
      "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg",
      "https://images.pexels.com/photos/669914/pexels-photo-669914.jpeg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    ],
    year: 2022,
    ram: "12 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Excellent",
    warranty: "5 Months",
    seller: "Chennai Mobiles",
    description:
      "Pixel 7 Pro with Tensor G2 chip and one of the best smartphone cameras.",
  },

  {
    id: 7,
    title: "Motorola G82",
    price: "₹15,000",
    location: "Ahmedabad",
    category: "Budget",
    brand: "Motorola",
    images: [
      "https://images.pexels.com/photos/1440363/pexels-photo-1440363.jpeg",
      "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
      "https://images.pexels.com/photos/5081388/pexels-photo-5081388.jpeg",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    ],
    year: 2022,
    ram: "6 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Good",
    warranty: "No Warranty",
    seller: "Moto Store",
    description:
      "Motorola G82 with clean UI experience and great AMOLED display.",
  },

  {
    id: 8,
    title: "Samsung Galaxy A53",
    price: "₹24,000",
    location: "Kolkata",
    category: "Mid-range",
    brand: "Samsung",
    images: [
      "https://images.pexels.com/photos/1462680/pexels-photo-1462680.jpeg",
      "https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
      "https://images.pexels.com/photos/669914/pexels-photo-669914.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
    ],
    year: 2022,
    ram: "6 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Very Good",
    warranty: "2 Months",
    seller: "Galaxy Mobiles",
    description:
      "Samsung A53 with OIS camera and comfortable AMOLED display.",
  },

  {
    id: 9,
    title: "iPhone SE (2022)",
    price: "₹35,000",
    location: "Delhi",
    category: "Budget",
    brand: "Apple",
    images: [
      "https://images.pexels.com/photos/5077040/pexels-photo-5077040.jpeg",
      "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
    ],
    year: 2022,
    ram: "4 GB",
    storage: "128 GB",
    battery: "2821 mAh",
    condition: "Good",
    warranty: "1 Month",
    seller: "Apple Hub Delhi",
    description:
      "Compact iPhone SE with A15 Bionic processor, perfect for daily tasks.",
  },

  {
    id: 10,
    title: "OnePlus Nord CE 3",
    price: "₹20,000",
    location: "Mumbai",
    category: "Budget",
    brand: "OnePlus",
    images: [
      "https://images.pexels.com/photos/5405183/pexels-photo-5405183.jpeg",
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
      "https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg",
      "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    ],
    year: 2023,
    ram: "8 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Very Good",
    warranty: "3 Months",
    seller: "Mumbai OnePlus Store",
    description:
      "OnePlus Nord CE 3 with 67W fast charging and smooth AMOLED display.",
  },

  {
    id: 11,
    title: "Xiaomi Poco F5 Pro",
    price: "₹38,000",
    location: "Bengaluru",
    category: "Mid-range",
    brand: "Xiaomi",
    images: [
      "https://images.pexels.com/photos/3184409/pexels-photo-3184409.jpeg",
      "https://images.pexels.com/photos/5081389/pexels-photo-5081389.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
      "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg",
    ],
    year: 2023,
    ram: "8 GB",
    storage: "256 GB",
    battery: "5160 mAh",
    condition: "Excellent",
    warranty: "4 Months",
    seller: "Poco Store BLR",
    description:
      "Poco F5 Pro with Snapdragon 8+ Gen 1 and great AMOLED 120Hz screen.",
  },

  {
    id: 12,
    title: "Realme 10 Pro+",
    price: "₹20,000",
    location: "Pune",
    category: "Budget",
    brand: "Realme",
    images: [
      "https://images.pexels.com/photos/7550188/pexels-photo-7550188.jpeg",
      "https://images.pexels.com/photos/1670711/pexels-photo-1670711.jpeg",
      "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    ],
    year: 2023,
    ram: "6 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Good",
    warranty: "No Warranty",
    seller: "Realme Shop Pune",
    description:
      "Realme 10 Pro+ with 120Hz curved display and fast Dimensity processor.",
  },

  {
    id: 13,
    title: "Google Pixel 6a",
    price: "₹25,000",
    location: "Hyderabad",
    category: "Budget",
    brand: "Google",
    images: [
      "https://images.pexels.com/photos/9148696/pexels-photo-9148696.jpeg",
      "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    ],
    year: 2022,
    ram: "6 GB",
    storage: "128 GB",
    battery: "4410 mAh",
    condition: "Very Good",
    warranty: "1 Month",
    seller: "Pixel Store",
    description:
      "Google Pixel 6a with amazing computational photography and clean UI.",
  },

  {
    id: 14,
    title: "Motorola Edge 30",
    price: "₹32,000",
    location: "Chennai",
    category: "Mid-range",
    brand: "Motorola",
    images: [
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
      "https://images.pexels.com/photos/5081388/pexels-photo-5081388.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
    ],
    year: 2022,
    ram: "8 GB",
    storage: "128 GB",
    battery: "4020 mAh",
    condition: "Good",
    warranty: "No Warranty",
    seller: "Chennai Moto Hub",
    description:
      "Motorola Edge 30 is one of the slimmest 5G phones with 144Hz display.",
  },

  {
    id: 15,
    title: "Samsung Galaxy Z Flip4",
    price: "₹90,000",
    location: "Ahmedabad",
    category: "Flagship",
    brand: "Samsung",
    images: [
      "https://images.pexels.com/photos/1614024/pexels-photo-1614024.jpeg",
      "https://images.pexels.com/photos/5081389/pexels-photo-5081389.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
    ],
    year: 2022,
    ram: "8 GB",
    storage: "256 GB",
    battery: "3700 mAh",
    condition: "Excellent",
    warranty: "6 Months",
    seller: "Samsung Premium Store",
    description:
      "Galaxy Z Flip4 foldable smartphone with compact design and flagship features.",
  },

  {
    id: 16,
    title: "iPhone 13 Mini",
    price: "₹55,000",
    location: "Kolkata",
    category: "Mid-range",
    brand: "Apple",
    images: [
      "https://images.pexels.com/photos/5405183/pexels-photo-5405183.jpeg",
      "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
    ],
    year: 2021,
    ram: "4 GB",
    storage: "128 GB",
    battery: "2438 mAh",
    condition: "Good",
    warranty: "2 Months",
    seller: "Kolkata Apple Store",
    description:
      "iPhone 13 Mini is a compact powerhouse with A15 Bionic chip.",
  },

  {
    id: 17,
    title: "OnePlus 10T",
    price: "₹45,000",
    location: "Delhi",
    category: "Flagship",
    brand: "OnePlus",
    images: [
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
    ],
    year: 2022,
    ram: "12 GB",
    storage: "256 GB",
    battery: "4800 mAh",
    condition: "Very Good",
    warranty: "3 Months",
    seller: "Delhi OnePlus Hub",
    description:
      "OnePlus 10T with 150W SuperVOOC fast charging and Snapdragon 8+ Gen 1.",
  },

  {
    id: 18,
    title: "Xiaomi Redmi 12",
    price: "₹12,000",
    location: "Mumbai",
    category: "Budget",
    brand: "Xiaomi",
    images: [
      "https://images.pexels.com/photos/1270286/pexels-photo-1270286.jpeg",
      "https://images.pexels.com/photos/5081389/pexels-photo-5081389.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
      "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg",
    ],
    year: 2023,
    ram: "4 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    condition: "Good",
    warranty: "No Warranty",
    seller: "Mumbai Gadget Point",
    description:
      "Redmi 12 with a large display and strong battery backup for daily tasks.",
  },

  {
    id: 19,
    title: "Realme Narzo 60",
    price: "₹11,000",
    location: "Bengaluru",
    category: "Budget",
    brand: "Realme",
    images: [
      "https://images.pexels.com/photos/4207834/pexels-photo-4207834.jpeg",
      "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg",
      "https://images.pexels.com/photos/5081388/pexels-photo-5081388.jpeg",
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
      "https://images.pexels.com/photos/4042771/pexels-photo-4042771.jpeg",
    ],
    year: 2023,
    ram: "4 GB",
    storage: "64 GB",
    battery: "5000 mAh",
    condition: "Good",
    warranty: "No Warranty",
    seller: "Realme Narzo Store",
    description:
      "Realme Narzo 60 is a budget-friendly device with smooth performance.",
  },

  {
    id: 20,
    title: "Google Pixel 5",
    price: "₹40,000",
    location: "Pune",
    category: "Mid-range",
    brand: "Google",
    images: [
      "https://images.pexels.com/photos/1251909/pexels-photo-1251909.jpeg",
      "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg",
      "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg",
      "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg",
    ],
    year: 2020,
    ram: "8 GB",
    storage: "128 GB",
    battery: "4080 mAh",
    condition: "Very Good",
    warranty: "No Warranty",
    seller: "Pixel Store Pune",
    description:
      "Google Pixel 5 with excellent camera and clean Android experience.",
  }
];



export default function HomeDetails() {
  const params = useParams();

  const router = useRouter();

  const { id } = params || {};

  if (!id) return <p>Loading...</p>;

  // Find ad by id

  const ad = featuredAds.find((item) => item.id === parseInt(id));

  if (!ad) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">
          Item not found
        </h2>

        <Link
          href="/"
          className="text-indigo-600 hover:text-indigo-800 underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Auto Image Slider State

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!ad?.images || ad.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === ad.images.length - 1 ? 0 : prev + 1));
    }, 2500); // rotating every 2.5s

    return () => clearInterval(interval);
  }, [ad?.images]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-24 gap-2 flex justify-center">
      {/* BACK BUTTON */}

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
        {/* IMAGE SLIDER */}

        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          {ad.images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`${ad.title} image ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}

          {/* Dots */}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {ad.images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentImage === index ? "bg-white" : "bg-gray-400"
                } transition-colors`}
              ></div>
            ))}
          </div>
        </div>

        {/* DETAILS */}

        <div className="p-6 md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">
            {ad.title}
          </h1>

          <p className="text-2xl font-semibold text-indigo-800 mb-4">
            {ad.price}
          </p>

          <div className="space-y-1 text-gray-700 text-sm">
            <p>
              <strong>Location:</strong> {ad.location}
            </p>

            <p>
              <strong>Brand:</strong> {ad.brand}
            </p>

            <p>
              <strong>Category:</strong> {ad.category}
            </p>

            {ad.postedOn && (
              <p>
                <strong>Posted On:</strong> {ad.postedOn}
              </p>
            )}

            <p>
              <strong>Year:</strong> {ad.year}
            </p>

            <p>
              <strong>Fuel:</strong> {ad.fuel}
            </p>

            <p>
              <strong>Kms Driven:</strong> {ad.kmsDriven}
            </p>

            <p>
              <strong>Owner:</strong> {ad.owner}
            </p>

            <p>
              <strong>Condition:</strong> {ad.condition}
            </p>
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed">{ad.description}</p>

          {/* Features */}

          {ad.features && (
            <div className="mt-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Features
              </h2>

              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                {ad.features.map((item, index) => (
                  <li key={index} className="flex items-center">
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

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
