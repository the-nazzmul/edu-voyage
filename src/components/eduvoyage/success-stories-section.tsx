"use client";

import Image from "next/image";
import { useId } from "react";

/** Slanted top edge, flat bottom — shared by story 1 and 3 image columns. */
const SUCCESS_NAVY_SLAB_CLIP =
  "polygon(0 0, 100% 8%, 100% 100%, 0% 100%)" as const;

type Story = {
  src: string;
  width: number;
  height: number;
  imageAlt: string;
  title: string;
  body: string;
  attribution?: string;
};

const stories: Story[] = [
  {
    src: "/assets/success/success-student-1.png",
    width: 667,
    height: 1000,
    imageAlt: "Rafi, EduVoyage student smiling in graduation attire",
    title: "From Dhaka to Melbourne",
    body: "“EduVoyage helped me align my grades and IELTS with courses that fit my career plan. The application timeline was clear and I never missed a deadline.” — Rafi, postgraduate offer in Australia",
  },
  {
    src: "/assets/success/success-student-2.png",
    width: 707,
    height: 1000,
    imageAlt: "Tanvir Rahman, EduVoyage student in formal wear",
    title: "A clear path to the UK",
    body: "“Shortlisting, SOP edits, and visa prep were handled in one rhythm. I always knew the next step.” — Tanvir Rahman, MSc offer in the United Kingdom",
  },
  {
    src: "/assets/success/success-student-3.png",
    width: 667,
    height: 1000,
    imageAlt: "Imran Hossain, EduVoyage student in academic regalia",
    title: "Local team, global reach",
    body: "We work face-to-face with students and families in Dhaka, so expectations stay realistic—on costs, timelines, and admission chances—while we chase the best outcomes abroad together.",
    attribution: "Imran Hossain",
  },
];

function NavyParallelogramSlab({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute bg-edu-navy ${className}`}
      style={{ clipPath: SUCCESS_NAVY_SLAB_CLIP }}
      aria-hidden
    />
  );
}

function StripedCircle({ className, size = 64 }: { className?: string; size?: number }) {
  const clipId = `sc-${useId().replace(/:/g, "")}`;

  const lines = Array.from({ length: 14 }, (_, i) => {
    const y = 8 + i * 6;
    const opacity = 0.35 + (i % 4) * 0.12;
    return (
      <line
        key={i}
        x1="4"
        x2="60"
        y1={y}
        y2={y}
        stroke="currentColor"
        strokeWidth="2.25"
        strokeOpacity={opacity}
      />
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`pointer-events-none text-edu-navy ${className ?? ""}`}
      aria-hidden
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>{lines}</g>
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.28}
        strokeWidth="2.5"
      />
    </svg>
  );
}

function DoubleLineAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 72"
      className={`pointer-events-none text-edu-navy ${className ?? ""}`}
      aria-hidden
    >
      <line x1="4" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line
        x1="4"
        y1="36"
        x2="36"
        y2="36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity={0.75}
      />
    </svg>
  );
}

function SuccessBarsGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 112"
      className={`pointer-events-none text-edu-navy ${className ?? ""}`}
      aria-hidden
    >
      {Array.from({ length: 14 }, (_, i) => {
        const y = 6 + i * 7;
        const w = 24 + ((i * 7) % 5) * 14 + Math.floor(i / 3) * 4;
        const x2 = Math.min(112, 8 + w);
        return (
          <line
            key={i}
            x1="8"
            y1={y}
            x2={x2}
            y2={y}
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            opacity={0.35 + (i % 3) * 0.15}
          />
        );
      })}
    </svg>
  );
}

function SuccessSplitCard({ story }: { story: Story }) {
  return (
    <div className="relative min-w-0">
      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-5">
        <div className="relative mx-auto w-full max-w-60 shrink-0 sm:mx-0 sm:max-w-54 md:max-w-60">
          <NavyParallelogramSlab className="-left-1 right-1 bottom-0 top-9 sm:-left-3 sm:right-0 sm:top-11" />
          <StripedCircle className="absolute -top-1 right-0 z-1 opacity-80 sm:-right-1 sm:top-2" size={52} />
          <StripedCircle
            className="absolute bottom-2 left-0 z-1 opacity-85 max-sm:bottom-1 max-sm:left-1"
            size={60}
          />
          <div className="relative z-2 flex min-h-58 items-end justify-center px-1 pt-10 pb-0 sm:min-h-64 md:min-h-70">
            <Image
              src={story.src}
              alt={story.imageAlt}
              width={story.width}
              height={story.height}
              className="h-auto w-full max-h-[min(15.5rem,48vw)] object-contain object-bottom sm:max-h-68 md:max-h-74"
              sizes="(max-width: 640px) 70vw, 240px"
            />
          </div>
        </div>
        <div className="relative z-20 flex min-w-0 flex-1 items-center">
          <div className="w-full rounded-2xl bg-edu-panel px-5 py-6 shadow-lg ring-1 ring-edu-navy/10 sm:rounded-3xl sm:px-6 sm:py-8 md:transform-[skewX(-4deg)]">
            <div className="md:transform-[skewX(4deg)]">
              <h3 className="text-lg font-bold text-edu-navy sm:text-xl">{story.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-edu-muted">{story.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessCirclePortrait({ story }: { story: Story }) {
  return (
    <div className="relative flex min-w-0 items-center justify-center lg:justify-end">
      <DoubleLineAccent className="absolute left-0 top-1/2 z-10 hidden h-24 w-12 -translate-y-1/2 lg:block" />
      <div className="relative z-1 w-full max-w-sm lg:pr-6">
        <div className="relative mx-auto max-w-[18rem]">
          <div
            className="pointer-events-none absolute -right-1 -top-1 aspect-square w-[calc(100%+0.5rem)] rounded-full border border-edu-navy/25"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-full bg-edu-panel shadow-xl ring-1 ring-edu-navy/10">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src={story.src}
                alt={story.imageAlt}
                width={story.width}
                height={story.height}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 288px"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-md text-center lg:text-left">
          <h3 className="text-lg font-bold text-edu-navy sm:text-xl">{story.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-edu-muted">{story.body}</p>
        </div>
      </div>
    </div>
  );
}

function SuccessWideCard({ story }: { story: Story }) {
  return (
    <div className="relative flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-stretch lg:gap-12">
      <div className="relative mx-auto w-full max-w-xs shrink-0 sm:max-w-sm lg:mx-0 lg:w-[38%] lg:max-w-none">
        <NavyParallelogramSlab className="-left-1 right-1 bottom-0 top-9 sm:-left-2 sm:right-0 sm:top-11 lg:top-12" />
        <div className="relative z-2 aspect-667/1000 w-full max-h-[min(72vh,520px)] lg:max-h-none lg:h-full lg:min-h-80">
          <Image
            src={story.src}
            alt={story.imageAlt}
            width={story.width}
            height={story.height}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>
      </div>
      <div className="relative w-full min-w-0 flex-1">
        <div className="rounded-2xl bg-edu-panel px-5 py-8 shadow-lg ring-1 ring-edu-navy/10 sm:rounded-3xl sm:px-8 sm:py-10 md:transform-[skewX(-4deg)]">
          <div className="md:transform-[skewX(4deg)]">
            <h3 className="text-xl font-bold text-edu-navy sm:text-2xl">{story.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-edu-muted">{story.body}</p>
            {story.attribution ? (
              <p className="mt-4 text-sm font-semibold text-edu-navy">— {story.attribution}</p>
            ) : null}
          </div>
        </div>
        <div
          className="pointer-events-none absolute -right-2 top-1/2 hidden h-36 w-32 -translate-y-1/2 sm:block lg:-right-2"
          aria-hidden
        >
          <SuccessBarsGraphic className="h-full w-full opacity-90" />
        </div>
      </div>
    </div>
  );
}

export function SuccessStoriesSection() {
  const [s1, s2, s3] = stories;

  return (
    <section className="overflow-x-clip bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-edu-sky">Testimonials</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Success Stories from Our Students
          </h2>
        </div>

        <div className="mt-10 space-y-12 sm:mt-16 sm:space-y-14 lg:space-y-16">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <SuccessSplitCard story={s1} />
            <SuccessCirclePortrait story={s2} />
          </div>
          <SuccessWideCard story={s3} />
        </div>
      </div>
    </section>
  );
}
