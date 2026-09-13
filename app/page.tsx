import Link from "next/link";
import { JsonLd } from "./components/json-ld";
import { CtaBanner, SiteShell } from "./components/site-shell";
import {
  BuiltAroundSection,
  DifferenceSection,
  PeopleProcessSection,
  PricingSection,
  ServicesSection,
  StepsSection,
} from "./components/site-sections";
import {
  getBreadcrumbSchema,
  getPrimaryServiceSchema,
  getWebPageSchema,
} from "./lib/structured-data";
import { createPageMetadata } from "./lib/site-metadata";
import {
  calendlyLink,
  differenceItems,
  pricing,
  services,
  steps,
} from "./lib/site-content";

export const metadata = createPageMetadata({ page: "home" });

export default function Home() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageSchema("home"),
          getBreadcrumbSchema([{ name: "Home", path: "/" }]),
          getPrimaryServiceSchema(),
        ]}
      />
      <section
        aria-labelledby="home-hero-heading"
        className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28"
      >
        <div className="space-y-7">
          <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Business Operations Support
          </span>
          <h1
            id="home-hero-heading"
            className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Operational Capacity for Growing Businesses
          </h1>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              We help growing businesses remove operational bottlenecks without
              the cost and complexity of building another internal team.
            </p>
            <p>
              From executive coordination and customer communication to workflow
              execution and administrative operations, Ghigha provides the people
              and structure needed to keep your business moving.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <Link
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-center text-sm font-semibold leading-snug text-white transition hover:bg-slate-700 sm:px-6"
            >
              Identify Your Operational Bottlenecks
            </Link>
            <Link
              href="#how-ghigha-works"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 px-5 py-3 text-center text-sm font-semibold leading-snug text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:px-6"
            >
              See How Ghigha Works
            </Link>
          </div>
        </div>
        <aside
          aria-labelledby="home-support-heading"
          className="flex flex-col justify-center rounded-3xl border border-slate-100 bg-slate-50 p-8 sm:p-10"
        >
          <p
            id="home-support-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            People + Process + Technology
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A structured support layer designed around the way your business
            actually operates.
          </p>
        </aside>
      </section>

      <ServicesSection
        title="What We Do"
        description="Business operations support that creates capacity where growing teams feel the most friction."
        items={services}
      />
      <StepsSection
        id="how-ghigha-works"
        title="How Ghigha Works"
        description="We don't simply assign tasks. We build and operate the support structure your business needs."
        items={steps}
      />
      <DifferenceSection
        description="Ghigha is designed for businesses that have outgrown doing everything themselves but aren't ready to build another large internal team. We combine capable people, structured processes, and technology-assisted workflows to create a dependable operational layer around your business."
        items={differenceItems}
      />
      <PeopleProcessSection />
      <PricingSection
        description="Choose the level of operational capacity your business needs."
        tiers={pricing}
      />
      <BuiltAroundSection />
      <CtaBanner
        title="What's Slowing Your Business Down?"
        body="You may not need another employee. You may simply need the right operational responsibilities taken off your team's plate. Let's identify where your business is losing time, capacity, or consistency — and determine whether Ghigha can help."
        buttonLabel="Book an Operational Growth Consultation"
      />
    </SiteShell>
  );
}
