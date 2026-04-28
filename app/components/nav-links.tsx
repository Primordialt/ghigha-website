"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/site-content";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-6 text-sm md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "font-medium text-slate-900" : "text-slate-600 hover:text-slate-900"}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
