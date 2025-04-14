import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section className="py-12 bg-white text-center mt-10">
      <h1 className="text-4xl font-bold">Why Choose Our Salt?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
        <div className="">
          <Image
            src="/salt2.jpeg"
            alt="Natural"
            className="mx-auto overflow-hidden rounded-4xl"
            width={150}
            height={150}
          />
          <h3 className="text-lg font-semibold mt-2">100% Natural</h3>
          <p className="text-sm text-gray-600">No chemicals, no additives.</p>
        </div>

        <div>
          <Image
            src="/salt2.jpeg"
            alt="Natural"
            className="mx-auto overflow-hidden rounded-4xl"
            width={150}
            height={150}
          />
          <h3 className="text-lg font-semibold mt-2">Mineral-Rich</h3>
          <p className="text-sm text-gray-600">
            Contains 84+ essential minerals.
          </p>
        </div>

        <div>
          <Image
            src="/salt2.jpeg"
            alt="Natural"
            className="mx-auto overflow-hidden rounded-4xl"
            width={150}
            height={150}
          />
          <h3 className="text-lg font-semibold mt-2">Lab Tested</h3>
          <p className="text-sm text-gray-600">Certified quality assurance.</p>
        </div>

        <div>
          <Image
            src="/salt2.jpeg"
            alt="Natural"
            className="mx-auto overflow-hidden rounded-4xl"
            width={150}
            height={150}
          />
          <h3 className="text-lg font-semibold mt-2">Direct from Mines</h3>
          <p className="text-sm text-gray-600">No middleman, fresh products.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
