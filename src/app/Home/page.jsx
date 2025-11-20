





// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import HeroSection from "../Components/Hero";
// import { motion } from "framer-motion";


// function AnimatedNumber({ value, duration = 2000, decimals = 0 }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTime = null;
//     const end =
//       typeof value === "number"
//         ? value
//         : parseFloat(value.toString().replace(/[^\d.]/g, "")) || 0;

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const ratio = Math.min(progress / duration, 1);
//       const current = end * ratio;
//       setCount(current);

//       if (progress < duration) {
//         window.requestAnimationFrame(step);
//       } else {
//         setCount(end);
//       }
//     };

//     window.requestAnimationFrame(step);
//   }, [value, duration]);

//   return (
//     <>
//       {count.toLocaleString(undefined, {
//         minimumFractionDigits: decimals,
//         maximumFractionDigits: decimals,
//       })}
//     </>
//   );
// }

// const totalItems = 34721;

// const categories = [
//   "All",
//   "Mobiles",
//   "Cars",
//   "Bikes",
//   "Electronics",
//   "Commercial",
// ];
// const brands = [
//   "All",
//   "Apple",
//   "Samsung",
//   "Redmi",
//   "Maruti",
//   "Hyundai",
//   "Royal Enfield",
//   "Sony",
//   "Dell",
//   "LG",
//   "Tata",
//   "Mahindra",
//   "Ashok Leyland",
// ];

// const testimonials = [
//   {
//     name: "Rohit Sharma",
//     location: "Mumbai",
//     feedback:
//       "Nexsell helped me sell my bike within 24 hours! Super smooth experience.",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Priya Mehta",
//     location: "Delhi",
//     feedback:
//       "Amazing platform for finding verified buyers. Highly recommended!",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Arjun Verma",
//     location: "Bengaluru",
//     feedback:
//       "User interface is clean and easy. Got a great deal on my used car!",
//     img: "https://randomuser.me/api/portraits/men/85.jpg",
//   },
// ];

// const featuredAds = [
//   {
//     id: 1,
//     title: "iPhone 13 – 128GB, Excellent Condition",
//     price: "₹42,500",
//     location: "Delhi",
//     category: "Mobiles",
//     img: "https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg",
//   },
//   {
//     id: 2,
//     title: "Samsung Galaxy S21 FE – 5G",
//     price: "₹23,000",
//     location: "Mumbai",
//     category: "Mobiles",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
//   },
//   {
//     id: 3,
//     title: "Redmi Note 12 Pro – 6GB RAM",
//     price: "₹14,500",
//     location: "Jaipur",
//     category: "Mobiles",
//     img: "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
//   },
//   {
//     id: 4,
//     title: "Maruti Swift 2019 VXI",
//     price: "₹4,50,000",
//     location: "Jaipur",
//     category: "Cars",
//     img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
//   },
//   {
//     id: 5,
//     title: "Royal Enfield Classic 350 – 2021",
//     price: "₹1,10,000",
//     location: "Mumbai",
//     category: "Bikes",
//     img: "https://images.pexels.com/photos/17693829/pexels-photo-17693829.jpeg",
//   },
//   {
//     id: 6,
//     title: "Hyundai i20 2018 Sports",
//     price: "₹3,95,000",
//     location: "Pune",
//     category: "Cars",
//     img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
//   },
//   {
//     id: 7,
//     title: "Sony 55-inch 4K Smart TV – HDR",
//     price: "₹36,000",
//     location: "Bengaluru",
//     category: "Electronics",
//     img: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg",
//   },
//   {
//     id: 8,
//     title: "Dell Inspiron i5 Laptop – 8GB RAM",
//     price: "₹28,000",
//     location: "Pune",
//     category: "Electronics",
//     img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
//   },
//   {
//     id: 9,
//     title: "LG 1.5 Ton Inverter AC – 5 Star",
//     price: "₹22,500",
//     location: "Chandigarh",
//     category: "Electronics",
//     img: "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg",
//   },
//   {
//     id: 10,
//     title: "Tata Ace Gold – 2018 Model",
//     price: "₹2,25,000",
//     location: "Ahmedabad",
//     category: "Commercial",
//     img: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
//   },
//   {
//     id: 11,
//     title: "Mahindra Bolero Pickup – 2020",
//     price: "₹3,10,000",
//     location: "Indore",
//     category: "Commercial",
//     img: "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
//   },
//   {
//     id: 12,
//     title: "Ashok Leyland Dost – 2019",
//     price: "₹4,80,000",
//     location: "Kolkata",
//     category: "Commercial",
//     img: "https://images.pexels.com/photos/163845/truck-heavy-transportation-vehicle-163845.jpeg",
//   },
// ];

// const locations = [
//   {
//     name: "Delhi",
//     img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500",
//   },
//   {
//     name: "Mumbai",
//     img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=500",
//   },
//   {
//     name: "Bangalore",
//     img: "https://images.unsplash.com/photo-1596783074918-c99454a5c0e9?w=500",
//   },
//   {
//     name: "Hyderabad",
//     img: "https://images.unsplash.com/photo-1587474267370-4ce5026f1c19?w=500",
//   },
//   {
//     name: "Chennai",
//     img: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=500",
//   },
//   {
//     name: "Kolkata",
//     img: "https://images.unsplash.com/photo-1538334421857-687fd3ad1ebb?w=500",
//   },
// ];



// export default function Home() {
//   // Filter states for main listings
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const [priceRange, setPriceRange] = useState([0, 9999999]);
//   const [searchText, setSearchText] = useState("");
//   // User's own listings loaded from local storage
//   const [allListings, setAllListings] = useState([]);

//   // Load user listings on mount
//   useEffect(() => {
//     try {
//       const stored = JSON.parse(localStorage.getItem("sellFormDataList")) || [];
//       setAllListings(Array.isArray(stored) ? stored : [stored]);
//     } catch {
//       setAllListings([]);
//     }
//   }, []);

//   // Brand extraction helper
//   function getBrandFromTitle(title) {
//     for (const brand of brands.slice(1)) {
//       if (title.toLowerCase().includes(brand.toLowerCase().replace(/ /g, ""))) {
//         return brand;
//       }
//     }
//     if (title.toLowerCase().includes("swift")) return "Maruti";
//     if (title.toLowerCase().includes("i20")) return "Hyundai";
//     if (title.toLowerCase().includes("note")) return "Redmi";
//     return "";
//   }

//   // Filter featured ads based on selected filters
//   const filteredAds = featuredAds.filter((ad) => {
//     const catMatch =
//       selectedCategory === "All" || ad.category === selectedCategory;
//     const brandMatch =
//       selectedBrand === "All" || getBrandFromTitle(ad.title) === selectedBrand;
//     const adPrice = parseInt(ad.price.replace(/[^\d]/g, "").replace(/,/g, ""));
//     const priceMatch = adPrice >= priceRange[0] && adPrice <= priceRange[1];
//     const search =
//       searchText === "" ||
//       ad.title.toLowerCase().includes(searchText.toLowerCase()) ||
//       ad.location.toLowerCase().includes(searchText.toLowerCase());
//     return catMatch && brandMatch && priceMatch && search;
//   });

//   return (
//     <main className="overflow-hidden bg-white text-gray-900 font-serif">
//       {/* HERO */}
//       <HeroSection
//         tittle="Sell Anything, Anytime, Anywhere"
//         bgImg="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
//         text="Buy & Sell Cars, Bikes, Scooters — Fast, Safe, and Easy in Your City!"
//       />

//       {/* FILTERS */}
//       <section className="max-w-7xl mx-auto px-6 py-6">
//         <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-lg">
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-1">Category:</label>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="p-2 border rounded-md text-sm w-40"
//             >
//               {categories.map((cat) => (
//                 <option key={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-1">Brand:</label>
//             <select
//               value={selectedBrand}
//               onChange={(e) => setSelectedBrand(e.target.value)}
//               className="p-2 border rounded-md text-sm w-40"
//             >
//               {brands.map((brand) => (
//                 <option key={brand}>{brand}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-1">Price Range:</label>
//             <div className="flex gap-2">
//               <input
//                 type="number"
//                 value={priceRange[0]}
//                 min={0}
//                 onChange={(e) =>
//                   setPriceRange([Number(e.target.value), priceRange[1]])
//                 }
//                 placeholder="From"
//                 className="p-2 border rounded-md text-sm w-20"
//               />
//               <input
//                 type="number"
//                 value={priceRange[1]}
//                 min={0}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], Number(e.target.value)])
//                 }
//                 placeholder="To"
//                 className="p-2 border rounded-md text-sm w-20"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 min-w-[200px]">
//             <label className="text-gray-700 mb-1">Search:</label>
//             <input
//               type="text"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               placeholder="By title or location..."
//               className="p-2 border rounded-md text-sm w-full"
//             />
//           </div>
//           <div className="flex items-end">
//             <button
//               onClick={() => {
//                 setSelectedCategory("All");
//                 setSelectedBrand("All");
//                 setPriceRange([0, 9999999]);
//                 setSearchText("");
//               }}
//               className="p-2 mt-5 bg-indigo-500 text-white rounded-full shadow transition hover:bg-indigo-600"
//             >
//               Reset Filters
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* LISTINGS GRID */}
//       <section className="max-w-7xl mx-auto px-6 py-10">
//         <h2 className="text-5xl mb-6 text-indigo-600 text-center">Latest Listings</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredAds.length === 0 ? (
//             <div className="col-span-full text-center text-gray-500 py-20">
//               No listings found.
//             </div>
//           ) : (
//             filteredAds.map((ad) => (
//               <Link
//                 key={ad.id}
//                 href={`/Homedetails/${ad.id}`}
//                 className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition group cursor-pointer flex flex-col"
//               >
//                 <img
//                   src={ad.img}
//                   alt={ad.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg truncate">{ad.title}</h3>
//                   <p className="text-indigo-600 font-bold mt-1">{ad.price}</p>
//                   <p className="text-gray-500 text-sm">{ad.location}</p>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </section>

//       {/* ABOUT */}
      // <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center bg-indigo-50 rounded-3xl shadow-lg gap-8">
      //   <div className="md:w-1/2">
      //     <img
      //       src="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
      //       alt="About Nexsell"
      //       className="w-full rounded-lg"
      //     />
      //   </div>
      //   <div className="md:w-1/2">
      //     <h2 className="text-4xl font-bold text-indigo-700 mb-6">About Nexsell</h2>
      //     <p className="text-gray-700 mb-8 text-lg">
      //       Nexsell helps you sell anything fast — with verified buyers, secure payments, and the best deals.
      //     </p>
      //     <Link
      //       href="/About"
      //       className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
      //     >
      //       Explore Now
      //     </Link>
      //   </div>
      // </section>
//           {/* MY LISTINGS */}
//       <section className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">My Listings</h1>
//         {allListings.length === 0 ? (
//           <p className="text-center text-gray-500">No listings found.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {allListings.map((item, idx) => (
//               <Link key={idx} href={`/ListingsDetails/${idx}`}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   whileHover={{
//                     scale: 1.03,
             
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="cursor-pointer bg-white rounded-xl shadow-lg  overflow-hidden"
//                 >
//                   {item?.images?.length ? (
//                     <img
//                       src={item.images[0]}
//                       alt={item.title}
//                       className="h-52 w-full object-cover rounded-t-xl"
//                     />
//                   ) : (
//                     <div className="h-52 w-full bg-indigo-50 flex items-center justify-center text-indigo-300">
//                       No Image
//                     </div>
//                   )}
//                   <div className="p-5">
//                     <h2 className="text-lg font-bold text-black">{item.title}</h2>
//                     <p className="text-indigo-600 font-semibold mt-2">₹{item.price}</p>
//                     <p className="text-gray-700 text-md mt-1">{item.location}</p>
//                   </div>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* WHY NEXSELL */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold mb-12 text-indigo-700">Why Choose Nexsell?</h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1 hover:scale-105">
//               <h3 className="text-2xl font-bold text-indigo-600 mb-4">Fast Selling</h3>
//               <p>Post your ad & get buyers quickly.</p>
//             </div>
//             <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1 hover:scale-105">
//               <h3 className="text-2xl font-bold text-indigo-600 mb-4">Verified Buyers</h3>
//               <p>Connect with genuine people.</p>
//             </div>
//             <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1 hover:scale-105">
//               <h3 className="text-2xl font-bold text-indigo-600 mb-4">Secure Platform</h3>
//               <p>Safe & scam-free experience.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl text-indigo-600 mb-12">What Our Users Say</h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {testimonials.map((t, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
//               >
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="w-20 h-20 mx-auto rounded-full mb-6"
//                 />
//                 <p className="italic mb-6">"{t.feedback}"</p>
//                 <h4 className="font-semibold text-indigo-600">{t.name}</h4>
//                 <p className="text-gray-500 text-sm">{t.location}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LOCATIONS */}
      // <section className="py-20 bg-gray-100">
      //   <div className="max-w-7xl mx-auto px-6">
      //     <h2 className="text-4xl text-center mb-10 text-indigo-600">Popular Locations</h2>
      //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      //       {locations.map((loc, index) => (
      //         <div
      //           key={index}
      //           className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer"
      //         >
      //           <img
      //             src={loc.img}
      //             alt={loc.name}
      //             className="w-full h-48 object-cover group-hover:scale-110 transition"
      //           />
      //           <div className="absolute bottom-4 left-4 text-white">
      //             <h3 className="text-xl">{loc.name}</h3>
      //             {/* <span className="px-4 py-1 bg-indigo-600 rounded-full text-sm">Explore →</span> */}
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

  
//     </main>
//   );
// }







"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "../Components/Hero";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Link } from "lucide-react";

function AnimatedNumber({ value, duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const end =
      typeof value === "number"
        ? value
        : parseFloat(value.toString().replace(/[^\d.]/g, "")) || 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const ratio = Math.min(progress / duration, 1);
      const current = end * ratio;
      setCount(current);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

const categories = ["All", "Mobiles", "Cars", "Bikes", "Electronics", "Commercial"];
const brands = [
  "All",
  "Apple",
  "Samsung",
  "Redmi",
  "Maruti",
  "Hyundai",
  "Royal Enfield",
  "Sony",
  "Dell",
  "LG",
  "Tata",
  "Mahindra",
  "Ashok Leyland",
];

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Mumbai",
    feedback: "Nexsell helped me sell my bike within 24 hours! Super smooth experience.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    location: "Delhi",
    feedback: "Amazing platform for finding verified buyers. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Verma",
    location: "Bengaluru",
    feedback: "User interface is clean and easy. Got a great deal on my used car!",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const featuredAds = [
  {
    id: 1,
    title: "iPhone 13 – 128GB, Excellent Condition",
    price: "₹42,500",
    location: "Delhi",
    category: "Mobiles",
    img: "https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21 FE – 5G",
    price: "₹23,000",
    location: "Mumbai",
    category: "Mobiles",
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
  },
  {
    id: 3,
    title: "Redmi Note 12 Pro – 6GB RAM",
    price: "₹14,500",
    location: "Jaipur",
    category: "Mobiles",
    img: "https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg",
  },
  {
    id: 4,
    title: "Maruti Swift 2019 VXI",
    price: "₹4,50,000",
    location: "Jaipur",
    category: "Cars",
    img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    id: 5,
    title: "Royal Enfield Classic 350 – 2021",
    price: "₹1,10,000",
    location: "Mumbai",
    category: "Bikes",
    img: "https://images.pexels.com/photos/17693829/pexels-photo-17693829.jpeg",
  },
  {
    id: 6,
    title: "Hyundai i20 2018 Sports",
    price: "₹3,95,000",
    location: "Pune",
    category: "Cars",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  },
  {
    id: 7,
    title: "Sony 55-inch 4K Smart TV – HDR",
    price: "₹36,000",
    location: "Bengaluru",
    category: "Electronics",
    img: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg",
  },
  {
    id: 8,
    title: "Dell Inspiron i5 Laptop – 8GB RAM",
    price: "₹28,000",
    location: "Pune",
    category: "Electronics",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 9,
    title: "LG 1.5 Ton Inverter AC – 5 Star",
    price: "₹22,500",
    location: "Chandigarh",
    category: "Electronics",
    img: "https://images.pexels.com/photos/1454826/pexels-photo-1454826.jpeg",
  },
  {
    id: 10,
    title: "Tata Ace Gold – 2018 Model",
    price: "₹2,25,000",
    location: "Ahmedabad",
    category: "Commercial",
    img: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
  },
  {
    id: 11,
    title: "Mahindra Bolero Pickup – 2020",
    price: "₹3,10,000",
    location: "Indore",
    category: "Commercial",
    img: "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
  },
  {
    id: 12,
    title: "Ashok Leyland Dost – 2019",
    price: "₹4,80,000",
    location: "Kolkata",
    category: "Commercial",
    img: "https://images.pexels.com/photos/163845/truck-heavy-transportation-vehicle-163845.jpeg",
  },
];

const locations = [
  { name: "Delhi", img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500" },
  { name: "Mumbai", img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=500" },
  { name: "Bangalore", img: "https://images.unsplash.com/photo-1596783074918-c99454a5c0e9?w=500" },
  { name: "Hyderabad", img: "https://images.unsplash.com/photo-1587474267370-4ce5026f1c19?w=500" },
  { name: "Chennai", img: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=500" },
  { name: "Kolkata", img: "https://images.unsplash.com/photo-1538334421857-687fd3ad1ebb?w=500" },
];

export default function Home() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 9999999]);
  const [searchText, setSearchText] = useState("");
  // const [allListings, setAllListings] = useState([]);

  // Load listings from localStorage and reverse to show newest first
  // useEffect(() => {
  //   try {
  //     const stored = JSON.parse(localStorage.getItem("sellFormDataList")) || [];
  //     setAllListings(Array.isArray(stored) ? stored.reverse() : [stored].reverse());
  //   } catch {
  //     setAllListings([]);
  //   }
  // }, []);

  function getBrandFromTitle(title) {
    for (const brand of brands.slice(1)) {
      if (title.toLowerCase().includes(brand.toLowerCase().replace(/ /g, ""))) {
        return brand;
      }
    }
    if (title.toLowerCase().includes("swift")) return "Maruti";
    if (title.toLowerCase().includes("i20")) return "Hyundai";
    if (title.toLowerCase().includes("note")) return "Redmi";
    return "";
  }

  const filteredAds = featuredAds.filter((ad) => {
    const catMatch = selectedCategory === "All" || ad.category === selectedCategory;
    const brandMatch = selectedBrand === "All" || getBrandFromTitle(ad.title) === selectedBrand;
    const adPrice = parseInt(ad.price.replace(/[^\d]/g, "").replace(/,/g, ""));
    const priceMatch = adPrice >= priceRange[0] && adPrice <= priceRange[1];
    const search =
      searchText === "" ||
      ad.title.toLowerCase().includes(searchText.toLowerCase()) ||
      ad.location.toLowerCase().includes(searchText.toLowerCase());
    return catMatch && brandMatch && priceMatch && search;
  });

  // const handleListingClick = (idx) => {
  //   router.push(`/ListingDetails/${idx}`); // Pass actual id, no shallow needed
  // };

  return (
    <main className="overflow-hidden bg-white text-gray-900 font-serif">
      {/* HERO */}
      <HeroSection
        tittle="Sell Anything, Anytime, Anywhere"
        bgImg="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
        text="Buy & Sell Cars, Bikes, Scooters — Fast, Safe, and Easy in Your City!"
      />

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-lg">
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md text-sm w-40"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="p-2 border rounded-md text-sm w-40"
            >
              {brands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Price Range:</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange[0]}
                min={0}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                placeholder="From"
                className="p-2 border rounded-md text-sm w-20"
              />
              <input
                type="number"
                value={priceRange[1]}
                min={0}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                placeholder="To"
                className="p-2 border rounded-md text-sm w-20"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="text-gray-700 mb-1">Search:</label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="By title or location..."
              className="p-2 border rounded-md text-sm w-full"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBrand("All");
                setPriceRange([0, 9999999]);
                setSearchText("");
              }}
              className="p-2 mt-5 bg-indigo-500 text-white rounded-full shadow transition hover:bg-indigo-600"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED ADS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-5xl mb-6 text-indigo-600 text-center">Latest Listings</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAds.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-20">
              No listings found.
            </div>
          ) : (
            filteredAds.map((ad) => (
              <motion.div
                key={ad.id}
                className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition group cursor-pointer flex flex-col"
                onClick={() => router.push(`/Homedetails/${ad.id}`, undefined, { shallow: true })}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={ad.img}
                  alt={ad.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg truncate">{ad.title}</h3>
                  <p className="text-indigo-600 font-bold mt-1">{ad.price}</p>
                  <p className="text-gray-500 text-sm">{ad.location}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* About Section */}

         <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center bg-indigo-50 rounded-3xl shadow-lg gap-8">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
            alt="About Nexsell"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">About Nexsell</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Nexsell helps you sell anything fast — with verified buyers, secure payments, and the best deals.
          </p>
        <button 
        onClick={()=>router.push("/About")}
        className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 p-2 rounded-xl text-white shadow transition">
          Explore Now
        </button>
        </div>
      </section>


      {/* MY LISTINGS */}
      {/* <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">My Listings</h1>
        {allListings.length === 0 ? (
          <p className="text-center text-gray-500">No listings found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allListings.map((item, idx) => (
              <motion.div
                key={idx}
                onClick={() => handleListingClick(idx)}  // use actual id here
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {item?.images?.length ? (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-52 w-full object-cover rounded-t-xl"
                  />
                ) : (
                  <div className="h-52 w-full bg-indigo-50 flex items-center justify-center text-indigo-300">
                    No Image
                  </div>
                )}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-black">{item.title}</h2>
                  <p className="text-indigo-600 font-semibold mt-2">₹{item.price}</p>
                  <p className="text-gray-700 text-md mt-1">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section> */}

      {/* WHY NEXSELL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12 text-indigo-700">Why Choose Nexsell?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Fast Selling</h3>
              <p>Post your ad & get buyers quickly.</p>
            </div>
            <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Verified Buyers</h3>
              <p>Connect with genuine people.</p>
            </div>
            <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl shadow-md hover:scale-105 transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Secure Platform</h3>
              <p>Safe & scam-free experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-indigo-600 mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 italic">"{t.feedback}"</p>
                <h4 className="mt-4 font-bold text-indigo-600">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-10 text-indigo-600">Popular Locations</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer"
              >
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl">{loc.name}</h3>
                  {/* <span className="px-4 py-1 bg-indigo-600 rounded-full text-sm">Explore →</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
