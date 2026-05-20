import { JsonLd } from "../components/json-ld";
import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import { ServicesSection, StepsSection } from "../components/site-sections";
import {
  getBreadcrumbSchema,
  getServiceSchemas,
  getWebPageSchema,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site-metadata";
import { services, steps } from "../lib/site-content";

export const metadata = createPageMetadata({ page: "services" });

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageSchema("services"),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getServiceSchemas(),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Support built for busy business owners"
        description="From day-to-day admin to growth-focused support, we help you delegate the right tasks so you can stay focused on scaling."
      />
      <ServicesSection
        title="What We Do"
        description="We help business owners free up their time and run their operations smoothly."
        items={services}
      />
      <StepsSection title="How It Works" items={steps} />
      <CtaBanner
        title="Need help with daily operations?"
        body="Tell us what you need, and we will match you with reliable support fast."
        buttonLabel="Book a Free Call"
      />
    </SiteShell>
  );
}
