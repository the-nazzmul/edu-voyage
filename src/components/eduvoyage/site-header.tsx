"use client";

import { useEffect, useState } from "react";

type NavLink = { href: string; label: string; active?: boolean };

const links: NavLink[] = [
  { href: "#", label: "Home", active: true },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#study-in", label: "Study In" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 text-edu-navy">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/80 shadow-sm ring-1 ring-edu-navy/10">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden
        >
          <path d="M12 3 4 7v2c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V7l-8-4Z" />
          <path d="M8 11h8M9 15h6" />
        </svg>
      </span>
      <span className="min-w-0 truncate text-base font-bold tracking-tight sm:text-lg">
        EduVoyage
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full border-b pt-[env(safe-area-inset-top)] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-edu-navy/10 bg-edu-primary/15 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex min-h-13 max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:min-h-14 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-edu-navy lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.active
                  ? "border-b-2 border-edu-navy pb-0.5"
                  : "hover:opacity-80"
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border-2 border-edu-navy bg-white px-5 py-2 text-sm font-semibold text-edu-navy shadow-sm transition hover:bg-edu-panel/60 sm:inline-flex"
          >
            Free Consultation
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-edu-navy/20 bg-white/80 p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path d="M6 6 18 18M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="mx-4 mt-3 max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto rounded-2xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur lg:hidden"
        >
          <nav className="flex flex-col gap-3 text-sm font-semibold text-edu-navy">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full border-2 border-edu-navy px-4 py-2 text-center"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
