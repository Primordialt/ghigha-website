import { PageHero, SiteShell } from "../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s Work Together"
        description="Have questions or ready to get started? Send us a message and we will get back to you shortly."
      />
      <section className="border-t border-slate-100 py-20">
        <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Book a free call</h2>
            <p className="mt-3 text-slate-600">
              Email us at{" "}
              <a
                href="mailto:hello@ghigha.com"
                className="font-medium text-slate-900 underline underline-offset-4"
              >
                hello@ghigha.com
              </a>{" "}
              and we will set up a quick consultation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Phone</p>
                <p className="mt-1 font-medium text-slate-900">+1702941059</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Hours</p>
                <p className="mt-1 font-medium text-slate-900">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
