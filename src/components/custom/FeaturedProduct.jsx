import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Edible Salt",
    category: "testing",
    description:
      "Hand-mined Himalayan salt is the purest and unprocessed salt which contains 84 trace minerals.",
    image: "/salt1.jpeg",
  },
  {
    id: 2,
    name: "Bath Salt",
    category: "testing",

    description:
      "Himalayan bath salt has healing & therapeutic properties. It detoxifies the body while providing minerals.",
    image: "/salt1.jpeg",
  },
  {
    id: 3,
    name: "Lick Salt",
    category: "testing",

    description:
      "Himalayan salt licks contain 84 minerals and are very beneficial for the health & growth of all animals.",
    image: "/salt1.jpeg",
  },
  {
    id: 4,
    name: "Salt Lamps",
    category: "testing",

    description:
      "Crafted from Himalayan rock salt, these lamps purify the air and beautify the place with their warm glow.",
    image: "/salt1.jpeg",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-10"></div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              href={`/products/${product.category}/${product.id}`}
              key={product.id}
              className="text-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Product Image */}

              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className="mx-auto rounded-4xl"
              />

              {/* Product Name */}
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

              {/* Product Description */}
              <p className="text-sm text-gray-600 mt-2 px-4">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
