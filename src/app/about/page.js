import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1D3C6A] to-[#13335A] text-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6 bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/20">
        <h1 className="text-4xl font-bold tracking-wide">About Us</h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          We are dedicated to providing high-quality products and exceptional
          service to our customers. Our team works with passion and precision to
          ensure your experience is nothing short of excellent.
        </p>
        <p className="text-base text-gray-300">
          From idea to delivery, we focus on innovation, integrity, and
          impactful solutions. Join us on our journey to make a difference.
        </p>
      </div>
    </div>
  );
};

export default page;
