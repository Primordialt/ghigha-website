import { JsonLd } from "../components/json-ld";
import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import {
  DifferenceSection,
  PeopleProcessSection,
} from "../components/site-sections";
import { getBreadcrumbSchema, getWebPageSchema } from "../lib/structured-data";
import { createPageMetadata } from "../lib/site-metadata";
import { differenceItems } from "../lib/site-content";

export const metadata = createPageMetadata({ page: "about" });

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageSchema("about"),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="About"
        title="Built for Growing Businesses That Need Capacity, Not Complexity"
        description="Ghigha was built around a simple observation: growing businesses often don't need more complexity. They need more operational capacity."
      />
      <section className="border-t border-slate-100 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-slate-600">
            <p>
              Leadership teams lose valuable time managing recurring tasks,
              coordinating people, following up with customers, and keeping
              processes moving.
            </p>
            <p>
              Ghigha exists to take that operational weight off their shoulders.
            </p>
            <p>
              We combine people, processes, and technology to help businesses
              operate with greater structure, responsiveness, and consistency.
            </p>
          </div>
        </div>
      </section>
      <PeopleProcessSection />
      <DifferenceSection
        description="Ghigha is designed for businesses that have outgrown doing everything themselves but aren't ready to build another large internal team."
        items={differenceItems}
      />
      <CtaBanner
        title="Ready to Create Operational Capacity?"
        body="Book an Operational Growth Consultation to identify bottlenecks and see whether Ghigha is the right fit."
        buttonLabel="Book an Operational Growth Consultation"
        note="30 minutes · No pressure · Practical conversation"
      />
    </SiteShell>
  );
}
