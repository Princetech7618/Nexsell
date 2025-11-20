


"use client";

// components/LizardCard.js
import Image from 'next/image';

export default function Card() {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
      {/* Image Section */}
      <div className="w-full h-64 relative">
        <Image
          src="/lizard.jpg" // public folder mein lizard image save karein
          alt="Lizard"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      {/* Text Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Lizard</h2>
        <p className="text-gray-700">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </p>
      </div>
    </div>
  );
}
