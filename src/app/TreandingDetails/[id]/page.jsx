// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// // ⭐ PREMIUM MULTI DETAILS DATA
// export const trendingDetails = [
//   {
//     id: 1,
//     title: "iPhone 13 – Like New",
//     price: "₹42,000",
//     location: "Mumbai",
//     description:
//       "iPhone 13 in premium condition. 92% battery health, 5G support, no dents. Includes original box + charger.",
//     category: "Mobiles",
//     posted: "2 Days Ago",
//     seller: "Rohit Sharma",
//     images: [
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
//       "https://images.unsplash.com/photo-1542751371-adc38448a05e",
//       "https://images.unsplash.com/photo-1510557880182-3f8b0b9d4c3a",
//       "https://images.unsplash.com/photo-1523475496153-3d6cc2f9b7f0",
//       "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
//     ],
//   },

//   {
//     id: 2,
//     title: "Honda Activa 2020",
//     price: "₹52,000",
//     location: "Pune",
//     description:
//       "Honda Activa 2020 — regular service, smooth engine, new tyres, perfect family scooter.",
//     category: "Bikes",
//     posted: "1 Week Ago",
//     seller: "Amit Verma",
//     images: [
//       "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
//       "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
//       "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
//       "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//       "https://images.unsplash.com/photo-1558981403-c5f9892c223b",
//     ],
//   },

//   {
//     id: 3,
//     title: "HP Victus Gaming Laptop",
//     price: "₹58,000",
//     location: "Bengaluru",
//     description:
//       "HP Victus gaming laptop with RTX GPU, ideal for gaming, 3D editing, streaming.",
//     category: "Laptops",
//     posted: "5 Days Ago",
//     seller: "Rahul Singh",
//     images: [
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
//       "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
//       "https://images.unsplash.com/photo-1517336714731-1f5f2cfb6f5b",
//       "https://images.unsplash.com/photo-1587202372775-6b6a8f7f0e5c",
//       "https://images.unsplash.com/photo-1580894908361-73077b4b7b12",
//     ],
//   },

//   {
//     id: 4,
//     title: "Maruti Swift 2019 – VXI",
//     price: "₹4,80,000",
//     location: "Delhi",
//     description:
//       "Swift VXI petrol — only 32,000 km driven, single owner, showroom serviced, excellent mileage.",
//     category: "Cars",
//     posted: "3 Days Ago",
//     seller: "Vikas Mehta",
//     images: [
//       "https://images.unsplash.com/photo-1502877338535-766e1452684a",
//       "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
//       "https://images.unsplash.com/photo-1533473359331-13dfd1b1f6a6",
//       "https://images.unsplash.com/photo-1533473359331-d1fee6ac9c91",
//       "https://images.unsplash.com/photo-1520350094758-7a3d6d59e613",
//     ],
//   },

//   {
//     id: 5,
//     title: "Sony Bravia 55-inch 4K TV",
//     price: "₹39,000",
//     location: "Hyderabad",
//     description:
//       "Sony Bravia smart 4K HDR TV — premium display panel, Dolby Audio, minimal usage.",
//     category: "Electronics",
//     posted: "10 Days Ago",
//     seller: "Shivam Gupta",
//     images: [
//       "https://images.unsplash.com/photo-1587049352845-08d3e86f7d55",
//       "https://images.unsplash.com/photo-1583512603871-7c98f2639b1f",
//       "https://images.unsplash.com/photo-1593359677879-f34cab3c0468",
//       "https://images.unsplash.com/photo-1601944178857-0be3be0b53ab",
//       "https://images.unsplash.com/photo-1587047745254-320b77a9f6fa",
//     ],
//   },

//   {
//     id: 6,
//     title: "MacBook Air M1 – 2021",
//     price: "₹62,000",
//     location: "Ahmedabad",
//     description:
//       "MacBook Air M1 — ultra-fast, slim, 8GB RAM, 256GB SSD, best for office + editing.",
//     category: "Laptops",
//     posted: "4 Days Ago",
//     seller: "Harsh Patel",
//     images: [
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
//       "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
//       "https://images.unsplash.com/photo-1587202372775-6b6a8f7f0e5c",
//       "https://images.unsplash.com/photo-1580894908361-73077b4b7b12",
//       "https://images.unsplash.com/photo-1517336714731-1f5f2cfb6f5b",
//     ],
//   },
// ];

// export default function TrendingDetailsPage() {
//   const router = useRouter();
//   const { id } = useParams();
//   const product = trendingDetails.find((item) => item.id === Number(id));

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [flip, setFlip] = useState(false);

//   // Auto-slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImg();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   if (!product)
//     return (
//       <div className="text-center mt-20 text-xl font-semibold">
//         Product Not Found!
//       </div>
//     );

//   const nextImg = () => {
//     setCurrentIndex((prev) =>
//       prev === product.images.length - 1 ? 0 : prev + 1
//     );
//     setFlip(!flip);
//   };

//   const prevImg = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? product.images.length - 1 : prev - 1
//     );
//     setFlip(!flip);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">

//       {/* Back Button */}
//       <button
//         onClick={() => router.back()}
//         className="mb-6 flex items-center gap-2 text-indigo-600 font-semibold hover:underline text-lg"
//       >
//         ← Back
//       </button>

//       {/* Title */}
//       <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//         {product.title}
//       </h1>

//       <p className="text-gray-500 text-lg mb-4">
//         Category: <span className="font-semibold">{product.category}</span> •  
//         Posted: {product.posted}
//       </p>

//       {/* Image Slider */}
//       <div className="relative w-full h-[260px] md:h-[450px] mb-8 group rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20">

//         <motion.img
//           key={currentIndex}
//           initial={{ rotateY: flip ? 180 : -180, opacity: 0 }}
//           animate={{ rotateY: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           src={product.images[currentIndex]}
//           className="w-full h-full object-cover"
//         />

//         {/* Left Button */}
//         <button
//           onClick={prevImg}
//           className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition backdrop-blur-md"
//         >
//           ❮
//         </button>

//         {/* Right Button */}
//         <button
//           onClick={nextImg}
//           className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition backdrop-blur-md"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Thumbnails */}
//       <div className="flex gap-4 overflow-x-auto pb-3">
//         {product.images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-24 h-24 rounded-xl object-cover border-2 cursor-pointer transition-all ${
//               currentIndex === idx
//                 ? "border-indigo-600 scale-105"
//                 : "border-transparent opacity-70"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Product Info */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-10 bg-white/60 backdrop-blur-2xl shadow-2xl rounded-2xl p-8 border border-gray-200 space-y-5"
//       >
//         <h2 className="text-3xl font-bold text-indigo-700">{product.price}</h2>

//         <p className="text-gray-700 text-lg">📍 {product.location}</p>

//         <p className="text-gray-800 leading-relaxed text-[17px]">
//           {product.description}
//         </p>

//         <p className="text-gray-600">
//           Seller: <span className="font-semibold">{product.seller}</span>
//         </p>

//         {/* Contact Seller */}
//         <button
//           onClick={() => router.push("/SellerContact")}
//           className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl text-xl font-semibold shadow-lg hover:scale-[1.02] transition-transform"
//         >
//           Contact Seller
//         </button>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
export const featuredAds = [
  {
    id: 1,
    title: "iPhone 13 – Like New",
    price: "₹42,000",
    location: "Mumbai",
    description:
      "iPhone 13 in premium condition. 92% battery health, 5G support, no dents. Includes original box + charger.",
    category: "Mobiles",
    posted: "2 Days Ago",
    seller: "Rohit Sharma",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      "https://images.unsplash.com/photo-1510557880182-3f8b0b9d4c3a",
      "https://images.unsplash.com/photo-1523475496153-3d6cc2f9b7f0",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    ],
  },

  {
    id: 2,
    title: "Honda Activa 2020",
    price: "₹52,000",
    location: "Pune",
    description:
      "Honda Activa 2020 — regular service, smooth engine, new tyres, perfect family scooter.",
    category: "Bikes",
    posted: "1 Week Ago",
    seller: "Amit Verma",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1558981403-c5f9892c223b",
    ],
  },

  {
    id: 3,
    title: "HP Victus Gaming Laptop",
    price: "₹58,000",
    location: "Bengaluru",
    description:
      "HP Victus gaming laptop with RTX GPU, ideal for gaming, 3D editing, streaming.",
    category: "Laptops",
    posted: "5 Days Ago",
    seller: "Rahul Singh",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      "https://images.unsplash.com/photo-1517336714731-1f5f2cfb6f5b",
      "https://images.unsplash.com/photo-1587202372775-6b6a8f7f0e5c",
      "https://images.unsplash.com/photo-1580894908361-73077b4b7b12",
    ],
  },

  {
    id: 4,
    title: "Maruti Swift 2019 – VXI",
    price: "₹4,80,000",
    location: "Delhi",
    description:
      "Swift VXI petrol — only 32,000 km driven, single owner, showroom serviced, excellent mileage.",
    category: "Cars",
    posted: "3 Days Ago",
    seller: "Vikas Mehta",
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
      "https://images.unsplash.com/photo-1533473359331-13dfd1b1f6a6",
      "https://images.unsplash.com/photo-1533473359331-d1fee6ac9c91",
      "https://images.unsplash.com/photo-1520350094758-7a3d6d59e613",
    ],
  },

  {
    id: 5,
    title: "Sony Bravia 55-inch 4K TV",
    price: "₹39,000",
    location: "Hyderabad",
    description:
      "Sony Bravia smart 4K HDR TV — premium display panel, Dolby Audio, minimal usage.",
    category: "Electronics",
    posted: "10 Days Ago",
    seller: "Shivam Gupta",
    images: [
       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1583512603871-7c98f2639b1f",
 "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",      "https://images.unsplash.com/photo-1601944178857-0be3be0b53ab",
 "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",    ],
  },

  {
    id: 6,
    title: "MacBook Air M1 – 2021",
    price: "₹62,000",
    location: "Ahmedabad",
    description:
      "MacBook Air M1 — ultra-fast, slim, 8GB RAM, 256GB SSD, best for office + editing.",
    category: "Laptops",
    posted: "4 Days Ago",
    seller: "Harsh Patel",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      "https://images.unsplash.com/photo-1587202372775-6b6a8f7f0e5c",
      "https://images.unsplash.com/photo-1580894908361-73077b4b7b12",
      "https://images.unsplash.com/photo-1517336714731-1f5f2cfb6f5b",
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
