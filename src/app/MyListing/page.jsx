

// // "use client";

// // import React, { useEffect, useMemo, useState } from "react";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // const PAGE_SIZE = 6;
// // const MAX_PAGES = 20;

// // export default function MyListings() {
// //   const [allListings, setAllListings] = useState([]);
// //   const [query, setQuery] = useState("");
// //   const [filterCategory, setFilterCategory] = useState("");
// //   const [filterBrand, setFilterBrand] = useState("");
// //   const [filterLocation, setFilterLocation] = useState("");
// //   const [minPrice, setMinPrice] = useState("");
// //   const [maxPrice, setMaxPrice] = useState("");
// //   const [sortBy, setSortBy] = useState("newest");
// //   const [page, setPage] = useState(1);

// //   // Load from localStorage (ONLY ONCE)
// //   useEffect(() => {
// //     try {
// //       const stored = JSON.parse(localStorage.getItem("sellFormDataList")) || [];
// //       setAllListings(Array.isArray(stored) ? stored : [stored]);
// //     } catch (err) {
// //       console.error("Failed to parse listings:", err);
// //       setAllListings([]);
// //     }
// //   }, []);

// //   // ❌ REMOVE THIS (no saving back to localStorage)
// //   // useEffect(() => {
// //   //   localStorage.setItem("sellFormData", JSON.stringify(allListings));
// //   // }, [allListings]);

// //   // Derived filters
// //   const { categories, brands, locations } = useMemo(() => {
// //     const setC = new Set();
// //     const setB = new Set();
// //     const setL = new Set();
// //     allListings.forEach((l) => {
// //       if (l.category) setC.add(l.category);
// //       if (l.brand) setB.add(l.brand);
// //       if (l.location) setL.add(l.location);
// //     });
// //     return {
// //       categories: Array.from(setC).sort(),
// //       brands: Array.from(setB).sort(),
// //       locations: Array.from(setL).sort(),
// //     };
// //   }, [allListings]);

// //   // Filters + Sorting
// //   const filtered = useMemo(() => {
// //     let list = [...allListings];

// //     if (query.trim()) {
// //       const q = query.trim().toLowerCase();
// //       list = list.filter(
// //         (l) =>
// //           (l.title || "").toLowerCase().includes(q) ||
// //           (l.description || "").toLowerCase().includes(q)
// //       );
// //     }

// //     if (filterCategory) list = list.filter((l) => l.category === filterCategory);
// //     if (filterBrand) list = list.filter((l) => l.brand === filterBrand);
// //     if (filterLocation) list = list.filter((l) => l.location === filterLocation);

// //     const min = minPrice !== "" ? Number(minPrice) : null;
// //     const max = maxPrice !== "" ? Number(maxPrice) : null;
// //     if (min !== null) list = list.filter((l) => Number(l.price) >= min);
// //     if (max !== null) list = list.filter((l) => Number(l.price) <= max);

// //     if (sortBy === "price-asc") {
// //       list.sort((a, b) => Number(a.price) - Number(b.price));
// //     } else if (sortBy === "price-desc") {
// //       list.sort((a, b) => Number(b.price) - Number(a.price));
// //     } else if (sortBy === "title") {
// //       list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
// //     } else {
// //       list = list.slice().reverse();
// //     }

// //     return list;
// //   }, [
// //     allListings,
// //     query,
// //     filterCategory,
// //     filterBrand,
// //     filterLocation,
// //     minPrice,
// //     maxPrice,
// //     sortBy,
// //   ]);

// //   const rawPageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
// //   const pageCount = Math.min(rawPageCount, MAX_PAGES);

// //   useEffect(() => {
// //     if (page > pageCount) setPage(pageCount);
// //   }, [pageCount, page]);

// //   const paginated = useMemo(() => {
// //     const start = (page - 1) * PAGE_SIZE;
// //     return filtered.slice(start, start + PAGE_SIZE);
// //   }, [filtered, page]);

// //   const deleteListing = (indexInPage) => {
// //     const target = paginated[indexInPage];
// //     if (!target) return;

// //     const idxToRemove = allListings.findIndex((item) => {
// //       return (
// //         item.createdAt === target.createdAt &&
// //         item.title === target.title &&
// //         item.price === target.price
// //       );
// //     });

// //     if (idxToRemove !== -1) {
// //       setAllListings((prev) => prev.filter((_, i) => i !== idxToRemove));
// //     }
// //   };

// //   const clearFilters = () => {
// //     setQuery("");
// //     setFilterCategory("");
// //     setFilterBrand("");
// //     setFilterLocation("");
// //     setMinPrice("");
// //     setMaxPrice("");
// //     setSortBy("newest");
// //     setPage(1);
// //   };

// //   return (
// //     <main className="max-w-7xl mx-auto px-4 py-10">
// //       <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
// //         My Listings
// //       </h1>

// //       {/* Filters */}
// //       <section className="bg-white p-4 rounded-2xl shadow mb-8 overflow-x-auto">
// //         <div className="flex flex-wrap gap-2 items-center min-w-max">
// //           {/* Search */}
// //           <input
// //             value={query}
// //             onChange={(e) => {
// //               setQuery(e.target.value);
// //               setPage(1);
// //             }}
// //             placeholder="Search title or description..."
// //             className="p-3 border rounded-lg w-56"
// //           />

// //           {/* Category */}
// //           <select
// //             value={filterCategory}
// //             onChange={(e) => {
// //               setFilterCategory(e.target.value);
// //               setPage(1);
// //             }}
// //             className="p-3 border rounded-lg w-40"
// //           >
// //             <option value="">All Categories</option>
// //             {categories.map((c) => (
// //               <option key={c}>{c}</option>
// //             ))}
// //           </select>

// //           {/* Brand */}
// //           <select
// //             value={filterBrand}
// //             onChange={(e) => {
// //               setFilterBrand(e.target.value);
// //               setPage(1);
// //             }}
// //             className="p-3 border rounded-lg w-40"
// //           >
// //             <option value="">All Brands</option>
// //             {brands.map((b) => (
// //               <option key={b}>{b}</option>
// //             ))}
// //           </select>

// //           {/* Location */}
// //           <select
// //             value={filterLocation}
// //             onChange={(e) => {
// //               setFilterLocation(e.target.value);
// //               setPage(1);
// //             }}
// //             className="p-3 border rounded-lg w-40"
// //           >
// //             <option value="">All Locations</option>
// //             {locations.map((l) => (
// //               <option key={l}>{l}</option>
// //             ))}
// //           </select>

// //           {/* Price Range */}
// //           <div className="flex gap-2">
// //             <input
// //               type="number"
// //               placeholder="Min"
// //               value={minPrice}
// //               onChange={(e) => {
// //                 setMinPrice(e.target.value);
// //                 setPage(1);
// //               }}
// //               className="p-3 border rounded-lg w-24"
// //             />
// //             <input
// //               type="number"
// //               placeholder="Max"
// //               value={maxPrice}
// //               onChange={(e) => {
// //                 setMaxPrice(e.target.value);
// //                 setPage(1);
// //               }}
// //               className="p-3 border rounded-lg w-24"
// //             />
// //           </div>

// //           {/* Sort */}
// //           <select
// //             value={sortBy}
// //             onChange={(e) => {
// //               setSortBy(e.target.value);
// //               setPage(1);
// //             }}
// //             className="p-3 border rounded-lg w-40"
// //           >
// //             <option value="newest">Newest</option>
// //             <option value="price-asc">Price: Low → High</option>
// //             <option value="price-desc">Price: High → Low</option>
// //             <option value="title">Title A → Z</option>
// //           </select>

// //           {/* Clear */}
// //           <button
// //             onClick={clearFilters}
// //             className="p-3 bg-gray-100 rounded-lg"
// //             type="button"
// //           >
// //             Clear
// //           </button>
// //         </div>
// //       </section>

// //       {/* Listings */}
// //       {paginated.length === 0 ? (
// //         <p className="text-center text-gray-500">
// //           No listings match your filters.
// //         </p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {paginated.map((item, idx) => (
// //             <motion.article
// //               key={`${item.createdAt}-${idx}`}
// //               initial={{ opacity: 0, y: 8 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.25 }}
// //               className="bg-white rounded-3xl shadow-lg border overflow-hidden flex flex-col"
// //             >
// //               {item.images?.length ? (
// //                 <img
// //                   src={item.images[0]}
// //                   alt={item.title}
// //                   className="h-52 w-full object-cover"
// //                 />
// //               ) : (
// //                 <div className="h-52 w-full bg-indigo-50 flex items-center justify-center text-indigo-300">
// //                   No Image
// //                 </div>
// //               )}

// //               <div className="p-5 flex flex-col flex-grow">
// //                 <h2 className="text-lg font-bold text-indigo-700">{item.title}</h2>
// //                 <p className="text-indigo-600 font-semibold mt-2">
// //                   ₹{item.price}
// //                 </p>
// //                 <p className="text-gray-500 text-sm mt-1">{item.location}</p>

            

// //                 <div className="mt-4 flex gap-3">
// //                   <Link
// //                     href={`/Details/${allListings.indexOf(item)}`}
// //                     className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
// //                   >
// //                     View
// //                   </Link>

// //                   <Link
// //                     href={`/Edit/${allListings.indexOf(item)}`}
// //                     className="px-4 py-2 bg-green-600 text-white rounded-lg"
// //                   >
// //                     Edit
// //                   </Link>

// //                   <button
// //                     onClick={() => deleteListing(idx)}
// //                     className="px-4 py-2 bg-red-600 text-white rounded-lg"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.article>
// //           ))}
// //         </div>
// //       )}

// //       {/* Pagination */}
// //       <div className="mt-8 flex justify-center items-center gap-3">
// //         <button
// //           onClick={() => setPage((p) => Math.max(1, p - 1))}
// //           className="px-4 py-2 bg-white border rounded-lg"
// //           disabled={page <= 1}
// //         >
// //           Prev
// //         </button>

// //         <div className="px-4 py-2 bg-white border rounded-lg">
// //           Page {page} / {pageCount}
// //         </div>

// //         <button
// //           onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
// //           className="px-4 py-2 bg-white border rounded-lg"
// //           disabled={page >= pageCount}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </main>
// //   );
// // }






// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const PAGE_SIZE = 6;
// const MAX_PAGES = 20;

// export default function MyListings() {
//   const [allListings, setAllListings] = useState([]);
//   const [query, setQuery] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");
//   const [filterBrand, setFilterBrand] = useState("");
//   const [filterLocation, setFilterLocation] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [sortBy, setSortBy] = useState("newest");
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     try {
//       const stored = JSON.parse(localStorage.getItem("sellFormDataList")) || [];
//       setAllListings(Array.isArray(stored) ? stored : [stored]);
//     } catch (err) {
//       console.error("Failed to parse listings:", err);
//       setAllListings([]);
//     }
//   }, []);

//   const { categories, brands, locations } = useMemo(() => {
//     const setC = new Set();
//     const setB = new Set();
//     const setL = new Set();
//     allListings.forEach((l) => {
//       if (l.category) setC.add(l.category);
//       if (l.brand) setB.add(l.brand);
//       if (l.location) setL.add(l.location);
//     });
//     return {
//       categories: Array.from(setC).sort(),
//       brands: Array.from(setB).sort(),
//       locations: Array.from(setL).sort(),
//     };
//   }, [allListings]);

//   const filtered = useMemo(() => {
//     let list = [...allListings];
//     if (query.trim()) {
//       const q = query.trim().toLowerCase();
//       list = list.filter(
//         (l) =>
//           (l.title || "").toLowerCase().includes(q) ||
//           (l.description || "").toLowerCase().includes(q)
//       );
//     }
//     if (filterCategory) list = list.filter((l) => l.category === filterCategory);
//     if (filterBrand) list = list.filter((l) => l.brand === filterBrand);
//     if (filterLocation) list = list.filter((l) => l.location === filterLocation);

//     const min = minPrice !== "" ? Number(minPrice) : null;
//     const max = maxPrice !== "" ? Number(maxPrice) : null;
//     if (min !== null) list = list.filter((l) => Number(l.price) >= min);
//     if (max !== null) list = list.filter((l) => Number(l.price) <= max);

//     if (sortBy === "price-asc") {
//       list.sort((a, b) => Number(a.price) - Number(b.price));
//     } else if (sortBy === "price-desc") {
//       list.sort((a, b) => Number(b.price) - Number(a.price));
//     } else if (sortBy === "title") {
//       list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
//     } else {
//       list = list.slice().reverse();
//     }
//     return list;
//   }, [
//     allListings,
//     query,
//     filterCategory,
//     filterBrand,
//     filterLocation,
//     minPrice,
//     maxPrice,
//     sortBy,
//   ]);

//   const rawPageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   const pageCount = Math.min(rawPageCount, MAX_PAGES);

//   useEffect(() => {
//     if (page > pageCount) setPage(pageCount);
//   }, [pageCount, page]);

//   const paginated = useMemo(() => {
//     const start = (page - 1) * PAGE_SIZE;
//     return filtered.slice(start, start + PAGE_SIZE);
//   }, [filtered, page]);

//   const deleteListing = (indexInPage) => {
//     const target = paginated[indexInPage];
//     if (!target) return;

//     const idxToRemove = allListings.findIndex((item) => {
//       return (
//         item.createdAt === target.createdAt &&
//         item.title === target.title &&
//         item.price === target.price
//       );
//     });

//     if (idxToRemove !== -1) {
//       const updated = allListings.filter((_, i) => i !== idxToRemove);
//       setAllListings(updated);
//       localStorage.setItem("sellFormDataList", JSON.stringify(updated));
//     }
//   };

//   const clearFilters = () => {
//     setQuery("");
//     setFilterCategory("");
//     setFilterBrand("");
//     setFilterLocation("");
//     setMinPrice("");
//     setMaxPrice("");
//     setSortBy("newest");
//     setPage(1);
//   };

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
//         My Listings
//       </h1>

//       {/* Filters */}
//       <section className="bg-white p-4 rounded-2xl shadow mb-8 overflow-x-auto">
//         <div className="flex flex-wrap gap-2 items-center min-w-max">
//           {/* Search */}
//           <input
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               setPage(1);
//             }}
//             placeholder="Search title or description..."
//             className="p-3 border rounded-lg w-56"
//           />

//           {/* Category */}
//           <select
//             value={filterCategory}
//             onChange={(e) => {
//               setFilterCategory(e.target.value);
//               setPage(1);
//             }}
//             className="p-3 border rounded-lg w-40"
//           >
//             <option value="">All Categories</option>
//             {categories.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>

//           {/* Brand */}
//           <select
//             value={filterBrand}
//             onChange={(e) => {
//               setFilterBrand(e.target.value);
//               setPage(1);
//             }}
//             className="p-3 border rounded-lg w-40"
//           >
//             <option value="">All Brands</option>
//             {brands.map((b) => (
//               <option key={b}>{b}</option>
//             ))}
//           </select>

//           {/* Location */}
//           <select
//             value={filterLocation}
//             onChange={(e) => {
//               setFilterLocation(e.target.value);
//               setPage(1);
//             }}
//             className="p-3 border rounded-lg w-40"
//           >
//             <option value="">All Locations</option>
//             {locations.map((l) => (
//               <option key={l}>{l}</option>
//             ))}
//           </select>

//           {/* Price Range */}
//           <div className="flex gap-2">
//             <input
//               type="number"
//               placeholder="Min"
//               value={minPrice}
//               onChange={(e) => {
//                 setMinPrice(e.target.value);
//                 setPage(1);
//               }}
//               className="p-3 border rounded-lg w-24"
//             />
//             <input
//               type="number"
//               placeholder="Max"
//               value={maxPrice}
//               onChange={(e) => {
//                 setMaxPrice(e.target.value);
//                 setPage(1);
//               }}
//               className="p-3 border rounded-lg w-24"
//             />
//           </div>

//           {/* Sort */}
//           <select
//             value={sortBy}
//             onChange={(e) => {
//               setSortBy(e.target.value);
//               setPage(1);
//             }}
//             className="p-3 border rounded-lg w-40"
//           >
//             <option value="newest">Newest</option>
//             <option value="price-asc">Price: Low → High</option>
//             <option value="price-desc">Price: High → Low</option>
//             <option value="title">Title A → Z</option>
//           </select>

//           {/* Clear */}
//           <button
//             onClick={clearFilters}
//             className="p-3 bg-gray-100 rounded-lg"
//             type="button"
//           >
//             Clear
//           </button>
//         </div>
//       </section>

//       {/* Listings */}
//       {paginated.length === 0 ? (
//         <p className="text-center text-gray-500">No listings match your filters.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {paginated.map((item, idx) => (
//             <motion.article
//               key={`${item.createdAt}-${idx}`}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
//             >
//               {item.images?.length ? (
//                 <img
//                   src={item.images[0]}
//                   alt={item.title}
//                   className="h-52 w-full object-cover rounded-t-3xl"
//                 />
//               ) : (
//                 <div className="h-52 w-full bg-indigo-50 flex items-center justify-center text-indigo-300 rounded-t-3xl">
//                   No Image
//                 </div>
//               )}

//               <div className="p-5 flex flex-col flex-grow">
//                 <h2 className="text-lg font-bold text-black">{item.title}</h2>
//                 <p className="text-indigo-600 font-semibold mt-2">₹{item.price}</p>
//                 <p className="text-gray-700 text-sm mt-1">{item.location}</p>

//                 <div className="mt-4 flex gap-3">
//                <Link
// href={`/ListingsDetails/${idx}`} 
//   className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-colors duration-300 hover:from-purple-600 hover:to-indigo-600"
// >
//   View
// </Link>

// <Link
//   href={`/Edit/${idx}`}
//   className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-colors duration-300 hover:from-emerald-600 hover:to-green-600"
// >
//   Edit
// </Link>

//                   <button
//                     onClick={() => deleteListing(idx)}
//                     className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg transition-colors duration-300 hover:from-rose-600 hover:to-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center items-center gap-3">
//         <button
//           onClick={() => setPage((p) => Math.max(1, p - 1))}
//           className="px-4 py-2 bg-white border rounded-lg"
//           disabled={page <= 1}
//         >
//           Prev
//         </button>

//         <div className="px-4 py-2 bg-white border rounded-lg">
//           Page {page} / {pageCount}
//         </div>

//         <button
//           onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
//           className="px-4 py-2 bg-white border rounded-lg"
//           disabled={page >= pageCount}
//         >
//           Next
//         </button>
//       </div>
//     </main>
//   );
// }


"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const PAGE_SIZE = 6;
const MAX_PAGES = 20;

export default function MyListings() {
  const [allListings, setAllListings] = useState([]);
  const [query, setQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);

  // Load and ensure each listing has a unique ID
  useEffect(() => {
    try {
      let stored = JSON.parse(localStorage.getItem("sellFormDataList") || "[]");
      stored = Array.isArray(stored) ? stored : [stored];

      stored = stored.map(item => ({
        ...item,
        id: item.id || Date.now().toString() + Math.random().toString(36).substr(2, 9),
      }));

      setAllListings(stored);
      localStorage.setItem("sellFormDataList", JSON.stringify(stored));
    } catch (err) {
      console.error("Failed to parse listings:", err);
      setAllListings([]);
    }
  }, []);

  const { categories, brands, locations } = useMemo(() => {
    const setC = new Set();
    const setB = new Set();
    const setL = new Set();
    allListings.forEach(l => {
      if (l.category) setC.add(l.category);
      if (l.brand) setB.add(l.brand);
      if (l.location) setL.add(l.location);
    });
    return {
      categories: Array.from(setC).sort(),
      brands: Array.from(setB).sort(),
      locations: Array.from(setL).sort(),
    };
  }, [allListings]);

  const filtered = useMemo(() => {
    let list = [...allListings];
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        l =>
          (l.title || "").toLowerCase().includes(q) ||
          (l.description || "").toLowerCase().includes(q)
      );
    }
    if (filterCategory) list = list.filter(l => l.category === filterCategory);
    if (filterBrand) list = list.filter(l => l.brand === filterBrand);
    if (filterLocation) list = list.filter(l => l.location === filterLocation);

    const min = minPrice !== "" ? Number(minPrice) : null;
    const max = maxPrice !== "" ? Number(maxPrice) : null;
    if (min !== null) list = list.filter(l => Number(l.price) >= min);
    if (max !== null) list = list.filter(l => Number(l.price) <= max);

    if (sortBy === "price-asc") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === "title") {
      list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else {
      list = list.slice().reverse();
    }
    return list;
  }, [
    allListings,
    query,
    filterCategory,
    filterBrand,
    filterLocation,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const rawPageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageCount = Math.min(rawPageCount, MAX_PAGES);

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount, page]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const deleteListing = id => {
    const updated = allListings.filter(item => item.id !== id);
    setAllListings(updated);
    localStorage.setItem("sellFormDataList", JSON.stringify(updated));
  };

  const clearFilters = () => {
    setQuery("");
    setFilterCategory("");
    setFilterBrand("");
    setFilterLocation("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("newest");
    setPage(1);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">My Listings</h1>

      {/* Filters */}
      <section className="bg-white p-4 rounded-2xl shadow mb-8 overflow-x-auto">
        <div className="flex flex-wrap gap-2 items-center min-w-max">
          {/* Search */}
          <input
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search title or description..."
            className="p-3 border rounded-lg w-56"
          />

          {/* Category */}
          <select
            value={filterCategory}
            onChange={e => {
              setFilterCategory(e.target.value);
              setPage(1);
            }}
            className="p-3 border rounded-lg w-40"
          >
            <option value="">All Categories</option>
            {categories.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {/* Brand */}
          <select
            value={filterBrand}
            onChange={e => {
              setFilterBrand(e.target.value);
              setPage(1);
            }}
            className="p-3 border rounded-lg w-40"
          >
            <option value="">All Brands</option>
            {brands.map(b => (
              <option key={b}>{b}</option>
            ))}
          </select>

          {/* Location */}
          <select
            value={filterLocation}
            onChange={e => {
              setFilterLocation(e.target.value);
              setPage(1);
            }}
            className="p-3 border rounded-lg w-40"
          >
            <option value="">All Locations</option>
            {locations.map(l => (
              <option key={l}>{l}</option>
            ))}
          </select>

          {/* Price Range */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={e => {
                setMinPrice(e.target.value);
                setPage(1);
              }}
              className="p-3 border rounded-lg w-24"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={e => {
                setMaxPrice(e.target.value);
                setPage(1);
              }}
              className="p-3 border rounded-lg w-24"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => {
              setSortBy(e.target.value);
              setPage(1);
            }}
            className="p-3 border rounded-lg w-40"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="title">Title A → Z</option>
          </select>

          {/* Clear */}
          <button onClick={clearFilters} className="p-3 bg-gray-100 rounded-lg" type="button">
            Clear
          </button>
        </div>
      </section>

      {/* Listings */}
      {paginated.length === 0 ? (
        <p className="text-center text-gray-500">No listings match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map(item => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
            >
              {item.images?.length ? (
                <img src={item.images[0]} alt={item.title} className="h-52 w-full object-cover rounded-t-3xl" />
              ) : (
                <div className="h-52 w-full bg-indigo-50 flex items-center justify-center text-indigo-300 rounded-t-3xl">
                  No Image
                </div>
              )}

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-black">{item.title}</h2>
                <p className="text-indigo-600 font-semibold mt-2">₹{item.price}</p>
                <p className="text-gray-700 text-sm mt-1">{item.location}</p>

                <div className="mt-4 flex gap-3">
                  <Link
                    href={`/ListingsDetails/${item.id}`}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors duration-300 hover:from-purple-600 hover:to-indigo-600"
                  >
                    View
                  </Link>

                  <Link
                    href={`/Edit/${item.id}`}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors duration-300 hover:from-emerald-600 hover:to-green-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteListing(item.id)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors duration-300 hover:from-rose-600 hover:to-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-3">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} className="px-4 py-2 bg-white border rounded-lg" disabled={page <= 1}>
          Prev
        </button>

        <div className="px-4 py-2 bg-white border rounded-lg">
          Page {page} / {pageCount}
        </div>

        <button onClick={() => setPage(p => Math.min(pageCount, p + 1))} className="px-4 py-2 bg-white border rounded-lg" disabled={page >= pageCount}>
          Next
        </button>
      </div>
    </main>
  );
}
