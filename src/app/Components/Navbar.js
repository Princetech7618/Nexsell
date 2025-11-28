"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/Cars" },
    { name: "Bikes", href: "/Bikes" },
    { name: "Mobiles", href: "/Mobile" },
    { name: "Electronics", href: "/Electronic" },
    { name: "My Listing", href: "/MyListing" },
  ];

  const updateSavedCount = () => {
    const listingSaved = JSON.parse(localStorage.getItem("likedListingAds")) || [];
    const trendingSaved = JSON.parse(localStorage.getItem("likedTrendingAds")) || [];
    const carsSaved = JSON.parse(localStorage.getItem("likedCars")) || [];
    const bikesSaved = JSON.parse(localStorage.getItem("likedBikes")) || [];
    const mobilesSaved = JSON.parse(localStorage.getItem("likedMobile")) || [];
    const electronicsSaved = JSON.parse(localStorage.getItem("likedElectronics")) || [];

    setSavedCount(
      listingSaved.length +
        trendingSaved.length +
        carsSaved.length +
        bikesSaved.length +
        mobilesSaved.length +
        electronicsSaved.length
    );
  };

  useEffect(() => {
    updateSavedCount();
    const handler = () => updateSavedCount();
    window.addEventListener("savedItemsUpdated", handler);
    return () => window.removeEventListener("savedItemsUpdated", handler);
  }, []);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.07 }}>
          <Link href="/">
            <img
              src="/img/logo.png"
              alt="NexSell Logo"
              className="h-12 w-auto object-contain rounded"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <motion.div key={i} className="relative cursor-pointer group">
              <Link
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-indigo-500/70 rounded-full transition-all duration-300"></span>
            </motion.div>
          ))}

          {/* Heart with Counter */}
          <Link href="/Saved" className="relative">
            <FaRegHeart className="text-black text-xl cursor-pointer" />
            {savedCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {savedCount}
              </span>
            )}
          </Link>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/Login"
              className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition-all"
            >
              Login
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/Sell"
              className="px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
            >
              + SELL
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="md:hidden bg-white shadow-lg p-6 flex flex-col gap-5"
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="relative cursor-pointer group"
              onClick={() => setOpen(false)}
            >
              <Link
                href={item.href}
                className="text-gray-800 text-lg font-semibold hover:text-indigo-600 transition"
              >
                {item.name}
              </Link>
              {/* Mobile underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-indigo-500/70 rounded-full transition-all duration-300"></span>
            </div>
          ))}

          {/* Heart Icon */}
          <Link href="/Saved" className="relative" onClick={() => setOpen(false)}>
            <FaRegHeart className="text-black text-xl cursor-pointer" />
            {savedCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {savedCount}
              </span>
            )}
          </Link>

          <Link
            href="/Login"
            className="px-4 py-2 text-center border border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            href="/Sell"
            className="px-6 py-3 bg-green-600 text-white rounded-full text-center hover:bg-green-700 transition"
            onClick={() => setOpen(false)}
          >
            + SELL
          </Link>
        </motion.div>
      )}
    </nav>
  );
}




// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { FaRegHeart } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [savedCount, setSavedCount] = useState(0);

//   const getSafeArray = (key) => {
//     try {
//       const data = JSON.parse(localStorage.getItem(key));
//       if (Array.isArray(data)) {
//         // Remove null, undefined, empty strings etc.
//         return data.filter((item) => item);
//       }
//       return [];
//     } catch {
//       return [];
//     }
//   };

//   const updateSavedCount = () => {
//     const listingSaved = getSafeArray("likedListingAds");
//     const trendingSaved = getSafeArray("likedTrendingAds");
//     const carsSaved = getSafeArray("likedCars");
//     const bikesSaved = getSafeArray("likedBikes");
//     const mobilesSaved = getSafeArray("likedMobile");
//     const electronicsSaved = getSafeArray("likedElectronics");

//     const total =
//       listingSaved.length +
//       trendingSaved.length +
//       carsSaved.length +
//       bikesSaved.length +
//       mobilesSaved.length +
//       electronicsSaved.length;

//     setSavedCount(total);
//   };

//   useEffect(() => {
//     updateSavedCount();

//     const handler = () => updateSavedCount();
//     window.addEventListener("savedItemsUpdated", handler);

//     return () => window.removeEventListener("savedItemsUpdated", handler);
//   }, []);

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "Cars", href: "/Cars" },
//     { name: "Bikes", href: "/Bikes" },
//     { name: "Mobiles", href: "/Mobile" },
//     { name: "Electronics", href: "/Electronic" },
//     { name: "My Listing", href: "/MyListing" },
//   ];

//   return (
//     <nav className="w-full shadow-md bg-white fixed top-0 z-50 font-serif">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* Logo */}
//         <motion.div whileHover={{ scale: 1.07 }}>
//           <Link href="/">
//             <img
//               src="/img/logo.png"
//               alt="NexSell Logo"
//               className="h-12 w-auto object-contain rounded"
//             />
//           </Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">
//           {menuItems.map((item, i) => (
//             <motion.div key={i} className="relative cursor-pointer group">
//               <Link
//                 href={item.href}
//                 className="text-gray-700 hover:text-indigo-600 font-medium transition"
//               >
//                 {item.name}
//               </Link>
//               <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-indigo-500/70 rounded-full transition-all duration-300"></span>
//             </motion.div>
//           ))}

//           {/* Heart Icon with Counter */}
//           <Link href="/Saved" className="relative">
//             <FaRegHeart className="text-black text-xl cursor-pointer" />

//             {savedCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {savedCount}
//               </span>
//             )}
//           </Link>

//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link
//               href="/Login"
//               className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition-all"
//             >
//               Login
//             </Link>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link
//               href="/Sell"
//               className="px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               + SELL
//             </Link>
//           </motion.div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           {open ? (
//             <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
//           ) : (
//             <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
//           )}
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {open && (
//         <motion.div
//           initial={{ x: -200 }}
//           animate={{ x: 0 }}
//           className="md:hidden bg-white shadow-lg p-6 flex flex-col gap-5"
//         >
//           {menuItems.map((item, i) => (
//             <div
//               key={i}
//               className="relative cursor-pointer group"
//               onClick={() => setOpen(false)}
//             >
//               <Link
//                 href={item.href}
//                 className="text-gray-800 text-lg font-semibold hover:text-indigo-600 transition"
//               >
//                 {item.name}
//               </Link>
//             </div>
//           ))}

//           {/* Heart */}
//           <Link href="/Saved" className="relative" onClick={() => setOpen(false)}>
//             <FaRegHeart className="text-black text-xl cursor-pointer" />
//             {savedCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {savedCount}
//               </span>
//             )}
//           </Link>

//           <Link
//             href="/Login"
//             className="px-4 py-2 text-center border border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition"
//             onClick={() => setOpen(false)}
//           >
//             Login
//           </Link>

//           <Link
//             href="/Sell"
//             className="px-6 py-3 bg-green-600 text-white rounded-full text-center hover:bg-green-700 transition"
//             onClick={() => setOpen(false)}
//           >
//             + SELL
//           </Link>
//         </motion.div>
//       )}
//     </nav>
//   );
// }
