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
        title="Built to Give Leadership Teams More Room to Lead"
        description="Ghigha started from a simple observation: many companies keep adding complexity while leadership is still buried in recurring day-to-day work."
      />
      <section className="border-t border-slate-100 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-slate-600">
            <p>
              Founders and managers often spend their days on calendars, inbox
              triage, customer follow-ups, and process coordination. That work
              matters, and it also crowds out clients, decisions, and growth.
            </p>
            <p>
              We take that operational load and run it with clear ownership,
              steady communication, and processes that hold up as volume
              increases.
            </p>
            <p>
              People, process, and technology sit at the center of how we work.
              In practice, that means fewer dropped balls, clearer
              follow-through, and a team with more room for higher-value work.
            </p>
          </div>
        </div>
      </section>
      <PeopleProcessSection />
      <DifferenceSection
        description="We partner with leadership teams that want dependable help with recurring operations, and a support model that can grow with the business."
        items={differenceItems}
      />
      <CtaBanner
        title="Ready to Talk Through Your Operations?"
        body="Book an Operational Growth Consultation. We'll look at where time is getting lost and whether Ghigha is a useful fit."
        buttonLabel="Book an Operational Growth Consultation"
      />
    </SiteShell>
  );
}
