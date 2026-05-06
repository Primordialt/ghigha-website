import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import { PricingSection } from "../components/site-sections";
import { pricing } from "../lib/site-content";

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pricing"
        title="Premium operational support, built to run your business smoothly"
        description="Choose the level of operational support you need today — from a dedicated assistant to a fully managed remote operations team."
      />
      <PricingSection
        description="High-value support focused on operational efficiency, systems, and reliable execution."
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
