import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import { PricingSection } from "../components/site-sections";
import { pricing } from "../lib/site-content";

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pricing"
        title="Simple plans that grow with your business"
        description="Choose the level of support that fits your current stage. Start small, then scale when you need more hands."
      />
      <PricingSection
        description="Clear, flexible plans based on your current stage."
        tiers={pricing}
      />
      <CtaBanner
        title="Not sure which plan to choose?"
        body="Book a free consultation and we will recommend the right setup for your goals."
        buttonLabel="Book a Free Consultation"
      />
    </SiteShell>
  );
}
