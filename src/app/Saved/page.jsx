"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../Card/pages";

export default function SavedPage() {
  const router = useRouter();
  const [saved, setSaved] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  // ⭐ Load all saved items from localStorage (FIXED KEYS)
  const loadSaved = () => {
    const listing = JSON.parse(localStorage.getItem("likedListingAds")) || [];
    const trending = JSON.parse(localStorage.getItem("likedTrendingAds")) || [];
    const cars = JSON.parse(localStorage.getItem("likedCars")) || [];
    const bikes = JSON.parse(localStorage.getItem("likedBikes")) || [];
    const mobiles = JSON.parse(localStorage.getItem("likedMobile")) || [];
    const electronics = JSON.parse(localStorage.getItem("likedElectronics")) || [];

    const merged = [
      ...listing.map((i) => ({ ...i, type: "listing" })),
      ...trending.map((i) => ({ ...i, type: "trending" })),
      ...cars.map((i) => ({ ...i, type: "car" })),
      ...bikes.map((i) => ({ ...i, type: "bike" })),
      ...mobiles.map((i) => ({ ...i, type: "mobile" })),
      ...electronics.map((i) => ({ ...i, type: "electronic" })),
    ];

    setSaved(merged);
  };

  useEffect(() => {
    loadSaved();
    const handler = () => loadSaved();
    window.addEventListener("savedItemsUpdated", handler);
    window.addEventListener("storageUpdated", handler);
    return () => {
      window.removeEventListener("savedItemsUpdated", handler);
      window.removeEventListener("storageUpdated", handler);
    };
  }, []);

  // 🔥 SORTING system
  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "priceHigh")
        return Number(b.price.replace(/\D/g, "")) - Number(a.price.replace(/\D/g, ""));
      if (sortBy === "priceLow")
        return Number(a.price.replace(/\D/g, "")) - Number(b.price.replace(/\D/g, ""));
      return 0;
    });
  };

  // 🔥 REMOVE (UNLIKE) SYSTEM (FIXED KEYS)
  const removeItem = (id, type) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);

    const updateStore = (key) =>
      localStorage.setItem(
        key,
        JSON.stringify(updated.filter((i) => i.type === type))
      );

    if (type === "listing") updateStore("likedListingAds");
    if (type === "trending") updateStore("likedTrendingAds");
    if (type === "car") updateStore("likedCars");
    if (type === "bike") updateStore("likedBikes");
    if (type === "mobile") updateStore("likedMobile");
    if (type === "electronic") updateStore("likedElectronics");

    window.dispatchEvent(new Event("savedItemsUpdated"));
  };

  // 🔥 Navigate to correct details page
  const goToDetails = (item) => {
    const routeMap = {
      listing: `/Homedetails/${item.id}`,
      trending: `/TreandingDetails/${item.id}`,
      car: `/CarsDetails/${item.id}`,
      bike: `/BikesDetails/${item.id}`,
      mobile: `/MobileDetails/${item.id}`,
      electronic: `/ElectronicsDetails/${item.id}`,
    };
    router.push(routeMap[item.type]);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">
        Saved Items ❤️
      </h2>

      <div className="flex justify-between items-center mb-8">
        <button
          className="shadow p-2 rounded text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
          onClick={() => router.back()}
        >
          {"<"} Back
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-indigo-500 text-indigo-700 font-semibold px-4 py-2 rounded-lg"
        >
          <option value="newest">Newest First</option>
          <option value="priceHigh">Price — High to Low</option>
          <option value="priceLow">Price — Low to High</option>
        </select>
      </div>

      {saved.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-20">
          No saved items yet — go like your favourites!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortItems(saved).map((item) => (
            <Card
              key={item.id}
              ad={item}
              liked={true}
              img={item.img || item.images?.[0]}
              title={item.title}
              price={item.price}
              location={item.location}
              onLike={() => removeItem(item.id, item.type)}
              onClick={() => goToDetails(item)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
