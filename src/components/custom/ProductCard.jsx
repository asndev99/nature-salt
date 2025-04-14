"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { saltCatalog } from "@/mockData";

const ProductCard = ({ slug }) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const data = saltCatalog.find((item) => item.category === slug);

    if (data) {
      setProductData(data.products);
    }
  }, [slug]);

  return (
    <div className="p-4 w-full mx-auto">
      <h1 className="text-4xl font-bold capitalize text-center mb-10">
        {slug.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 mb-10">
        {productData?.map((product) => (
          <div className="flex items-center flex-col gap-2">
            <Image
              src={product.images[0]}
              alt={product.name}
              height={160}
              width={120}
              className="mx-auto w-fit bg-red-700 rounded-[20px] h-36 object-contain"
            />
            <div
              key={product.code}
              className="bg-white border rounded-2xl p-4 shadow-md hover:shadow-lg transition mx-auto w-[260px] text-center"
            >
              <h2 className="text-base font-semibold leading-snug">
                {product.name}
              </h2>
              <p className="text-sm text-gray-700 mt-1">{product.size}</p>
              <p className="text-sm text-gray-600 mt-1">Code: {product.code}</p>
              <p className="text-sm font-semibold text-green-600 mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
