"use client";
import React from "react";
import { PackageSearch } from "lucide-react";
import { productCategories } from "@/data";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Explore Our Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {productCategories.map((category) => (
          <Link
            href={`/products/${category.slugs}`}
            key={category.slugs}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex items-center gap-4 cursor-pointer hover:scale-[1.02] transform"
          >
            <div className="p-4 bg-pink-100 text-pink-600 rounded-full">
              <PackageSearch className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
