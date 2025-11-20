"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditListing() {
  const router = useRouter();
  const { id } = useParams();

  const itemTypes = ["Car", "Bike", "Mobile", "Electronics"];

  const categoriesByItem = {
    Car: ["SUV", "Sedan", "Hatchback", "Commercial"],
    Bike: ["Sports", "Classic", "Scooter", "Commuter"],
    Mobile: ["Flagship", "Mid-range", "Budget"],
    Electronics: [
      "Laptop",
      "Smart Home",
      "Camera",
      "Wearable",
      "Gaming Console",
      "Speaker",
      "Accessories",
      "Headphones",
      "Tablet",
    ],
  };

  const brandsByItem = {
    Car: ["Hyundai", "Maruti", "Honda", "Toyota", "Ford", "Tata"],
    Bike: ["Royal Enfield", "Honda", "Bajaj", "TVS", "KTM"],
    Mobile: ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme"],
    Electronics: [
      "Sony",
      "Apple",
      "Samsung",
      "Dell",
      "HP",
      "Microsoft",
      "Canon",
      "JBL",
      "Logitech",
      "Nintendo",
      "Fitbit",
    ],
  };

  const [formData, setFormData] = useState({
    itemType: "",
    category: "",
    brand: "",
    title: "",
    price: "",
    location: "",
    description: "",
    contact: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sellFormDataList") || "[]");
    if (stored[id]) {
      setFormData(stored[id]);
    }
  
  }, [id, router]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setFormData({ ...formData, images: files });
      return;
    }

    if (name === "itemType") {
      setFormData((prev) => ({
        ...prev,
        itemType: value,
        category: "",
        brand: "",
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const removeImage = (index) => {
    const updatedImages = Array.from(formData.images);
    updatedImages.splice(index, 1);
    setFormData({ ...formData, images: updatedImages });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.itemType) newErrors.itemType = "Select item type.";
    if (!formData.category) newErrors.category = "Select category.";
    if (!formData.brand) newErrors.brand = "Select brand.";
    if (!formData.title.trim()) newErrors.title = "Title required.";
    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Enter valid price.";
    if (!formData.location.trim()) newErrors.location = "Enter location.";
    if (!formData.contact.trim()) newErrors.contact = "Enter contact number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const convertImagesToBase64 = async (files) => {
    const promises = Array.from(files).map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
    );
    return Promise.all(promises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const imgBase64 =
      formData.images.length > 0
        ? await convertImagesToBase64(formData.images)
        : [];

    const updatedItem = {
      ...formData,
      images: imgBase64,
      // preserve createdAt if existing
      createdAt: formData.createdAt || new Date().toISOString(),
    };

    const stored = JSON.parse(localStorage.getItem("sellFormDataList") || "[]");
    stored[id] = updatedItem;
    localStorage.setItem("sellFormDataList", JSON.stringify(stored));

    alert("Listing updated!");
    router.push("/MyListings");
  };

  return (
    
    <div className="max-w-3xl mt-25 mb-10 mx-auto p-6 bg-white rounded-xl shadow-lg border ">
            <button
      onClick={() => router.back()}
      className="px-4 py-2  text-indigo-600 rounded-full cursor-pointer transition mb-5"
    >
      ← Back
    </button>
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
        Edit Your Listing
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Item Type */}
        <div>
          <label className="font-semibold">Item Type *</label>
          <select
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              errors.itemType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Item Type</option>
            {itemTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errors.itemType && (
            <p className="text-red-500">{errors.itemType}</p>
          )}
        </div>

        {/* Category */}
        {formData.itemType && (
          <div>
            <label className="font-semibold">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Category</option>
              {categoriesByItem[formData.itemType]?.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
          </div>
        )}

        {/* Brand */}
        {formData.itemType && (
          <div>
            <label className="font-semibold">Brand *</label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg ${
                errors.brand ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Brand</option>
              {brandsByItem[formData.itemType]?.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            {errors.brand && <p className="text-red-500">{errors.brand}</p>}
          </div>
        )}

        {/* Title */}
        <div>
          <label className="font-semibold">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter title"
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price (₹) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter price"
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="font-semibold">Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              errors.location ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter location"
          />
          {errors.location && <p className="text-red-500">{errors.location}</p>}
        </div>

        {/* Contact */}
        <div>
          <label className="font-semibold">Contact Number *</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              errors.contact ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter phone number"
          />
          {errors.contact && <p className="text-red-500">{errors.contact}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="More details..."
          ></textarea>
        </div>

        {/* Images */}
        <div>
          <label className="font-semibold mb-2 block">Upload Images</label>
          <label
            htmlFor="images-upload"
            className="inline-block cursor-pointer rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Choose Photos
          </label>
          <input
            id="images-upload"
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />

          <div className="flex flex-wrap gap-3 mt-3">
            {Array.from(formData.images).map((file, idx) => {
              const url = typeof file === "string" ? file : URL.createObjectURL(file);
              return (
                <div key={idx} className="relative group">
                  <img
                    src={url}
                    alt={`Preview ${idx + 1}`}
                    className="h-20 w-20 object-cover rounded-lg border"
                    onLoad={() => typeof file !== "string" && URL.revokeObjectURL(url)}
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove image"
                  >
                    &#10005;
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
