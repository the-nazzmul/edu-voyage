"use client";

import { useState } from "react";

const items = [
  "What documents do I need to apply for a student visa from Bangladesh?",
  "How long does it usually take from shortlist to enrolment abroad?",
  "Is the first consultation free, and what happens in that session?",
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-edu-sky">FAQ</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="text-base font-medium text-edu-navy sm:text-lg">
              Still have questions? Ask our team in Dhaka—we&apos;ll reply with clear, practical
              guidance for your situation.
            </p>
            <div className="relative mt-8">
              <svg
                className="absolute -right-4 top-0 hidden h-16 w-16 text-edu-navy lg:block"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden
              >
                <path
                  d="M8 8 C 24 32 8 48 40 56"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <label htmlFor="faq-free-text" className="sr-only">
                Free to ask
              </label>
              <textarea
                id="faq-free-text"
                rows={5}
                placeholder="Ask anything about destinations, applications, or visas…"
                className="min-h-[8rem] w-full resize-y rounded-3xl border-0 bg-edu-panel px-5 py-4 text-base text-edu-navy shadow-inner ring-1 ring-edu-navy/10 placeholder:text-edu-label focus:outline-none focus:ring-2 focus:ring-edu-navy sm:text-sm"
              />
            </div>
          </div>
          <div className="min-w-0 space-y-3 sm:space-y-4">
            {items.map((q, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={i}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-2xl bg-edu-panel px-4 py-3 text-left text-sm font-medium text-edu-navy shadow-sm ring-1 ring-edu-navy/10 transition hover:bg-edu-panel-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-edu-navy sm:px-5 sm:py-4"
                >
                  <span className="min-w-0 break-words pr-2">{q}</span>
                  <span
                    className="text-xl font-light text-edu-navy transition"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              );
            })}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full min-h-[44px] rounded-full bg-edu-navy px-10 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-edu-navy-dark sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
