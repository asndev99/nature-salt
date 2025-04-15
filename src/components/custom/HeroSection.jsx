import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/salt1.jpeg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Premium Himalayan Salt</h1>
        <p className="text-lg mt-2">Pure, Organic & Rich in Minerals</p>
        <button className="mt-4 bg-[#E63946] px-6 py-2 rounded-md">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
