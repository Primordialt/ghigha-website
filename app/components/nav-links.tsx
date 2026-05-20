"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/site-content";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-6 text-sm md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "font-medium text-slate-900"
                  : "text-slate-600 transition hover:text-slate-900"
              }
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
