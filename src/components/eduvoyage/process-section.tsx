import Image from "next/image";

/** Student leaf: sharp TL + BR, round TR + BL (default) */
const leafCornersStudent =
  "rounded-tl-none rounded-br-none rounded-tr-[2rem] rounded-bl-[2rem] sm:rounded-tr-[2.75rem] sm:rounded-bl-[2.75rem]";

/** Horizontally mirrored — sharp TR + BL, round TL + BR (step 3) */
const leafCornersStudentMirrored =
  "rounded-tr-none rounded-bl-none rounded-tl-[2rem] rounded-br-[2rem] sm:rounded-tl-[2.75rem] sm:rounded-br-[2.75rem]";

/** Agency card keeps the default leaf direction */
const leafCorners =
  "rounded-tl-none rounded-br-none rounded-tr-[2rem] rounded-bl-[2rem] sm:rounded-tr-[2.75rem] sm:rounded-bl-[2.75rem]";

type ProcessStep = {
  step: number;
  title: string;
  description: string;
  kind: "student" | "agency";
  imageSrc?: string;
  imageAlt: string;
  /** Desktop: false = visual left / text right; true = text left / visual right */
  visualRight: boolean;
};

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Free consultation",
    description:
      "Discuss goals, budget, and destination with counsellors who listen first—then map a path that fits your studies and timeline.",
    kind: "student",
    imageSrc: "/assets/process/process-section-student-1.png",
    imageAlt: "Student planning their study abroad journey",
    visualRight: false,
  },
  {
    step: 2,
    title: "Course & university fit",
    description:
      "Shortlist programs and institutions aligned with your profile, interests, and entry requirements—so every application has a clear purpose.",
    kind: "agency",
    imageSrc: "/assets/process/process-agency.png",
    imageAlt: "EduVoyage team supporting your course and university choices",
    visualRight: true,
  },
  {
    step: 3,
    title: "Applications & visa",
    description:
      "Guided paperwork, submissions, and visa support from people who have walked hundreds of students through the same steps.",
    kind: "student",
    imageSrc: "/assets/process/process-section-student-2.png",
    imageAlt: "Student preparing study abroad applications",
    visualRight: false,
  },
  {
    step: 4,
    title: "Pre-departure",
    description:
      "Orientation, travel tips, and practical help before you fly—so you land ready, not overwhelmed.",
    kind: "agency",
    imageSrc: "/assets/process/process-discussion.png",
    imageAlt: "Students at pre-departure briefing and orientation",
    visualRight: true,
  },
];

const stepOneCallout = "Start with a conversation—no pressure, no obligation.";

function ProcessStepText({
  step,
  title,
  description,
  alignEnd,
}: {
  step: number;
  title: string;
  description: string;
  alignEnd: boolean;
}) {
  return (
    <div className={alignEnd ? "lg:text-right" : ""}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-edu-navy/50">
        Step {step}
      </p>
      <h3 className="font-display text-xl font-semibold tracking-tight text-edu-navy sm:text-2xl">
        {title}
      </h3>
      <p
        className={`mt-3 max-w-md text-sm leading-relaxed text-edu-muted sm:max-w-lg ${alignEnd ? "lg:ml-auto" : ""}`}
      >
        {description}
      </p>
    </div>
  );
}

function ProcessStudentFigure({
  src,
  alt,
  leafMirrored = false,
}: {
  src: string;
  alt: string;
  leafMirrored?: boolean;
}) {
  const corners = leafMirrored
    ? leafCornersStudentMirrored
    : leafCornersStudent;
  return (
    <div className="relative mx-auto w-full max-w-[280px] overflow-visible sm:max-w-[320px]">
      {/* Taller stage: figure reads as leaning through a smaller leaf “opening” */}
      <div className="relative mx-auto h-[min(19.5rem,82vw)] w-full overflow-visible sm:h-[23rem]">
        <div
          aria-hidden
          className={`absolute bottom-0 left-1/2 z-0 h-[46%] w-[min(58%,11.5rem)] max-w-[11rem] -translate-x-1/2 bg-gradient-to-br from-edu-primary via-edu-panel to-edu-panel-deep ${corners} shadow-inner shadow-edu-navy/10 sm:h-[42%] sm:w-[min(56%,12.5rem)] sm:max-w-[12rem]`}
        />
        {/* origin-bottom + scale only: keeps feet flush with leaf bottom (no translateY gap) */}
        <div className="absolute inset-x-0 -top-3 bottom-0 z-10 overflow-visible sm:-top-4">
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 90vw, 320px"
              className="object-contain object-bottom origin-bottom scale-[1.15] sm:scale-[1.18]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessAgencyFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-sm overflow-hidden bg-gradient-to-b from-edu-panel/80 to-edu-panel-deep/50 p-6 shadow-sm ring-1 ring-edu-navy/10 sm:p-8 ${leafCorners}`}
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 90vw, 384px"
          className="object-contain object-center origin-center scale-[1.1] sm:scale-[1.14]"
        />
      </div>
    </div>
  );
}

function ProcessConnector() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-[5%] z-0 hidden h-[90%] w-10 -translate-x-1/2 text-edu-primary/45 lg:block"
      viewBox="0 0 40 380"
      preserveAspectRatio="none"
      aria-hidden
    >
      <circle cx="20" cy="14" r="4" fill="currentColor" />
      <path
        d="M20 24 L20 86"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeDasharray="5 6"
      />
      <circle cx="20" cy="96" r="4" fill="currentColor" />
      <path
        d="M20 106 L20 168"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeDasharray="5 6"
      />
      <circle cx="20" cy="178" r="4" fill="currentColor" />
      <path
        d="M20 188 L20 250"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeDasharray="5 6"
      />
      <circle cx="20" cy="260" r="4" fill="currentColor" />
      <path
        d="M20 270 L20 332"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeDasharray="5 6"
      />
      <path d="M14 342 L26 342 L20 352 Z" fill="currentColor" />
    </svg>
  );
}

function StepVisual({ step }: { step: ProcessStep }) {
  if (step.kind === "student" && step.imageSrc) {
    return (
      <ProcessStudentFigure
        src={step.imageSrc}
        alt={step.imageAlt}
        leafMirrored={step.step === 3}
      />
    );
  }
  if (step.kind === "agency" && step.imageSrc) {
    return <ProcessAgencyFigure src={step.imageSrc} alt={step.imageAlt} />;
  }
  return null;
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-x-clip bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm italic text-edu-label">Process</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            How we work with you
          </h2>
        </div>

        <div className="relative mt-10 space-y-7 sm:mt-12 sm:space-y-8 lg:mt-14 lg:space-y-10">
          <ProcessConnector />

          {steps.map((s, index) => (
            <article key={s.step} className="relative z-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-x-10 xl:gap-x-14">
                <div
                  className={`relative min-w-0 ${s.visualRight ? "lg:order-2" : ""}`}
                >
                  {s.step === 1 ? (
                    <div className="relative">
                      <StepVisual step={s} />
                      <div className="relative z-20 mx-auto mt-2 max-w-sm rounded-2xl bg-edu-panel px-4 py-3 text-center text-xs font-medium leading-relaxed text-edu-navy shadow-md ring-1 ring-edu-navy/10 sm:absolute sm:-bottom-2 sm:right-0 sm:mt-0 sm:max-w-[min(100%,15rem)] sm:rounded-3xl sm:text-left md:-right-2 lg:bottom-4">
                        {stepOneCallout}
                      </div>
                    </div>
                  ) : (
                    <StepVisual step={s} />
                  )}
                </div>
                <div className={`min-w-0 ${s.visualRight ? "lg:order-1" : ""}`}>
                  <ProcessStepText
                    step={s.step}
                    title={s.title}
                    description={s.description}
                    alignEnd={!s.visualRight}
                  />
                </div>
              </div>

              {index < steps.length - 1 ? (
                <div
                  className="mx-auto mt-6 h-px max-w-xs border-0 border-b border-dashed border-edu-primary/30 bg-transparent lg:hidden"
                  aria-hidden
                />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
