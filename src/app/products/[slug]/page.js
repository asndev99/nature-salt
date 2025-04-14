import React, { Suspense } from "react";
import ProductCard from "@/components/custom/ProductCard";

const Page = async ({ params }) => {
  const { slug } = await params;

  return (
    <Suspense>
      <ProductCard slug={slug} />
    </Suspense>
  );
};

export default Page;
