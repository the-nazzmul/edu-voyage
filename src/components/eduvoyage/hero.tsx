import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/eduvoyage/social-icons";
import Image from "next/image";

function PlanePath() {
  return (
    <svg
      className="pointer-events-none absolute right-[8%] top-[22%] z-[1] hidden h-24 w-40 text-edu-navy/70 md:block"
      viewBox="0 0 160 96"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 72 C 40 20, 90 8, 140 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 6"
      />
      <path
        d="M132 22 148 30 138 34Z"
        fill="currentColor"
        transform="rotate(12 140 28)"
      />
    </svg>
  );
}

function HeroSocialPill() {
  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-end gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-edu-navy shadow-md ring-1 ring-edu-navy/10 sm:gap-3 sm:px-4">
      <span className="flex shrink-0 flex-wrap justify-center gap-2">
        <a
          href="https://instagram.com"
          className="grid h-9 w-9 place-items-center rounded-full bg-edu-navy text-white sm:h-8 sm:w-8"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
        <a
          href="https://facebook.com"
          className="grid h-9 w-9 place-items-center rounded-full bg-edu-navy text-white sm:h-8 sm:w-8"
          aria-label="Facebook"
        >
          <FacebookIcon className="h-4 w-4" />
        </a>
        <a
          href="https://x.com"
          className="grid h-9 w-9 place-items-center rounded-full bg-edu-navy text-white sm:h-8 sm:w-8"
          aria-label="X"
        >
          <XIcon className="h-4 w-4" />
        </a>
        <a
          href="https://linkedin.com"
          className="grid h-9 w-9 place-items-center rounded-full bg-edu-navy text-white sm:h-8 sm:w-8"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
      </span>
      <span className="max-w-44 truncate text-center text-[10px] font-bold tracking-wide sm:max-w-none sm:text-[11px]">
        www.eduvoyage.com
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate z-0 min-h-[100dvh] min-h-[100svh] overflow-x-clip">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-background-image.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-edu-primary/25 via-transparent to-edu-sky-soft/50" />
      </div>
      <PlanePath />
      <div className="relative z-10 mx-auto grid min-h-[100dvh] min-h-[100svh] w-full max-w-6xl grid-cols-1 grid-rows-[1fr_auto] gap-8 sm:gap-10 lg:grid-cols-2 lg:grid-rows-1 lg:items-stretch lg:gap-12">
        <div className="flex min-h-0 w-full flex-col items-center sm:justify-center justify-end lg:items-stretch">
          <div className="mx-auto w-full max-w-xl px-4 pt-14 text-center sm:px-6 sm:pt-0 lg:mx-0 lg:max-w-none lg:px-8 lg:text-left">
            <h1 className="text-balance text-[clamp(2.2rem,8.4vw,3rem)] font-black leading-[1.15] tracking-tight text-edu-navy sm:text-[clamp(1.65rem,4.2vw+0.6rem,2.75rem)] sm:font-extrabold">
              Make your overseas dreams come true!
            </h1>
            <p className="mt-4 text-lg font-semibold text-edu-navy/90 sm:text-lg sm:font-medium">
              Global Leaders in International Education Services.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              <a
                href="#about"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-edu-navy bg-white px-6 py-2.5 text-sm font-semibold text-edu-navy shadow-sm transition hover:bg-edu-panel/80 sm:px-7 sm:py-3"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-edu-navy px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-edu-navy-dark sm:px-7 sm:py-3"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-0 min-w-0 flex-col justify-end">
          <div className="relative ml-auto h-[min(46svh,380px)] w-[min(100%,380px)] sm:h-[min(54svh,440px)] sm:w-[min(100%,420px)] lg:h-[min(82svh,780px)] lg:w-full lg:max-w-[min(100%,580px)]">
            <Image
              src="/assets/hero-student-smiling.png"
              alt="Student smiling with backpack and suitcase"
              fill
              priority
              className="object-contain object-bottom object-right grayscale contrast-[1.05]"
              sizes="(max-width: 1024px) 92vw, 580px"
            />
            <div className="pointer-events-none absolute bottom-[22%] right-2 z-10 max-w-[calc(100%-0.75rem)] sm:bottom-[24%] sm:right-3 lg:bottom-[26%] lg:right-4">
              <div className="pointer-events-auto flex justify-end">
                <HeroSocialPill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
