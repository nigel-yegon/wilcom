"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/services",  label: "Services" },
  { href: "/portfolio", label: "Clients / Portfolio" },
  { href: "/contact",   label: "Request a Quote" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* ---------- LOGO ---------- */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* Inline SVG logo — swap for <Image /> if you have a file */}
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M2 7.5 20 3l1.5 5L3.5 12.5 2 7.5Z" />
              <path d="M22 8v6" />
              <path d="M5 12v3a4 4 0 0 0 4 4h2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Wilcom
          </span>
        </Link>

        {/* ---------- DESKTOP MENU ---------- */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isCTA = link.href === "/contact";

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      isCTA
                        ? "ml-2 rounded-lg bg-linear-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                        : `rounded-lg px-4 py-2 text-sm font-medium transition ${
                            active
                              ? "bg-neutral-800 text-white"
                              : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                          }`
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ---------- MOBILE TOGGLE ---------- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-300 transition hover:bg-neutral-900 md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {open && (
        <nav className="border-t border-neutral-800 md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isCTA = link.href === "/contact";

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      isCTA
                        ? "block rounded-lg bg-linear-to-r from-blue-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white"
                        : `block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                            active
                              ? "bg-neutral-800 text-white"
                              : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                          }`
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}