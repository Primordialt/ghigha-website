import { JsonLd } from "../components/json-ld";
import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import {
  BuiltAroundSection,
  PricingSection,
} from "../components/site-sections";
import {
  getBreadcrumbSchema,
  getPrimaryServiceSchema,
  getWebPageSchema,
} from "../lib/structured-data";
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
        title="Coverage Matched to Your Stage"
        description="Each package gives your business the right level of operational support for its current stage of growth."
      />
      <PricingSection
        description="Clear monthly plans for structured operations support."
        tiers={pricing}
      />
      <BuiltAroundSection />
      <CtaBanner
        title="Unsure Which Plan Fits?"
        body="Book an Operational Growth Consultation. We'll review where capacity is getting lost and recommend the coverage that makes sense."
        buttonLabel="Book an Operational Growth Consultation"
      />
    </SiteShell>
  );
}
