"use client";

import { type FormEvent, useId, useState } from "react";

type FaqEntry = {
  question: string;
  answer: string;
};

const faqItems: FaqEntry[] = [
  {
    question: "What documents do I need to apply for a student visa from Bangladesh?",
    answer:
      "Requirements depend on the country, but you will typically need a valid passport, your institution offer or CAS/COE, proof you can cover tuition and living costs, academic transcripts and certificates, English test results where applicable, and any medical or police certificates the embassy asks for. We give you a country-specific checklist early, review scans for gaps, and help you time submissions so nothing expires before your appointment.",
  },
  {
    question: "How long does it usually take from shortlist to enrolment abroad?",
    answer:
      "There is no single number: shortlisting and applications might take a few weeks or a couple of months depending on deadlines and how quickly institutions respond. After an offer, you may have deposit deadlines, then visa processing—which can range from a few weeks to longer in peak season. We build a realistic timeline with buffer for your intake so you know what happens in what order and avoid missing a key date.",
  },
  {
    question: "Is the first consultation free, and what happens in that session?",
    answer:
      "Yes—the first consultation is free. In that session we talk through your goals, academic background, budget, and preferred destinations or courses. We explain how applications and visas usually work for your case, what we would handle for you, and what you would need to prepare next. There is no pressure to buy a package; you leave with a clearer picture of whether and how to move forward.",
  },
];

type FaqItemProps = {
  entry: FaqEntry;
  groupId: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ entry, groupId, index, isOpen, onToggle }: FaqItemProps) {
  const headerId = `${groupId}-header-${index}`;
  const panelId = `${groupId}-panel-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl transition-colors sm:rounded-3xl ${
        isOpen
          ? "bg-edu-primary ring-2 ring-edu-navy/35 shadow-sm"
          : "bg-edu-primary ring-1 ring-edu-navy/20 hover:ring-edu-navy/30 hover:brightness-[1.02]"
      }`}
    >
      <h3 className="text-sm font-medium leading-snug text-edu-navy sm:text-base">
        <button
          id={headerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-edu-navy sm:min-h-[52px] sm:px-5 sm:py-4"
          onClick={onToggle}
        >
          <span className="min-w-0 wrap-break-word pr-2">{entry.question}</span>
          <span
            className={`shrink-0 text-xl font-light tabular-nums text-edu-navy transition-transform duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? "scale-95" : "scale-100"
            }`}
            aria-hidden
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            aria-hidden={!isOpen}
            className={`border-t border-edu-navy/10 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="px-4 pb-4 pt-0 text-sm leading-relaxed text-edu-muted sm:px-5 sm:pb-5 sm:pt-1 sm:text-[0.9375rem]">
              {entry.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const groupId = useId().replace(/:/g, "");

  function handleFaqToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-edu-sky">FAQ</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <form
          className="mt-10 grid items-start gap-10 sm:mt-14 sm:gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16"
          onSubmit={handleFormSubmit}
        >
          {/* Mobile: accordions first; lg: second column — stretches to match ask column */}
          <div className="order-1 flex h-full min-h-0 min-w-0 flex-col lg:order-2">
            <div className="flex flex-col gap-3 sm:gap-4">
              {faqItems.map((entry, i) => (
                <FaqItem
                  key={entry.question}
                  entry={entry}
                  groupId={groupId}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => handleFaqToggle(i)}
                />
              ))}
            </div>
          </div>

          {/* Mobile: ask block after accordions; lg: first column — same row height as accordions */}
          <div className="order-2 flex h-full min-h-0 min-w-0 flex-col lg:order-1">
            <p className="shrink-0 text-base font-medium text-edu-navy sm:text-lg">
              Still have questions? Ask our team in Dhaka—we&apos;ll reply with clear, practical
              guidance for your situation.
            </p>
            <div className="mt-8 flex min-h-0 flex-1 flex-col gap-4">
              <label htmlFor="faq-free-text" className="sr-only">
                Your question
              </label>
              <textarea
                id="faq-free-text"
                name="message"
                rows={5}
                placeholder="Ask anything about destinations, applications, or visas…"
                className="min-h-35 w-full flex-1 resize-y rounded-3xl border-0 bg-edu-panel px-5 py-4 text-base text-edu-navy shadow-inner ring-1 ring-edu-navy/10 placeholder:text-edu-label focus:outline-none focus:ring-2 focus:ring-edu-navy sm:min-h-36 sm:text-sm lg:min-h-0"
              />
              <button
                type="submit"
                className="min-h-[44px] w-full shrink-0 rounded-full bg-edu-navy px-10 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-edu-navy-dark sm:w-auto sm:self-start"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
