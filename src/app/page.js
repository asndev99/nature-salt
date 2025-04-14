import FeaturedProduct from "@/components/custom/FeaturedProduct";
import HeroSection from "@/components/custom/HeroSection";
import ReviewSection from "@/components/custom/ReviewSection";
import WhyUs from "@/components/custom/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <FeaturedProduct />
      {/* <ReviewSection /> */}
    </>
  );
}
