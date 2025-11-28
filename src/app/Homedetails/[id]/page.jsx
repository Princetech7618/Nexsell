

"use client";
import React from "react";
import { useParams } from "next/navigation";
import DetailsCard from "../../Components/DetailsCard";
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
  const { id } = useParams();
  const ad = featuredAds.find((item) => item.id == id);

  if (!ad) return <p className="text-center py-20">Ad not found</p>;

  return (
    <div className="flex justify-center py-10 px-4">
      <DetailsCard ad={ad} type="listing" />
    </div>
  );
}