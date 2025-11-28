

"use client";
import React from "react";
import { useParams } from "next/navigation";
import DetailsCard from "../../Components/DetailsCard";

// Rename data to avoid conflict
const trendingDeals = [
 {
    id: 1,
    title: "iPhone 13 – Like New",
    price: "₹42,000",
    location: "Mumbai",
    description:
      "iPhone 13 in premium condition. 92% battery health, 5G support, no dents. Includes original box + charger.",
    category: "Mobiles",
    condition: "Like New",
    year: 2022,
    posted: "2 Days Ago",
    seller: "Rohit Sharma",
    isFeatured: true,
    features: [
      "5G Supported",
      "92% Battery Health",
      "128GB Storage",
      "Original Box + Charger",
      "No Scratches / No Dent",
    ],
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
    condition: "Used",
    year: 2020,
    posted: "1 Week Ago",
    seller: "Amit Verma",
    isFeatured: false,
    features: [
      "New Tyres",
      "Single Owner",
      "Well Maintained",
      "Excellent Mileage",
      "All Service Record Available",
    ],
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
    condition: "Like New",
    year: 2023,
    posted: "5 Days Ago",
    seller: "Rahul Singh",
    isFeatured: true,
    features: [
      "Ryzen 7 Processor",
      "RTX Graphics",
      "Backlit Keyboard",
      "144Hz Display",
      "Great for Gaming + Editing",
    ],
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
    condition: "Used",
    year: 2019,
    posted: "3 Days Ago",
    seller: "Vikas Mehta",
    isFeatured: true,
    features: [
      "32,000 km Driven",
      "Single Owner",
      "Showroom Serviced",
      "Excellent Mileage",
      "Comfortable Interior",
    ],
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
    condition: "Like New",
    year: 2021,
    posted: "10 Days Ago",
    seller: "Shivam Gupta",
    isFeatured: false,
    features: [
      "Smart TV",
      "4K HDR Display",
      "Dolby Audio",
      "55-inch Panel",
      "Wi-Fi + Bluetooth",
    ],
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1583512603871-7c98f2639b1f",
      "https://images.unsplash.com/photo-1601944178857-0be3be0b53ab",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    ],
  },

  {
    id: 6,
    title: "MacBook Air M1 – 2021",
    price: "₹62,000",
    location: "Ahmedabad",
    description:
      "MacBook Air M1 — ultra-fast, slim, 8GB RAM, 256GB SSD, best for office + editing.",
    category: "Laptops",
    condition: "Like New",
    year: 2021,
    posted: "4 Days Ago",
    seller: "Harsh Patel",
    isFeatured: true,
    features: [
      "Apple M1 Chip",
      "8GB RAM / 256GB SSD",
      "Slim & Lightweight",
      "Long Battery Backup",
      "Great for Work + Editing",
    ],
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      "https://images.unsplash.com/photo-1587202372775-6b6a8f7f0e5c",
      "https://images.unsplash.com/photo-1580894908361-73077b4b7b12",
      "https://images.unsplash.com/photo-1517336714731-1f5f2cfb6f5b",
    ],
  },];

export default function TrendingDetails() {
  const { id } = useParams();
  const ad = trendingDeals.find((item) => item.id === Number(id));

  if (!ad) return <p>Ad not found</p>;

  return (
    <div className="p-5 flex justify-center">
      <DetailsCard ad={ad} />
    </div>
  );
}
