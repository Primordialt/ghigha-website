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
        title="Support for the Work That Keeps Your Business Running"
        description="Ghigha covers executive coordination, customer communication, workflow execution, and the administrative work that tends to pile up as a company grows."
      />
      <ServicesSection
        title="Where Ghigha Can Help"
        description="Each area is tied to a clear business outcome: less friction, clearer follow-through, and more capacity for your team."
        items={services}
      />
      <StepsSection
        id="how-ghigha-works"
        title="How We Work With Your Team"
        description="We learn your workflows, put the right coverage in place, run the work, and refine it as needs change."
        items={steps}
      />
      <DifferenceSection
        description="We work with companies that need dependable help with recurring operations and want a support model that stays organized as the business grows."
        items={differenceItems}
      />
      <PeopleProcessSection />
      <CtaBanner
        title="Where Is Work Getting Stuck?"
        body="In a 30-minute Operational Growth Consultation, we'll review how your team works today, where capacity is getting lost, and whether additional support would help. We'll give you a clear recommendation either way."
        buttonLabel="Book an Operational Growth Consultation"
      />
    </SiteShell>
  );
}
