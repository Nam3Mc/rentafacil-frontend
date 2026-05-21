import { HeroSection } from "@/components/sections/hero-section";

import { FeaturedPropertiesSection } from "@/components/sections/featured-properties-section";

import { RecommendedPropertiesSection } from "@/components/sections/recommended-properties-section";

import { propertyMock } from "@/services/mocks/property.mock";

export default async function HomePage() {

  const properties =
    await propertyMock.getAll();

  const featuredProperty =
    properties[0];

  return (
    <>

      <HeroSection />

      <FeaturedPropertiesSection />

      {featuredProperty && (
        <RecommendedPropertiesSection
          property={
            featuredProperty
          }
        />
      )}

    </>
  );
}