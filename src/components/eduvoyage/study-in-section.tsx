"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Countries", "Universities", "Courses"] as const;

type University = {
  name: string;
  src: string;
  imageAlt: string;
  text: string;
};

const universities: University[] = [
  {
    name: "Harvard",
    src: "/assets/study-in/harvard.jpg",
    imageAlt: "Harvard University auditorium and audience",
    text: "Top-tier research and liberal arts for law, business, and STEM.",
  },
  {
    name: "MIT",
    src: "/assets/study-in/mit.jpg",
    imageAlt: "MIT campus interior with city view",
    text: "Elite engineering and CS—we help you stand out for competitive STEM intakes.",
  },
  {
    name: "Stanford",
    src: "/assets/study-in/stanford.jpg",
    imageAlt: "Stanford graduates celebrating at commencement",
    text: "Silicon Valley links and flexible programs for tech, startups, and research.",
  },
  {
    name: "Columbia",
    src: "/assets/study-in/columbia.jpg",
    imageAlt: "Columbia University classroom lecture",
    text: "Ivy League in NYC—strong in journalism, finance, and global internships.",
  },
];

function StudyUniversityCard({ name, src, imageAlt, text }: University) {
  return (
    <article className="relative isolate overflow-visible pt-8 sm:pt-10">
      <div className="relative min-h-[7.75rem] overflow-visible rounded-2xl bg-edu-primary py-4 pl-[10rem] pr-4 shadow-md ring-1 ring-edu-navy/10 sm:min-h-[8.25rem] sm:rounded-[1.75rem] sm:py-5 sm:pl-[11rem] sm:pr-6 md:pl-[11.75rem]">
        <h3 className="text-lg font-bold text-edu-navy sm:text-xl">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-edu-muted">{text}</p>
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 aspect-square w-[8.75rem] overflow-hidden rounded-2xl shadow-lg ring-1 ring-edu-navy/15 sm:w-[9.5rem] md:w-[10rem]">
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={imageAlt}
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 640px) 140px, (max-width: 768px) 152px, 160px"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function StudyInSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Universities");

  return (
    <section
      id="study-in"
      className="scroll-mt-20 overflow-x-clip bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm italic text-edu-label">Study In</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Start Your Global Adventure Today
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-1.5 rounded-2xl bg-edu-panel p-2 shadow-inner ring-1 ring-edu-navy/10 sm:mt-10 sm:gap-2 sm:rounded-full">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={`min-h-[44px] rounded-full px-2 py-2.5 text-center text-[11px] font-semibold leading-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-edu-navy sm:px-6 sm:text-sm ${
                active === t
                  ? "bg-edu-navy text-white shadow"
                  : "bg-white text-edu-navy hover:bg-white/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {active}
        </p>
        <div className="mt-10 grid min-w-0 gap-x-5 gap-y-1 sm:mt-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
          {universities.map((u) => (
            <StudyUniversityCard key={u.name} {...u} />
          ))}
        </div>
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-edu-navy px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-edu-navy-dark sm:px-10"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
