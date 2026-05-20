import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { PricingSection } from "@/components/sections/pricing-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <PricingSection />
    </>
  );
}