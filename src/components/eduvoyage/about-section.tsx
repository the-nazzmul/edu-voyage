import Image from "next/image";

/** Sky card corner radius — shared by outer shell and clipped bg layer */
const cardRadius = "rounded-3xl sm:rounded-[2.5rem]";

/** Opposite corners: large top-right + bottom-left; sharp top-left + bottom-right */
const frameCorners =
  "rounded-tl-none rounded-br-none rounded-tr-[2rem] rounded-bl-[2rem] sm:rounded-tr-[2.75rem] sm:rounded-bl-[2.75rem] lg:rounded-tr-[3.5rem] lg:rounded-bl-[3.5rem]";

/** Equal offset between back (white) and front (navy): same distance left and down */
const frameBackOffset = "-translate-x-3 translate-y-3 lg:-translate-x-4 lg:translate-y-4";

function AboutCardBackground() {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${cardRadius}`}
      aria-hidden
    >
      <Image
        src="/assets/about-bg.jpg"
        alt=""
        fill
        className="object-cover object-top"
        sizes="(max-width: 1152px) 100vw, 1152px"
      />
    </div>
  );
}

function AboutPlaneGraphic() {
  return (
    <svg
      className="pointer-events-none absolute bottom-6 right-10 z-10 hidden h-16 w-28 text-edu-navy/35 lg:block"
      viewBox="0 0 120 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 48 C 30 8, 70 4, 112 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <path d="M104 14 118 22 108 26Z" fill="currentColor" />
    </svg>
  );
}

function AboutStudentFrame() {
  return (
    <div className="relative w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] w-full">
        <div
          aria-hidden
          className={`absolute inset-0 z-0 border border-edu-navy/20 bg-white/90 shadow-sm ${frameCorners} ${frameBackOffset}`}
        />
        <div
          className={`absolute inset-0 z-[1] overflow-hidden bg-edu-navy shadow-lg ${frameCorners}`}
        >
          <Image
            src="/assets/about-section-student.png"
            alt="Student with backpack"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 420px"
          />
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-x-clip bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-visible p-5 shadow-xl ring-1 ring-edu-navy/5 sm:p-8 md:p-12 lg:p-14 ${cardRadius}`}
        >
          <AboutCardBackground />

          <div className="relative z-10 grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="hidden lg:block lg:-translate-x-[min(20%,6.5rem)] xl:-translate-x-[min(24%,8rem)]">
              <AboutStudentFrame />
            </div>
            <div className="min-w-0 text-center lg:pl-2 lg:text-left xl:pl-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-edu-navy sm:text-xs">
                Welcome to our agency
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-edu-navy sm:text-4xl md:text-5xl">
                About Us
              </h2>
              <div className="mt-6 space-y-4 text-edu-muted">
                <p className="text-base font-bold text-edu-navy sm:text-lg">
                  Best Study Abroad Consultants in Kochi, Kerala!
                </p>
                <p className="text-sm leading-relaxed sm:text-base">
                  EduVoyage partners with leading universities worldwide to help
                  you choose the right course, prepare your application, and
                  navigate visas with confidence. Our counsellors walk with you
                  from the first conversation to your first day on campus.
                </p>
              </div>
              <a
                href="#features"
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-edu-navy px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-edu-navy-dark"
              >
                Read More
              </a>
            </div>
          </div>

          <AboutPlaneGraphic />
        </div>
      </div>
    </section>
  );
}
