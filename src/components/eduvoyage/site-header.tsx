"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

type NavLink = { href: string; label: string };

/** Section ids in page order (must match `id` on each section). */
const NAV_SECTION_IDS = [
  "about",
  "features",
  "process",
  "study-in",
  "faq",
  "contact",
] as const;

const links: NavLink[] = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#process", label: "Process" },
  { href: "#study-in", label: "Study In" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

/** Pixels below header bottom — when a section’s top crosses this line, it becomes active. */
const ACTIVE_SECTION_SLOP = 10;

function computeActiveHref(): string {
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 72;
  const marker = window.scrollY + headerHeight + ACTIVE_SECTION_SLOP;

  let active = "#";
  for (const id of NAV_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const effectiveTop = sectionTop - marginTop;
    if (effectiveTop <= marker) {
      active = `#${id}`;
    }
  }
  return active;
}

/** Ease that starts and ends gently — feels smoother than browser default. */
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollToY(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const duration = Math.min(
    1400,
    Math.max(650, Math.abs(distance) * 0.48)
  );

  let startTime: number | null = null;

  const step = (now: number) => {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(t));
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("scroll"));
      });
    }
  };

  requestAnimationFrame(step);
}

function scrollToHash(href: string) {
  const isRoot = href === "#" || href === "#/" || href === "";
  if (isRoot) {
    smoothScrollToY(0);
    return;
  }

  if (!href.startsWith("#")) return;

  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const docTop = rect.top + window.scrollY;
  const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  smoothScrollToY(docTop - marginTop);
}

function pathWithoutHash() {
  return `${window.location.pathname}${window.location.search}`;
}

function updateUrlForNavHref(href: string) {
  window.history.replaceState(
    null,
    "",
    href === "#" || href === "" ? pathWithoutHash() : href
  );
}

function Logo({
  onNavigate,
  className = "",
}: {
  onNavigate: (href: string) => void;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2.5 text-edu-navy ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate("#");
      }}
    >
      <Image
        src="/eduvoyage-logo-black.png"
        alt="EduVoyage"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-2xl object-contain"
        priority
      />
      <span className="min-w-0 truncate text-base font-bold tracking-tight sm:text-lg">
        EduVoyage
      </span>
    </a>
  );
}

function handleNavClick(
  e: ReactMouseEvent<HTMLAnchorElement>,
  href: string,
  closeMobile?: () => void
) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  scrollToHash(href);
  closeMobile?.();
  updateUrlForNavHref(href);
}

function navLinkClass(active: boolean, options?: { mobile?: boolean }) {
  const mobile = options?.mobile ?? false;
  const base =
    "border-b-2 pb-0.5 transition-[color,border-color,background-color] duration-200 ease-out";
  const hoverInactive = mobile
    ? "border-transparent hover:border-edu-navy/35 hover:bg-edu-panel/55 hover:text-edu-navy-dark"
    : "border-transparent hover:border-edu-navy/40 hover:text-edu-navy-dark";
  const hoverActive =
    "border-edu-navy text-edu-navy hover:border-edu-navy-dark hover:text-edu-navy-dark";
  if (active) {
    return `${base} ${hoverActive}`;
  }
  return `${base} text-edu-navy ${hoverInactive}`;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#");

  const navigateTo = useCallback((href: string) => {
    scrollToHash(href);
    updateUrlForNavHref(href);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let ticking = false;
    const updateActive = () => {
      setActiveHref(computeActiveHref());
      ticking = false;
    };
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };
    updateActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
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
        <Logo
          onNavigate={navigateTo}
          className="transition-opacity duration-200 hover:opacity-90"
        />
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-edu-navy lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={navLinkClass(activeHref === l.href)}
              aria-current={activeHref === l.href ? "true" : undefined}
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border-2 border-edu-navy bg-white px-5 py-2 text-sm font-semibold text-edu-navy shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-edu-panel/60 hover:shadow-md active:scale-[0.98] sm:inline-flex"
            onClick={(e) => handleNavClick(e, "#contact")}
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
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  d="M6 6 18 18M18 6 6 18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
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
              <a
                key={l.label}
                href={l.href}
                className={`-mx-2 rounded-lg px-2 py-1.5 ${navLinkClass(activeHref === l.href, { mobile: true })}`}
                aria-current={activeHref === l.href ? "true" : undefined}
                onClick={(e) =>
                  handleNavClick(e, l.href, () => setOpen(false))
                }
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`mt-2 rounded-full border-2 border-edu-navy px-4 py-2 text-center transition-[background-color,box-shadow] duration-200 hover:bg-edu-panel/70 hover:shadow-md ${
                activeHref === "#contact"
                  ? "border-edu-navy ring-2 ring-edu-navy/25"
                  : ""
              }`}
              aria-current={activeHref === "#contact" ? "true" : undefined}
              onClick={(e) =>
                handleNavClick(e, "#contact", () => setOpen(false))
              }
            >
              Free Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
