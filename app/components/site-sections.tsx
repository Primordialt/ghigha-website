import Link from "next/link";
import { PricingTier, ServiceItem, StepItem } from "../lib/site-content";

type ServicesSectionProps = {
  title?: string;
  description: string;
  items: ServiceItem[];
};

export function ServicesSection({
  title = "What We Do",
  description,
  items,
}: ServicesSectionProps) {
  return (
    <section className="border-t border-slate-100 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600">{description}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-100 bg-white p-6"
            >
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type StepsSectionProps = {
  title?: string;
  items: StepItem[];
};

export function StepsSection({ title = "How It Works", items }: StepsSectionProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type PricingSectionProps = {
  description: string;
  tiers: PricingTier[];
};

export function PricingSection({ description, tiers }: PricingSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
        <p className="mt-4 max-w-2xl text-slate-600">{description}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                tier.featured
                  ? "border-slate-900 bg-slate-900 text-white"
                  : tier.variant === "premium"
                    ? "border-slate-300 bg-white"
                    : "border-slate-100 bg-white"
              }`}
            >
              {tier.badge ? (
                <div className="absolute -top-3 left-6">
                  <span
                    className={`inline-flex rounded-lg px-3 py-1 text-xs font-medium ${
                      tier.featured
                        ? "bg-white text-slate-900"
                        : "border border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              ) : null}
              <h3 className="text-lg font-medium">{tier.name}</h3>
              <p
                className={`mt-2 text-3xl font-semibold ${
                  tier.featured ? "text-white" : "text-slate-900"
                }`}
              >
                {tier.price}
              </p>
              <p
                className={`mt-3 text-sm ${tier.featured ? "text-slate-200" : "text-slate-600"}`}
              >
                {tier.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full justify-center rounded-md px-4 py-2.5 text-sm font-medium transition ${
                  tier.featured
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : tier.variant === "premium"
                      ? "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                      : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type WhyChooseSectionProps = {
  title?: string;
  description: string;
  reasons: string[];
};

export function WhyChooseSection({
  title = "Why Choose Ghigha",
  description,
  reasons,
}: WhyChooseSectionProps) {
  return (
    <section className="border-t border-slate-100 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 text-slate-600">{description}</p>
        </div>
        <ul className="space-y-4">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="rounded-xl border border-slate-100 bg-white px-5 py-4 text-sm text-slate-700"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
