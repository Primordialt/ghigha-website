import { JsonLd } from "../components/json-ld";
import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import { PricingSection } from "../components/site-sections";
import { getBreadcrumbSchema, getPrimaryServiceSchema, getWebPageSchema } from "../lib/structured-data";
import { createPageMetadata } from "../lib/site-metadata";
import { pricing } from "../lib/site-content";

export const metadata = createPageMetadata({ page: "pricing" });

export default function PricingPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageSchema("pricing"),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          getPrimaryServiceSchema(),
        ]}
      />
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
