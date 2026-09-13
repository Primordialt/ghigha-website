import Link from "next/link";
import {
  DifferenceItem,
  PricingTier,
  ServiceItem,
  StepItem,
} from "../lib/site-content";

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
    <section className="border-t border-slate-100 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {service.description}
              </p>
              {service.highlights?.length ? (
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-600">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type StepsSectionProps = {
  id?: string;
  title?: string;
  description?: string;
  items: StepItem[];
};

export function StepsSection({
  id,
  title = "How Ghigha Works",
  description,
  items,
}: StepsSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {description}
          </p>
        ) : null}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
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
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Pricing
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex h-full flex-col rounded-2xl border p-6 pt-8 shadow-sm ${
                tier.featured
                  ? "border-slate-900 bg-slate-900 text-white"
                  : tier.variant === "premium"
                    ? "border-slate-300 bg-white"
                    : "border-slate-100 bg-white"
              }`}
            >
              {tier.badge ? (
                <div className="absolute -top-3 left-4 right-4 sm:left-6 sm:right-auto">
                  <span
                    className={`inline-flex max-w-full rounded-md px-3 py-1 text-xs font-semibold leading-snug ${
                      tier.featured
                        ? "bg-white text-slate-900"
                        : "border border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              ) : null}
              <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
              {tier.subtitle ? (
                <p
                  className={`mt-1 text-sm font-semibold ${
                    tier.featured ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {tier.subtitle}
                </p>
              ) : null}
              <p
                className={`mt-3 text-3xl font-semibold tracking-tight ${
                  tier.featured ? "text-white" : "text-slate-900"
                }`}
              >
                {tier.price}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {tier.description}
              </p>
              <ul
                className={`mt-6 flex-1 space-y-2.5 text-sm leading-relaxed ${
                  tier.featured ? "text-slate-200" : "text-slate-600"
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                        tier.featured ? "bg-slate-400" : "bg-slate-400"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.paymentLink ?? "/contact"}
                target={tier.paymentLink ? "_blank" : undefined}
                rel={tier.paymentLink ? "noopener noreferrer" : undefined}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-center text-sm font-semibold transition ${
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

type DifferenceSectionProps = {
  title?: string;
  description: string;
  items: DifferenceItem[];
};

export function DifferenceSection({
  title = "More Than Extra Hands. A Better Way to Operate.",
  description,
  items,
}: DifferenceSectionProps) {
  return (
    <section className="border-t border-slate-100 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PeopleProcessSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          People + Process + Technology
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Modern businesses don&apos;t need to choose between people and
            technology.
          </p>
          <p>
            Ghigha combines human execution, structured processes, and
            technology-assisted workflows to create a more efficient operational
            system.
          </p>
          <p>
            The goal isn&apos;t simply to add another person to your business.
          </p>
          <p className="font-semibold text-slate-900">
            The goal is to make your business easier to operate.
          </p>
        </div>
      </div>
    </section>
  );
}

export function BuiltAroundSection() {
  return (
    <section className="border-t border-slate-100 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built Around Your Business
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Every business operates differently. That&apos;s why Ghigha
            doesn&apos;t force every client into the same support model.
          </p>
          <p>
            We first understand your workflows, identify the areas creating
            friction, and recommend the level of support that actually makes
            sense.
          </p>
          <p className="font-semibold text-slate-900">
            You may not need our largest package.
          </p>
          <p>We would rather recommend the right fit than oversell support.</p>
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

/** Kept for pages that still pass a simple string list. Prefer DifferenceSection. */
export function WhyChooseSection({
  title = "Why Choose Ghigha",
  description,
  reasons,
}: WhyChooseSectionProps) {
  return (
    <section className="border-t border-slate-100 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
        <ul className="space-y-4">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="rounded-xl border border-slate-100 bg-white px-5 py-4 text-sm font-medium text-slate-700"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
