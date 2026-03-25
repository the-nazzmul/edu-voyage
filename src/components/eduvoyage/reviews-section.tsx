import Image from "next/image";

type ReviewEntry = {
  name: string;
  quote: string;
  src: string;
  imageAlt: string;
};

const reviews: ReviewEntry[] = [
  {
    name: "Rafi Hassan",
    quote:
      "The team in Dhaka broke down every visa step and reviewed my SOP until it felt honest and strong. I got my UK offer without feeling lost in the paperwork.",
    src: "/assets/review/review-student-1.jpg",
    imageAlt: "Rafi Hassan, student testimonial",
  },
  {
    name: "Fahad Khan",
    quote:
      "I was not sure which country fit my budget. They compared options clearly and helped me shortlist universities that actually matched my profile.",
    src: "/assets/review/review-student-2.jpg",
    imageAlt: "Fahad Khan, student testimonial",
  },
  {
    name: "Saad Ahmed",
    quote:
      "From document checks to the embassy interview, someone was always reachable. Leaving for Canada felt prepared, not rushed.",
    src: "/assets/review/review-student-3.jpg",
    imageAlt: "Saad Ahmed, student testimonial",
  },
];

/** Center colorful “spotlight”; edges fade to white (page background). */
const reviewsSectionRadialBg = [
  "radial-gradient(circle at 50% 42%, rgb(255 127 80 / 0.1) 0%, transparent 32%)",
  "radial-gradient(circle min(85vw, 48rem) at 50% 40%, rgb(115 215 254 / 0.5) 0%, rgb(184 238 249 / 0.38) 32%, rgb(217 247 254 / 0.2) 52%, rgb(255 255 255 / 0) 72%)",
].join(", ");

function ReviewPopoutPhoto({
  src,
  alt,
  align,
}: {
  src: string;
  alt: string;
  align: "left" | "right";
}) {
  const edge = align === "left" ? "left-0" : "right-0";
  return (
    <div
      className={`pointer-events-none absolute bottom-0 ${edge} z-10 aspect-square w-[5.75rem] overflow-hidden rounded-2xl shadow-lg ring-1 ring-edu-navy/10 sm:w-[6.75rem]`}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 92px, 108px"
        />
      </div>
    </div>
  );
}

function RatingBadge() {
  return (
    <div className="inline-flex h-12 max-w-full shrink-0 flex-nowrap items-center justify-center gap-x-2 rounded-full bg-edu-navy px-5 text-white shadow-lg ring-1 ring-edu-navy/10 sm:gap-x-3 sm:px-7">
      <span className="text-base font-bold leading-none sm:text-lg">4.5/5.0</span>
      <span className="shrink-0 text-amber-300 leading-none">★★★★★</span>
      <span className="whitespace-nowrap text-[10px] font-medium leading-none text-white/90 sm:text-xs">
        Based on 2345 ratings
      </span>
    </div>
  );
}

function ReviewDotGrid() {
  return (
    <div
      className="hidden shrink-0 grid-cols-5 gap-x-2 gap-y-2 sm:grid"
      aria-hidden
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-edu-navy/35" />
      ))}
    </div>
  );
}

function ReviewCardCompact({
  name,
  quote,
  src,
  imageAlt,
  offset,
}: ReviewEntry & { offset?: boolean }) {
  return (
    <article
      className={`relative isolate overflow-visible pt-7 sm:pt-8 ${offset ? "z-0 sm:-mt-4 sm:ml-6 lg:ml-12" : "z-10"}`}
    >
      <div className="relative min-h-0 overflow-visible rounded-2xl bg-white p-5 pl-[6.75rem] shadow-xl ring-1 ring-edu-navy/10 sm:rounded-3xl sm:p-6 sm:pl-[7.75rem]">
        <p className="font-bold text-edu-navy">{name}</p>
        <p className="mt-3 text-sm italic leading-relaxed text-edu-muted">{quote}</p>
        <p className="mt-3 text-sm text-amber-500">★★★★★</p>
        <ReviewPopoutPhoto src={src} alt={imageAlt} align="left" />
      </div>
    </article>
  );
}

function ReviewCardFeatured({ name, quote, src, imageAlt }: ReviewEntry) {
  return (
    <article className="relative isolate min-h-0 overflow-visible pt-7 sm:pt-8 lg:min-h-[17rem]">
      <div className="relative w-full min-h-0 overflow-visible rounded-2xl bg-white p-5 pb-6 pr-[6.75rem] shadow-xl ring-1 ring-edu-navy/10 sm:rounded-3xl sm:p-6 sm:pr-[7.75rem] lg:flex lg:min-h-[inherit] lg:items-center">
        <div className="min-w-0 flex-1 lg:pr-2">
          <p className="font-bold text-edu-navy">{name}</p>
          <p className="mt-3 text-sm italic leading-relaxed text-edu-muted sm:text-base">{quote}</p>
          <p className="mt-3 text-sm text-amber-500">★★★★★</p>
        </div>
        <ReviewPopoutPhoto src={src} alt={imageAlt} align="right" />
      </div>
    </article>
  );
}

export function ReviewsSection() {
  const [r1, r2, r3] = reviews;

  return (
    <section
      id="reviews"
      className="relative scroll-mt-20 overflow-x-clip bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: reviewsSectionRadialBg }}
      />

      <div className="relative mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-edu-navy/70">Reviews</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Some valuable feedbacks from our students
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-16">
          <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative space-y-5 sm:space-y-6">
              <ReviewCardCompact {...r1} />
              <ReviewCardCompact {...r2} offset />
            </div>
            <ReviewCardFeatured {...r3} />
          </div>

          <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:mt-12">
            <RatingBadge />
            <div className="hidden h-12 w-px shrink-0 bg-edu-navy/15 sm:block" aria-hidden />
            <a
              href="#reviews"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border-2 border-edu-navy bg-edu-navy px-8 text-center text-sm font-semibold leading-none text-white shadow-sm transition hover:bg-edu-navy-dark"
            >
              View Reviews
            </a>
            <ReviewDotGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
