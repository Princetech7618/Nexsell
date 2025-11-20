



// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";

// export default function ViewDetails() {
//   const router = useRouter();
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("sellFormDataList") || "[]");

//     const foundItem = stored.find(i => i.id === id); // match by unique id
//     if (foundItem) {
//       setItem(foundItem);
//     } else {
//       router.push("/MyListings");
//     }
//   }, [id, router]);

//   if (!item) return <p className="text-center p-10">Loading...</p>;

//   return (
//     <main className="max-w-4xl mx-auto p-6 mt-25 mb-6 bg-white rounded-3xl shadow-lg border border-gray-200 ">
//       <button onClick={() => router.back()} className="px-4 py-2 text-indigo-600 rounded-full cursor-pointer transition mb-5">
//         ← Back
//       </button>

//       {item.images?.length ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg overflow-hidden">
//           {item.images.map((img, idx) => (
//             <img key={idx} src={img} alt={`${item.title} image ${idx + 1}`} className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105" />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center py-8 text-gray-500 italic">No images available.</p>
//       )}

//       <div className="mt-8 px-2 sm:px-0">
//         <h1 className="text-4xl font-extrabold text-black mb-2">{item.title}</h1>
//         <p className="text-3xl font-bold text-indigo-600 mb-4">₹{item.price}</p>
//         <p className="text-gray-700 text-2xl mb-6 whitespace-pre-line">{item.description || "No description available."}</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-gray-600">
//           <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition cursor-default">
//             <h3 className="font-semibold text-indigo-600">Category</h3>
//             <p>{item.category || "-"}</p>
//           </div>
//           <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition cursor-default">
//             <h3 className="font-semibold text-indigo-600">Brand</h3>
//             <p>{item.brand || "-"}</p>
//           </div>
//           <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition cursor-default">
//             <h3 className="font-semibold text-indigo-600">Location</h3>
//             <p>{item.location || "-"}</p>
//           </div>
//           <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition cursor-default">
//             <h3 className="font-semibold text-indigo-600">Contact</h3>
//             <p>{item.contact || "-"}</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sellFormDataList") || "[]");
    const found = stored.find((i) => String(i.id) === String(id));

    if (found) {
      setItem(found);
    } else {
      router.push("/MyListings");
    }
  }, [id, router]);

  // Auto slider
  useEffect(() => {
    if (!item?.images?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [item]);

  if (!item) return <p className="text-center p-10">Loading...</p>;

  return (
    <main className="max-w-4xl mx-auto p-6 mt-25 mb-6 bg-white rounded-3xl shadow-lg border border-gray-200">
      <button
        onClick={() => router.back()}
        className="px-4 py-2 text-indigo-600 rounded-full cursor-pointer transition mb-5"
      >
        ← Back
      </button>

      {/* AUTO SLIDER */}
      <div className="w-full h-80 relative overflow-hidden rounded-2xl shadow-xl">
        {item.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="img"
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-700
              ${index === current ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
            `}
          />
        ))}
      </div>

      <div className="mt-8 px-2 sm:px-0">
        <h1 className="text-4xl font-extrabold text-black mb-2">{item.title}</h1>
        <p className="text-3xl font-bold text-indigo-600 mb-4">₹{item.price}</p>
        <p className="text-gray-700 text-xl mb-6 whitespace-pre-line">
          {item.description || "No description available."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-gray-600">
          <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-indigo-600">Category</h3>
            <p>{item.category || "-"}</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-indigo-600">Brand</h3>
            <p>{item.brand || "-"}</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-indigo-600">Location</h3>
            <p>{item.location || "-"}</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-indigo-600">Contact</h3>
            <p>{item.contact || "-"}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
