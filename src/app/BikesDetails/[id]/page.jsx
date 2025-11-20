"use client";

import React, { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import Link from "next/link";

import { motion } from "framer-motion";

export const featuredAds = [
  {
    id: 1,
    title: "Royal Enfield Classic 350",
    price: "₹1,50,000",
    location: "Delhi",
    category: "Classic",
    brand: "Royal Enfield",
    images: [
      "https://images.pexels.com/photos/17693829/pexels-photo-17693829.jpeg",
      "https://images.pexels.com/photos/1156322/pexels-photo-1156322.jpeg",
      "https://images.pexels.com/photos/1449424/pexels-photo-1449424.jpeg",
      "https://images.pexels.com/photos/1104767/pexels-photo-1104767.jpeg",
      "https://images.pexels.com/photos/17693830/pexels-photo-17693830.jpeg",
    ],
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "18,000 km",
    owner: "1st Owner",
    condition: "Excellent",
    description:
      "Royal Enfield Classic 350 in excellent condition with premium exhaust and fresh service. No scratches and smooth engine.",
    features: [
      "ABS Brakes",
      "Electric Start",
      "Service Record",
      "Tubeless Tyres",
      "LED Indicators",
      "New Battery",
    ],
  },

  {
    id: 2,
    title: "Honda CB Shine",
    price: "₹90,000",
    location: "Mumbai",
    category: "Commuter",
    brand: "Honda",
    images: [
      "https://images.pexels.com/photos/1166751/pexels-photo-1166751.jpeg",
      "https://images.pexels.com/photos/17693664/pexels-photo-17693664.jpeg",
      "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg",
      "https://images.pexels.com/photos/1456619/pexels-photo-1456619.jpeg",
      "https://images.pexels.com/photos/17693774/pexels-photo-17693774.jpeg",
    ],
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "22,500 km",
    owner: "1st Owner",
    condition: "Very Good",
    description:
      "Honda CB Shine 125 with smooth engine and excellent mileage. Perfect for daily use.",
    features: [
      "Alloy Wheels",
      "Front Disc Brake",
      "Premium Mileage",
      "Self Start",
      "New Tyres",
    ],
  },

  {
    id: 3,
    title: "Bajaj Pulsar NS200",
    price: "₹1,45,000",
    location: "Pune",
    category: "Sports",
    brand: "Bajaj",
    images: [
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg",
      "https://images.pexels.com/photos/17693759/pexels-photo-17693759.jpeg",
      "https://images.pexels.com/photos/1410582/pexels-photo-1410582.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg",
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    ],
    year: 2022,
    fuel: "Petrol",
    kmsDriven: "12,000 km",
    owner: "1st Owner",
    condition: "Excellent",
    description:
      "Bajaj Pulsar NS200 with aggressive design, powerful performance. Recently serviced.",
    features: [
      "Liquid Cooling",
      "ABS",
      "Digital Speedometer",
      "Sport Silencer",
      "Tubeless Tyres",
    ],
  },

  {
    id: 4,
    title: "TVS Apache RTR 160",
    price: "₹1,29,000",
    location: "Hyderabad",
    category: "Sports",
    brand: "TVS",
    images: [
      "https://images.pexels.com/photos/3778707/pexels-photo-3778707.jpeg",
      "https://images.pexels.com/photos/205314/pexels-photo-205314.jpeg",
      "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg",
      "https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg",
      "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg",
    ],
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "15,800 km",
    owner: "2nd Owner",
    condition: "Good",
    description:
      "RTR 160 with responsive throttle and strong pickup. Smooth engine, maintained well.",
    features: [
      "Racing Mode",
      "Rear Disc Brake",
      "LED DRL",
      "Sport Suspension",
      "Digital Console",
    ],
  },

  {
    id: 5,
    title: "Hero Splendor Plus",
    price: "₹75,000",
    location: "Jaipur",
    category: "Commuter",
    brand: "Hero",
    images: [
      "https://images.pexels.com/photos/382753/pexels-photo-382753.jpeg",
      "https://images.pexels.com/photos/1141746/pexels-photo-1141746.jpeg",
      "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg",
      "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
      "https://images.pexels.com/photos/1449424/pexels-photo-1449424.jpeg",
    ],
    year: 2019,
    fuel: "Petrol",
    kmsDriven: "30,000 km",
    owner: "1st Owner",
    condition: "Good",
    description:
      "Hero Splendor Plus with excellent mileage and very low maintenance cost.",
    features: [
      "High Mileage",
      "Alloy Wheels",
      "Self Start",
      "Front Suspension",
      "Sturdy Engine",
    ],
  },

  {
    id: 6,
    title: "KTM Duke 200",
    price: "₹2,15,000",
    location: "Bengaluru",
    category: "Sports",
    brand: "KTM",
    images: [
      "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
      "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg",
      "https://images.pexels.com/photos/633167/pexels-photo-633167.jpeg",
      "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg",
      "https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg",
    ],
    year: 2023,
    fuel: "Petrol",
    kmsDriven: "8,000 km",
    owner: "1st Owner",
    condition: "Like New",
    description:
      "KTM Duke 200 with aggressive styling and premium performance. Well maintained.",
    features: [
      "Liquid Cooled Engine",
      "WP Suspension",
      "ABS",
      "Digital Meter",
      "Projector Headlamps",
    ],
  },

  {
    id: 7,
    title: "Royal Enfield Himalayan",
    price: "₹1,80,000",
    location: "Chennai",
    category: "Adventure",
    brand: "Royal Enfield",
    images: [
      "https://images.pexels.com/photos/896688/pexels-photo-896688.jpeg",
      "https://images.pexels.com/photos/302056/pexels-photo-302056.jpeg",
      "https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg",
      "https://images.pexels.com/photos/2549943/pexels-photo-2549943.jpeg",
      "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    ],
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "20,500 km",
    owner: "1st Owner",
    condition: "Very Good",
    description:
      "Royal Enfield Himalayan adventure bike, perfect for long touring and off-roading.",
    features: [
      "High Ground Clearance",
      "Windshield",
      "ABS",
      "Dual Disc Brakes",
      "Fuel Injection",
    ],
  },

  {
    id: 8,
    title: "Suzuki Access 125",
    price: "₹65,000",
    location: "Ahmedabad",
    category: "Scooter",
    brand: "Suzuki",
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/1449424/pexels-photo-1449424.jpeg",
      "https://images.pexels.com/photos/314374/pexels-photo-314374.jpeg",
      "https://images.pexels.com/photos/205314/pexels-photo-205314.jpeg",
      "https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg",
    ],
    year: 2019,
    fuel: "Petrol",
    kmsDriven: "28,000 km",
    owner: "2nd Owner",
    condition: "Good",
    description:
      "Suzuki Access 125 with smooth performance and high comfort for city rides.",
    features: [
      "Large Boot Space",
      "Metal Body",
      "Self Start",
      "Front Disc",
      "Great Mileage",
    ],
  },

  {
    id: 9,
    title: "Yamaha FZ-S",
    price: "₹1,05,000",
    location: "Kolkata",
    category: "Commuter",
    brand: "Yamaha",
    images: [
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
      "https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg",
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      "https://images.pexels.com/photos/563774/pexels-photo-563774.jpeg",
      "https://images.pexels.com/photos/302156/pexels-photo-302156.jpeg",
    ],
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "19,500 km",
    owner: "1st Owner",
    condition: "Very Good",
    description:
      "Yamaha FZ-S with muscular look, great mileage and strong mid-range performance.",
    features: [
      "FI Engine",
      "LED Headlamp",
      "Alloy Wheels",
      "ABS",
      "Comfort Seat",
    ],
  },

  {
    id: 10,
    title: "Honda Activa 6G",
    price: "₹60,000",
    location: "Delhi",
    category: "Scooter",
    brand: "Honda",
    images: [
      "https://images.pexels.com/photos/14626382/pexels-photo-14626382.jpeg",
      "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg",
      "https://images.pexels.com/photos/163084/motorcycle-scooter-vehicle-vespa-163084.jpeg",
      "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
      "https://images.pexels.com/photos/3689093/pexels-photo-3689093.jpeg",
    ],
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "22,000 km",
    owner: "1st Owner",
    condition: "Good",
    description:
      "Activa 6G, India’s most trusted scooter with excellent performance and mileage.",
    features: [
      "Silent Start",
      "Metal Body",
      "Service Record",
      "LED Tail Lamp",
      "Tubeless Tyres",
    ],
  },
  {
    id: 11,
    title: "Bajaj Avenger Cruise 220",
    price: "₹1,40,000",
    location: "Mumbai",
    category: "Cruiser",
    brand: "Bajaj",
    images: [
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/980395/pexels-photo-980395.jpeg",
      "https://images.pexels.com/photos/17693779/pexels-photo-17693779.jpeg",
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
      "https://images.pexels.com/photos/764185/pexels-photo-764185.jpeg",
    ],
    year: 2019,
    fuel: "Petrol",
    kmsDriven: "24,000 km",
    owner: "2nd Owner",
    condition: "Very Good",
    description:
      "Cruiser bike with long comfortable seats, perfect for touring.",
    features: [
      "Low Seating",
      "Front Disc",
      "Cruiser Handle",
      "Chrome Finish",
      "Wide Rear Tyre",
    ],
  },

  {
    id: 12,
    title: "Yamaha R15 V4",
    price: "₹1,80,000",
    location: "Pune",
    category: "Sports",
    brand: "Yamaha",
    images: [
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      "https://images.pexels.com/photos/17693740/pexels-photo-17693740.jpeg",
      "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg",
      "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
      "https://images.pexels.com/photos/1212408/pexels-photo-1212408.jpeg",
    ],
    year: 2023,
    fuel: "Petrol",
    kmsDriven: "10,500 km",
    owner: "1st Owner",
    condition: "Excellent",
    description:
      "Yamaha R15 V4 in signature racing design. Best-in-class performance.",
    features: [
      "Quick Shifter",
      "Dual ABS",
      "LED Headlamps",
      "Digital Cluster",
      "Sport Riding Posture",
    ],
  },

  {
    id: 13,
    title: "Hero Karizma ZMR",
    price: "₹90,000",
    location: "Bengaluru",
    category: "Sports",
    brand: "Hero",
    images: [
      "https://images.pexels.com/photos/158056/motorcycle-street-bikelife-bike-158056.jpeg",
      "https://images.pexels.com/photos/17693713/pexels-photo-17693713.jpeg",
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg",
      "https://images.pexels.com/photos/46228/road-asphalt-space-sky-46228.jpeg",
      "https://images.pexels.com/photos/9817/pexels-photo.jpg",
    ],
    year: 2018,
    fuel: "Petrol",
    kmsDriven: "30,800 km",
    owner: "2nd Owner",
    condition: "Good",
    description:
      "Hero Karizma ZMR with great comfort for long rides and smooth engine response.",
    features: [
      "Full Fairing",
      "Projector Headlight",
      "Digital Console",
      "Disc Brakes",
      "Wide Tyres",
    ],
  },

  {
    id: 14,
    title: "TVS Jupiter",
    price: "₹80,000",
    location: "Chennai",
    category: "Scooter",
    brand: "TVS",
    images: [
      "https://images.pexels.com/photos/369941/pexels-photo-369941.jpeg",
      "https://images.pexels.com/photos/1456619/pexels-photo-1456619.jpeg",
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg",
      "https://images.pexels.com/photos/17693664/pexels-photo-17693664.jpeg",
      "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg",
    ],
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "26,600 km",
    owner: "1st Owner",
    condition: "Very Good",
    description:
      "TVS Jupiter premium scooter with comfort ride and reliable engine.",
    features: [
      "External Fuel Cap",
      "Large Storage",
      "Front Disc",
      "LED Lamp",
      "Alloy Wheels",
    ],
  },

  {
    id: 15,
    title: "KTM RC 200",
    price: "₹2,30,000",
    location: "Jaipur",
    category: "Sports",
    brand: "KTM",
    images: [
      "https://images.pexels.com/photos/237692/pexels-photo-237692.jpeg",
      "https://images.pexels.com/photos/17693776/pexels-photo-17693776.jpeg",
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg",
      "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
      "https://images.pexels.com/photos/1476207/pexels-photo-1476207.jpeg",
    ],
    year: 2023,
    fuel: "Petrol",
    kmsDriven: "9,200 km",
    owner: "1st Owner",
    condition: "Like New",
    description:
      "KTM RC 200 fully faired sports bike, sharp handling and race-ready performance.",
    features: [
      "Full Fairing",
      "ABS",
      "WP Suspension",
      "Liquid Cooling",
      "LED Indicators",
    ],
  },

  {
    id: 16,
    title: "Royal Enfield Bullet 350",
    price: "₹1,50,000",
    location: "Hyderabad",
    category: "Classic",
    brand: "Royal Enfield",
    images: [
      "https://images.pexels.com/photos/2175298/pexels-photo-2175298.jpeg",
      "https://images.pexels.com/photos/17693830/pexels-photo-17693830.jpeg",
      "https://images.pexels.com/photos/1156322/pexels-photo-1156322.jpeg",
      "https://images.pexels.com/photos/1104767/pexels-photo-1104767.jpeg",
      "https://images.pexels.com/photos/1449424/pexels-photo-1449424.jpeg",
    ],
    year: 2019,
    fuel: "Petrol",
    kmsDriven: "27,000 km",
    owner: "2nd Owner",
    condition: "Good",
    description:
      "Bullet 350 with legendary thump sound. Good running and well maintained.",
    features: [
      "Kick + Self Start",
      "Chrome Finish",
      "Classic Exhaust",
      "Wide Seat",
      "Metal Body",
    ],
  },

  {
    id: 17,
    title: "Yamaha Fascino 125",
    price: "₹62,000",
    location: "Delhi",
    category: "Scooter",
    brand: "Yamaha",
    images: [
      "https://images.pexels.com/photos/237692/pexels-photo-237692.jpeg",
      "https://images.pexels.com/photos/1456619/pexels-photo-1456619.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/17693664/pexels-photo-17693664.jpeg",
      "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg",
    ],
    year: 2021,
    fuel: "Petrol",
    kmsDriven: "19,000 km",
    owner: "1st Owner",
    condition: "Very Good",
    description:
      "Stylish scooter with lightweight body and impressive mileage.",
    features: [
      "Lightweight",
      "FI Engine",
      "Tubeless Tyres",
      "Stylish Design",
      "LED Tail Lamps",
    ],
  },

  {
    id: 18,
    title: "Honda CB Hornet 160R",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Sports",
    brand: "Honda",
    images: [
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg",
      "https://images.pexels.com/photos/17693740/pexels-photo-17693740.jpeg",
      "https://images.pexels.com/photos/9817/pexels-photo.jpg",
      "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg",
      "https://images.pexels.com/photos/1410582/pexels-photo-1410582.jpeg",
    ],
    year: 2019,
    fuel: "Petrol",
    kmsDriven: "29,800 km",
    owner: "2nd Owner",
    condition: "Good",
    description: "Hornet 160R with aggressive design and superior handling.",
    features: [
      "Petal Disc",
      "LED Headlamp",
      "Wide Handle",
      "Comfort Suspension",
      "Digital Meter",
    ],
  },

  {
    id: 19,
    title: "Bajaj CT 100",
    price: "₹55,000",
    location: "Kolkata",
    category: "Commuter",
    brand: "Bajaj",
    images: [
      "https://images.pexels.com/photos/1059942/pexels-photo-1059942.jpeg",
      "https://images.pexels.com/photos/9827/pexels-photo.jpg",
      "https://images.pexels.com/photos/1449424/pexels-photo-1449424.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg",
      "https://images.pexels.com/photos/764185/pexels-photo-764185.jpeg",
    ],
    year: 2018,
    fuel: "Petrol",
    kmsDriven: "35,500 km",
    owner: "2nd Owner",
    condition: "Good",
    description:
      "CT 100 with high mileage, perfect for daily use and low maintenance.",
    features: [
      "Kick Start",
      "High Mileage",
      "Lightweight",
      "Alloy Wheels",
      "Reliable Engine",
    ],
  },

  {
    id: 20,
    title: "Hero Maestro Edge",
    price: "₹65,000",
    location: "Pune",
    category: "Scooter",
    brand: "Hero",
    images: [
      "https://images.pexels.com/photos/382996/pexels-photo-382996.jpeg",
      "https://images.pexels.com/photos/1456619/pexels-photo-1456619.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg",
      "https://images.pexels.com/photos/17693664/pexels-photo-17693664.jpeg",
    ],
    year: 2020,
    fuel: "Petrol",
    kmsDriven: "21,500 km",
    owner: "1st Owner",
    condition: "Very Good",
    description:
      "Hero Maestro Edge with stylish looks, great performance and strong build.",
    features: [
      "Side Stand Indicator",
      "Boot Light",
      "Alloy Wheels",
      "Large Storage",
      "Tubeless Tyres",
    ],
  },
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
