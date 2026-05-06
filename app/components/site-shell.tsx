import Link from "next/link";
import { calendlyLink } from "../lib/site-content";
import { NavLinks } from "./nav-links";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Ghigha
        </Link>
        <NavLinks />
        <Link
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Book a Free Call
        </Link>
      </nav>
    </header>
  );
}

type CtaBannerProps = {
  title: string;
  body: string;
  buttonLabel: string;
};

export function CtaBanner({ title, body, buttonLabel }: CtaBannerProps) {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">{body}</p>
          <Link
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
        {eyebrow}
      </span>
      <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
        {description}
      </p>
    </section>
  );
}

export function SiteFooter() {
  return (
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
          <Link
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
