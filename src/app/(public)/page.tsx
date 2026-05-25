import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { OwnerCtaSection } from "@/components/sections/owner-cta-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";

export default async function HomePage() {

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