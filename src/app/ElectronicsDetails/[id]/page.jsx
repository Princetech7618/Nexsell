


"use client";

import React, { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import Link from "next/link";

import { motion } from "framer-motion";


export const featuredAds= [
  {
    id: 1,
    title: "Sony WH-1000XM5 Headphones",
    price: "₹25,000",
    location: "Mumbai",
    category: "Headphones",
    brand: "Sony",
    images: [
      "https://images.pexels.com/photos/339466/pexels-photo-339466.jpeg",
      "https://images.pexels.com/photos/339467/pexels-photo-339467.jpeg",
      "https://images.pexels.com/photos/339468/pexels-photo-339468.jpeg",
      "https://images.pexels.com/photos/339469/pexels-photo-339469.jpeg",
      "https://images.pexels.com/photos/339470/pexels-photo-339470.jpeg"
    ],
    features: ["Noise Cancelling", "Wireless", "30 Hours Battery Life"],
    warranty: "1 Year",
    seller: "Sony Store Mumbai",
    description: "High-quality Sony headphones with superb noise cancellation.",
  },
  {
    id: 2,
    title: "Apple MacBook Air M2",
    price: "₹1,20,000",
    location: "Delhi",
    category: "Laptop",
    brand: "Apple",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18106/pexels-photo.jpg",
      "https://images.pexels.com/photos/18107/pexels-photo.jpg",
      "https://images.pexels.com/photos/18108/pexels-photo.jpg",
      "https://images.pexels.com/photos/18109/pexels-photo.jpg"
    ],
    features: ["M2 Chip", "8GB RAM", "256GB SSD", "Retina Display"],
    warranty: "1 Year",
    seller: "Apple Store Delhi",
    description: "Apple MacBook Air M2 – ultrathin laptop with excellent performance.",
  },
  {
    id: 3,
    title: "Samsung 4K Smart TV",
    price: "₹55,000",
    location: "Bengaluru",
    category: "Television",
    brand: "Samsung",
    images: [
      "https://images.pexels.com/photos/40815/pexels-photo-40815.jpeg",
      "https://images.pexels.com/photos/40816/pexels-photo-40816.jpeg",
      "https://images.pexels.com/photos/40817/pexels-photo-40817.jpeg",
      "https://images.pexels.com/photos/40818/pexels-photo-40818.jpeg",
      "https://images.pexels.com/photos/40819/pexels-photo-40819.jpeg"
    ],
    features: ["4K Resolution", "Smart TV", "HDR10+", "55 inch"],
    warranty: "2 Years",
    seller: "Samsung Electronics BLR",
    description: "Samsung 4K Smart TV with HDR10+ for crisp visuals.",
  },
  {
    id: 4,
    title: "Dell Inspiron 15",
    price: "₹45,000",
    location: "Pune",
    category: "Laptop",
    brand: "Dell",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18110/pexels-photo.jpg",
      "https://images.pexels.com/photos/18111/pexels-photo.jpg",
      "https://images.pexels.com/photos/18112/pexels-photo.jpg",
      "https://images.pexels.com/photos/18113/pexels-photo.jpg"
    ],
    features: ["Intel i5", "8GB RAM", "512GB SSD", "15.6 inch FHD Display"],
    warranty: "1 Year",
    seller: "Dell Store Pune",
    description: "Dell Inspiron 15 for everyday productivity and performance.",
  },
  {
    id: 5,
    title: "Bose SoundLink Speaker",
    price: "₹15,000",
    location: "Hyderabad",
    category: "Speaker",
    brand: "Bose",
    images: [
      "https://images.pexels.com/photos/1117933/pexels-photo-1117933.jpeg",
      "https://images.pexels.com/photos/1117934/pexels-photo-1117934.jpeg",
      "https://images.pexels.com/photos/1117935/pexels-photo-1117935.jpeg",
      "https://images.pexels.com/photos/1117936/pexels-photo-1117936.jpeg",
      "https://images.pexels.com/photos/1117937/pexels-photo-1117937.jpeg"
    ],
    features: ["Bluetooth", "12 Hours Playtime", "Portable"],
    warranty: "6 Months",
    seller: "Bose Hyderabad",
    description: "Portable Bose speaker with rich sound and long battery life.",
  },
  {
    id: 6,
    title: "Apple iPad Pro",
    price: "₹80,000",
    location: "Chennai",
    category: "Tablet",
    brand: "Apple",
    images: [
      "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg",
      "https://images.pexels.com/photos/5082582/pexels-photo-5082582.jpeg",
      "https://images.pexels.com/photos/5082583/pexels-photo-5082583.jpeg",
      "https://images.pexels.com/photos/5082584/pexels-photo-5082584.jpeg",
      "https://images.pexels.com/photos/5082585/pexels-photo-5082585.jpeg"
    ],
    features: ["M1 Chip", "11 inch Display", "Wi-Fi + Cellular"],
    warranty: "1 Year",
    seller: "Apple Store Chennai",
    description: "Apple iPad Pro with M1 chip and stunning 11-inch display.",
  },
  {
    id: 7,
    title: "Sony PlayStation 5",
    price: "₹50,000",
    location: "Ahmedabad",
    category: "Gaming Console",
    brand: "Sony",
    images: [
      "https://images.pexels.com/photos/716363/pexels-photo-716363.jpeg",
      "https://images.pexels.com/photos/716364/pexels-photo-716364.jpeg",
      "https://images.pexels.com/photos/716365/pexels-photo-716365.jpeg",
      "https://images.pexels.com/photos/716366/pexels-photo-716366.jpeg",
      "https://images.pexels.com/photos/716367/pexels-photo-716367.jpeg"
    ],
    features: ["4K Gaming", "DualSense Controller", "825GB SSD"],
    warranty: "1 Year",
    seller: "Sony Gaming Ahmedabad",
    description: "Next-gen gaming console for 4K immersive gameplay.",
  },
  {
    id: 8,
    title: "Logitech MX Master 3 Mouse",
    price: "₹8,000",
    location: "Kolkata",
    category: "Accessories",
    brand: "Logitech",
    images: [
      "https://images.pexels.com/photos/819711/pexels-photo-819711.jpeg",
      "https://images.pexels.com/photos/819712/pexels-photo-819712.jpeg",
      "https://images.pexels.com/photos/819713/pexels-photo-819713.jpeg",
      "https://images.pexels.com/photos/819714/pexels-photo-819714.jpeg",
      "https://images.pexels.com/photos/819715/pexels-photo-819715.jpeg"
    ],
    features: ["Wireless", "Ergonomic Design", "Fast Scrolling"],
    warranty: "6 Months",
    seller: "Logitech Kolkata",
    description: "Ergonomic wireless mouse with ultra-fast scrolling.",
  },
  {
    id: 9,
    title: "HP Pavilion Gaming Laptop",
    price: "₹70,000",
    location: "Delhi",
    category: "Laptop",
    brand: "HP",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18114/pexels-photo.jpg",
      "https://images.pexels.com/photos/18115/pexels-photo.jpg",
      "https://images.pexels.com/photos/18116/pexels-photo.jpg",
      "https://images.pexels.com/photos/18117/pexels-photo.jpg"
    ],
    features: ["Intel i7", "16GB RAM", "512GB SSD", "NVIDIA GTX 1650"],
    warranty: "1 Year",
    seller: "HP Store Delhi",
    description: "HP Pavilion Gaming laptop with high-end specs for gamers.",
  },
  {
    id: 10,
    title: "Amazon Echo Dot",
    price: "₹4,500",
    location: "Mumbai",
    category: "Smart Home",
    brand: "Amazon",
    images: [
      "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg",
      "https://images.pexels.com/photos/730565/pexels-photo-730565.jpeg",
      "https://images.pexels.com/photos/730566/pexels-photo-730566.jpeg",
      "https://images.pexels.com/photos/730567/pexels-photo-730567.jpeg",
      "https://images.pexels.com/photos/730568/pexels-photo-730568.jpeg"
    ],
    features: ["Voice Control", "Smart Home Integration", "Compact Size"],
    warranty: "6 Months",
    seller: "Amazon Mumbai",
    description: "Compact smart speaker with Alexa voice assistant.",
  },
  {
    id: 11,
    title: "Canon EOS 1500D DSLR",
    price: "₹28,000",
    location: "Bengaluru",
    category: "Camera",
    brand: "Canon",
    images: [
      "https://images.pexels.com/photos/159106/pexels-photo-159106.jpeg",
      "https://images.pexels.com/photos/159107/pexels-photo-159107.jpeg",
      "https://images.pexels.com/photos/159108/pexels-photo-159108.jpeg",
      "https://images.pexels.com/photos/159109/pexels-photo-159109.jpeg",
      "https://images.pexels.com/photos/159110/pexels-photo-159110.jpeg"
    ],
    features: ["24.1 MP", "Full HD Video", "APS-C Sensor"],
    warranty: "1 Year",
    seller: "Canon Store Bengaluru",
    description: "DSLR camera for photography enthusiasts and beginners.",
  },
  {
    id: 12,
    title: "Apple Watch Series 8",
    price: "₹40,000",
    location: "Pune",
    category: "Wearable",
    brand: "Apple",
    images: [
      "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg",
      "https://images.pexels.com/photos/277407/pexels-photo-277407.jpeg",
      "https://images.pexels.com/photos/277408/pexels-photo-277408.jpeg",
      "https://images.pexels.com/photos/277409/pexels-photo-277409.jpeg",
      "https://images.pexels.com/photos/277410/pexels-photo-277410.jpeg"
    ],
    features: ["Heart Rate Monitor", "GPS", "Water Resistant"],
    warranty: "1 Year",
    seller: "Apple Store Pune",
    description: "Smart wearable with health tracking and GPS.",
  },
  {
    id: 13,
    title: "Samsung Galaxy Tab S8",
    price: "₹55,000",
    location: "Hyderabad",
    category: "Tablet",
    brand: "Samsung",
    images: [
      "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg",
      "https://images.pexels.com/photos/5082586/pexels-photo-5082586.jpeg",
      "https://images.pexels.com/photos/5082587/pexels-photo-5082587.jpeg",
      "https://images.pexels.com/photos/5082588/pexels-photo-5082588.jpeg",
      "https://images.pexels.com/photos/5082589/pexels-photo-5082589.jpeg"
    ],
    features: ["11 inch Display", "8GB RAM", "128GB Storage"],
    warranty: "1 Year",
    seller: "Samsung Store Hyderabad",
    description: "Samsung tablet with powerful specs and crisp display.",
  },
  {
    id: 14,
    title: "JBL Flip 5 Speaker",
    price: "₹7,000",
    location: "Chennai",
    category: "Speaker",
    brand: "JBL",
    images: [
      "https://images.pexels.com/photos/1117933/pexels-photo-1117933.jpeg",
      "https://images.pexels.com/photos/1117938/pexels-photo-1117938.jpeg",
      "https://images.pexels.com/photos/1117939/pexels-photo-1117939.jpeg",
      "https://images.pexels.com/photos/1117940/pexels-photo-1117940.jpeg",
      "https://images.pexels.com/photos/1117941/pexels-photo-1117941.jpeg"
    ],
    features: ["Portable", "Waterproof", "12 Hours Battery"],
    warranty: "6 Months",
    seller: "JBL Chennai",
    description: "Portable speaker with waterproof design and long battery.",
  },
  {
    id: 15,
    title: "Microsoft Surface Laptop 4",
    price: "₹85,000",
    location: "Ahmedabad",
    category: "Laptop",
    brand: "Microsoft",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/18118/pexels-photo.jpg",
      "https://images.pexels.com/photos/18119/pexels-photo.jpg",
      "https://images.pexels.com/photos/18120/pexels-photo.jpg",
      "https://images.pexels.com/photos/18121/pexels-photo.jpg"
    ],
    features: ["Intel i5/i7", "8-16GB RAM", "256-512GB SSD", "13.5 inch Display"],
    warranty: "1 Year",
    seller: "Microsoft Store Ahmedabad",
    description: "Surface Laptop 4 for productivity with sleek design.",
  },
  {
    id: 16,
    title: "Nintendo Switch",
    price: "₹28,000",
    location: "Kolkata",
    category: "Gaming Console",
    brand: "Nintendo",
    images: [
      "https://images.pexels.com/photos/716363/pexels-photo-716363.jpeg",
      "https://images.pexels.com/photos/716368/pexels-photo-716368.jpeg",
      "https://images.pexels.com/photos/716369/pexels-photo-716369.jpeg",
      "https://images.pexels.com/photos/716370/pexels-photo-716370.jpeg",
      "https://images.pexels.com/photos/716371/pexels-photo-716371.jpeg"
    ],
    features: ["Portable", "Multiplayer", "Docking Station Included"],
    warranty: "1 Year",
    seller: "Nintendo Store Kolkata",
    description: "Versatile gaming console for home and on-the-go.",
  },
  {
    id: 17,
    title: "Sony Alpha a6400",
    price: "₹60,000",
    location: "Delhi",
    category: "Camera",
    brand: "Sony",
    images: [
      "https://images.pexels.com/photos/159106/pexels-photo-159106.jpeg",
      "https://images.pexels.com/photos/159111/pexels-photo-159111.jpeg",
      "https://images.pexels.com/photos/159112/pexels-photo-159112.jpeg",
      "https://images.pexels.com/photos/159113/pexels-photo-159113.jpeg",
      "https://images.pexels.com/photos/159114/pexels-photo-159114.jpeg"
    ],
    features: ["24.2 MP", "4K Video", "APS-C Sensor", "Fast Autofocus"],
    warranty: "1 Year",
    seller: "Sony Store Delhi",
    description: "Mirrorless camera with high-speed autofocus and 4K video.",
  },
  {
    id: 18,
    title: "Fitbit Charge 5",
    price: "₹12,000",
    location: "Mumbai",
    category: "Wearable",
    brand: "Fitbit",
    images: [
      "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg",
      "https://images.pexels.com/photos/277411/pexels-photo-277411.jpeg",
      "https://images.pexels.com/photos/277412/pexels-photo-277412.jpeg",
      "https://images.pexels.com/photos/277413/pexels-photo-277413.jpeg",
      "https://images.pexels.com/photos/277414/pexels-photo-277414.jpeg"
    ],
    features: ["Heart Rate Monitor", "Sleep Tracking", "GPS"],
    warranty: "6 Months",
    seller: "Fitbit Mumbai",
    description: "Fitness tracker for daily activity and sleep monitoring.",
  },
  {
    id: 19,
    title: "Google Nest Hub",
    price: "₹8,000",
    location: "Bengaluru",
    category: "Smart Home",
    brand: "Google",
    images: [
      "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg",
      "https://images.pexels.com/photos/730569/pexels-photo-730569.jpeg",
      "https://images.pexels.com/photos/730570/pexels-photo-730570.jpeg",
      "https://images.pexels.com/photos/730571/pexels-photo-730571.jpeg",
      "https://images.pexels.com/photos/730572/pexels-photo-730572.jpeg"
    ],
    features: ["Voice Control", "Smart Home Integration", "7 inch Display"],
    warranty: "6 Months",
    seller: "Google Store Bengaluru",
    description: "Smart display to control your home with Google Assistant.",
  },
  {
    id: 20,
    title: "Logitech C920 Webcam",
    price: "₹7,500",
    location: "Pune",
    category: "Accessories",
    brand: "Logitech",
    images: [
      "https://images.pexels.com/photos/819711/pexels-photo-819711.jpeg",
      "https://images.pexels.com/photos/819716/pexels-photo-819716.jpeg",
      "https://images.pexels.com/photos/819717/pexels-photo-819717.jpeg",
      "https://images.pexels.com/photos/819718/pexels-photo-819718.jpeg",
      "https://images.pexels.com/photos/819719/pexels-photo-819719.jpeg"
    ],
    features: ["1080p Video", "Stereo Audio", "Plug & Play"],
    warranty: "6 Months",
    seller: "Logitech Pune",
    description: "HD webcam for streaming, video calls, and content creation.",
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













