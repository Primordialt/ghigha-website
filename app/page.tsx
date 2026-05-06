import Link from "next/link";
import { CtaBanner, SiteShell } from "./components/site-shell";
import {
  PricingSection,
  ServicesSection,
  StepsSection,
  WhyChooseSection,
} from "./components/site-sections";
import { pricing, reasons, services, steps } from "./lib/site-content";

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            Business Support & Outsourcing
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hire Reliable Virtual Assistants and Operations Support Teams
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            We help businesses streamline operations with dedicated virtual assistants and
            managed support systems.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-slate-200 px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              View Pricing
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">What clients usually get</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-semibold">10+ hrs</p>
              <p className="mt-1 text-sm text-slate-600">Saved every week</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Faster</p>
              <p className="mt-1 text-sm text-slate-600">Response times</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Less stress</p>
              <p className="mt-1 text-sm text-slate-600">For founders & teams</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">More focus</p>
              <p className="mt-1 text-sm text-slate-600">On growth work</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection
        description="We help business owners free up their time and run their operations smoothly."
        items={services}
      />
      <StepsSection items={steps} />
      <PricingSection description="Clear, flexible plans based on your current stage." tiers={pricing} />
      <WhyChooseSection
        description="We are built for busy business owners who want to delegate with peace of mind and keep moving forward."
        reasons={reasons}
      />
      <CtaBanner
        title="Stop Doing Everything Yourself"
        body="Let us handle the daily work so you can focus on growing your business."
        buttonLabel="Book a Free Consultation"
      />
    </SiteShell>
  );
}
