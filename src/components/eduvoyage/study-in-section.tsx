"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Countries", "Universities", "Courses"] as const;

const universities = [
  {
    name: "Harvard",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    text: "Ipsum has been the industry standard dummy text ever since the 1500s.",
  },
  {
    name: "MIT",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    text: "Ipsum has been the industry standard dummy text ever since the 1500s.",
  },
  {
    name: "Stanford",
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    text: "Ipsum has been the industry standard dummy text ever since the 1500s.",
  },
  {
    name: "Columbia",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    text: "Ipsum has been the industry standard dummy text ever since the 1500s.",
  },
];

export function StudyInSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Universities");

  return (
    <section id="study-in" className="scroll-mt-20 bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
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
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {universities.map((u) => (
            <article
              key={u.name}
              className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl bg-edu-panel shadow-md ring-1 ring-edu-navy/10 sm:flex-row sm:rounded-[2rem]"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-2/5 sm:min-h-[200px]">
                <Image
                  src={u.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 200px"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6">
                <h3 className="text-lg font-bold text-edu-navy sm:text-xl">{u.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-edu-muted">{u.text}</p>
              </div>
            </article>
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
