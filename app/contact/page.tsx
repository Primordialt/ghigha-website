import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { PageHero, SiteShell } from "../components/site-shell";
import {
  getBreadcrumbSchema,
  getContactPageSchema,
  getWebPageSchema,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site-metadata";
import { calendlyLink } from "../lib/site-content";

export const metadata = createPageMetadata({ page: "contact" });

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageSchema("contact"),
          getContactPageSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Start With an Operational Growth Consultation"
        description="A 30-minute conversation about how your team works today, where recurring work is creating drag, and whether additional support would create useful capacity."
      />
      <section className="border-t border-slate-100 py-20">
        <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Reach Us Directly
            </h2>
            <p className="mt-3 text-slate-600">
              Email{" "}
              <a
                href="mailto:hello@ghigha.com"
                className="font-medium text-slate-900 underline underline-offset-4"
              >
                hello@ghigha.com
              </a>{" "}
              or book a consultation. We keep the conversation practical and
              give you a clear recommendation either way.
            </p>
            <Link
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Book an Operational Growth Consultation
            </Link>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <p className="mt-1 font-medium text-slate-900">
                  <a href="tel:+16466318665" className="hover:text-slate-700">
                    +16466318665
                  </a>
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Hours
                </p>
                <p className="mt-1 font-medium text-slate-900">
                  Mon - Fri, 9am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
