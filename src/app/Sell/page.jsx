"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
export default function SellForm() {
  const itemTypes = ["Car", "Bike", "Mobile", "Electronics"];
  const router = useRouter();
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

  // Convert images → Base64
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Convert images → Base64
    const imgBase64 = formData.images.length
      ? await convertImagesToBase64(formData.images)
      : [];

    const newItem = {
      ...formData,
      images: imgBase64,
      createdAt: new Date().toISOString(),
    };

    // Save the ad to local storage list (for multiple ads)
    const existing = JSON.parse(localStorage.getItem("sellFormDataList") || "[]");
    existing.push(newItem);
    localStorage.setItem("sellFormDataList", JSON.stringify(existing));

    console.log("Form Submitted:", newItem);
    alert("Your ad has been posted!");

    // Reset form
    setFormData({
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

    setErrors({});
    e.target.reset();
  };

  // Image Preview
  const removeImage = (index) => {
  const updatedImages = Array.from(formData.images);
  updatedImages.splice(index, 1);
  setFormData({ ...formData, images: updatedImages });
};


  const renderImagePreviews = () => {
    if (!formData.images || formData.images.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-3 mt-3">
        {Array.from(formData.images).map((file, idx) => {
          const url = URL.createObjectURL(file);
          return (
            <img
              key={idx}
              src={url}
              alt="Preview"
              className="h-20 w-20 object-cover rounded-lg border"
              onLoad={() => URL.revokeObjectURL(url)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl mt-25 mb-10 shadow-lg border">
            <button
      onClick={() => router.back()}
      className="px-4 py-2  text-indigo-600 rounded-full cursor-pointer transition mb-5"
    >
      ← Back
    </button>
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
        Sell Your Item
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
  {/* Image previews */}
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
          {/* Remove icon/button */}
          <button
            type="button"
            onClick={() => removeImage(idx)}
            className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Remove image"
          >
            &#10005; {/* X mark */}
          </button>
        </div>
      );
    })}
  </div>
</div>



        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
        >
          Post Your Ad
        </button>
      </form>
    </div>
  );
}
