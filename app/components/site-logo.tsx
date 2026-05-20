import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
      aria-label="Ghigha home"
    >
      {/* Native img preserves Qurova DEMO letterforms (outlined as paths in the SVG). */}
      <img
        src="/images/logo-mobile.svg"
        alt="Ghigha — Virtual Assistant Services"
        width={120}
        height={32}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="h-8 w-[120px] md:hidden"
      />
      <img
        src="/images/logo-desktop.svg"
        alt="Ghigha — Virtual Assistant Services"
        width={160}
        height={40}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="hidden h-10 w-[160px] md:block"
      />
    </Link>
  );
}
