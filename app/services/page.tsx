import { JsonLd } from "../components/json-ld";
import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import {
  DifferenceSection,
  PeopleProcessSection,
  ServicesSection,
  StepsSection,
} from "../components/site-sections";
import {
  getBreadcrumbSchema,
  getServiceSchemas,
  getWebPageSchema,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site-metadata";
import { differenceItems, services, steps } from "../lib/site-content";

export const metadata = createPageMetadata({ page: "services" });

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageSchema("services"),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/services" },
          ]),
          getServiceSchemas(),
        ]}
      />
      <PageHero
        eyebrow="Solutions"
        title="Business Operations Support That Creates Capacity"
        description="From executive coordination and customer communication to workflow execution and growth operations, Ghigha provides the people and structure needed to keep your business moving."
      />
      <ServicesSection
        title="What We Do"
        description="Each solution is built around a business outcome — not a list of tasks to outsource."
        items={services}
      />
      <StepsSection
        id="how-ghigha-works"
        title="How Ghigha Works"
        description="We assess where capacity is leaking, build the right support structure, operate the work, and improve as you grow."
        items={steps}
      />
      <DifferenceSection
        description="Ghigha is designed for businesses that have outgrown doing everything themselves but aren't ready to build another large internal team."
        items={differenceItems}
      />
      <PeopleProcessSection />
      <CtaBanner
        title="Where Is Your Business Losing Capacity?"
        body={`A 30-minute Operational Growth Consultation to understand your current operations, identify recurring bottlenecks, and determine whether additional operational support could create meaningful capacity for your business.

No high-pressure sales pitch. If Ghigha isn't the right fit, we'll tell you.`}
        buttonLabel="Book an Operational Growth Consultation"
        note="30 minutes · No pressure · Practical conversation"
      />
    </SiteShell>
  );
}
