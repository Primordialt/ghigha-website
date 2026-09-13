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
        title="Operational Capacity, Matched to Your Stage"
        description="Each package is built around the operational support your business needs — not the number of people assigned."
      />
      <PricingSection
        description="Transparent monthly plans for structured business operations support."
        tiers={pricing}
      />
      <BuiltAroundSection />
      <CtaBanner
        title="Not Sure Which Level of Support You Need?"
        body="Book an Operational Growth Consultation. We'll identify where capacity is leaking and recommend the right fit — without overselling."
        buttonLabel="Book an Operational Growth Consultation"
        note="30 minutes · No pressure · Practical conversation"
      />
    </SiteShell>
  );
}
