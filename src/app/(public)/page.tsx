import { HeroSection } from "@/components/sections/hero-section";
import { UsersPreview } from "@/components/sections/users-preview";
import { FeaturedProperties } from "@/components/sections/featured-properties";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <UsersPreview />
      <FeaturedProperties />

    </>
  );
}