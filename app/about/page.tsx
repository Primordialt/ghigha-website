import { JsonLd } from "../components/json-ld";
import { CtaBanner, PageHero, SiteShell } from "../components/site-shell";
import { WhyChooseSection } from "../components/site-sections";
import { getBreadcrumbSchema, getWebPageSchema } from "../lib/structured-data";
import { createPageMetadata } from "../lib/site-metadata";
import { reasons } from "../lib/site-content";

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
        title="Built for Business Owners Who Want to Scale"
        description="Ghigha was created to help founders and businesses stop getting stuck in daily operations."
      />
      <section className="border-t border-slate-100 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-slate-100 bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Our mission</h2>
            <p className="mt-4 text-slate-600">
              We believe your time should be spent on growth, not routine work.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Our approach</h2>
            <p className="mt-4 text-slate-600">
              Our mission is simple: provide reliable people and systems that help
              your business run better and grow faster.
            </p>
          </article>
        </div>
      </section>
      <WhyChooseSection
        title="Why Choose Ghigha"
        description="Our team is focused on helping busy owners delegate with confidence."
        reasons={reasons}
      />
      <CtaBanner
        title="Ready to grow with the right support?"
        body="Let us help you build reliable systems and support at every stage."
        buttonLabel="Book a Free Call"
      />
    </SiteShell>
  );
}
