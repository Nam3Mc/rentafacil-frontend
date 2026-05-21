import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { OwnerCtaSection } from "@/components/sections/owner-cta-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { propertyMock } from "@/services/mocks/property.mock";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";

export default async function HomePage() {

  const properties =
    await propertyMock.getAll();

  const featuredProperty =
    properties[0];

  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <HowItWorksSection />
      <OwnerCtaSection />
      <SocialProofSection />
      <FinalCtaSection />
    </>
  );
}