export default function Home() {
  const services = [
    {
      title: "Virtual Assistants",
      description:
        "Skilled assistants for admin, customer support, and daily operations.",
    },
    {
      title: "Business Consulting",
      description:
        "We help you structure your operations and scale with confidence.",
    },
    {
      title: "Marketing & Branding",
      description:
        "We position your brand to attract the right customers and convert more leads.",
    },
    {
      title: "Web & App Development",
      description:
        "We build modern tools and systems that support your growth.",
    },
  ];

  const steps = [
    {
      title: "Tell us what you need",
      description:
        "We understand your business and identify the tasks you want to delegate.",
    },
    {
      title: "We match you with a VA",
      description:
        "We assign a trained assistant that fits your exact needs.",
    },
    {
      title: "Start working in days",
      description:
        "You begin working with your assistant quickly and efficiently.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499/mo",
      description: "Great for solo founders and small teams.",
      features: ["Part-time VA support", "Email and calendar help", "Weekly check-ins"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      price: "$999/mo",
      description: "Best for growing businesses with daily operations.",
      features: [
        "Dedicated VA support",
        "Customer support tasks",
        "Research and reporting",
        "Priority communication",
      ],
      cta: "Book a Call",
      featured: true,
    },
    {
      name: "Scale+",
      price: "Custom",
      description: "For teams that need advanced growth support.",
      features: [
        "Multiple team members",
        "Consulting and process design",
        "Marketing, branding, and tech support",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  const reasons = [
    "Fast onboarding",
    "Affordable pricing",
    "Skilled and reliable assistants",
    "Easy replacement if needed",
    "Built for growing businesses",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Ghigha
          </a>
          <a
            href="#cta"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Book a Free Call
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              Business Support & Outsourcing
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Hire Reliable Virtual Assistants in 24 hours
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Stop spending your time on repetitive tasks. We provide trained
              virtual assistants who handle your daily operations so you can
              focus on growing your business.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Book a Free Call
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                View Pricing
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              What clients usually get
            </p>
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

        <section id="services" className="border-t border-slate-100 py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight">What We Do</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              We help business owners free up their time and run their operations smoothly.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-100 p-6"
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

        <section id="how-it-works" className="bg-slate-50 py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight">
              How it works
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-2xl bg-white p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Clear, flexible plans based on your current stage.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pricing.map((tier) => (
                <article
                  key={tier.name}
                  className={`rounded-2xl border p-6 ${
                    tier.featured
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-100"
                  }`}
                >
                  <h3 className="text-lg font-medium">{tier.name}</h3>
                  <p
                    className={`mt-2 text-3xl font-semibold ${
                      tier.featured ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`mt-3 text-sm ${
                      tier.featured ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className={`mt-8 inline-flex w-full justify-center rounded-full px-4 py-2.5 text-sm font-medium transition ${
                      tier.featured
                        ? "bg-white text-slate-900 hover:bg-slate-100"
                        : "bg-slate-900 text-white hover:bg-slate-700"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="border-t border-slate-100 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Why Choose Ghigha
              </h2>
              <p className="mt-4 text-slate-600">
                We are built for busy business owners who want to delegate with
                peace of mind and keep moving forward.
              </p>
            </div>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="rounded-xl border border-slate-100 px-5 py-4 text-sm text-slate-700"
                >
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cta" className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white">
              <h2 className="text-3xl font-semibold tracking-tight">
                Stop Doing Everything Yourself
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-200">
                Let us handle the daily work so you can focus on growing your
                business.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Ghigha. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
            <a href="#" className="hover:text-slate-700">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
