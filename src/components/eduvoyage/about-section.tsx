import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-edu-panel to-edu-sky-soft/80 p-5 shadow-xl ring-1 ring-edu-navy/5 sm:rounded-[2.5rem] sm:p-8 md:p-12 lg:p-14">
          <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div
                className="absolute -left-2 -top-2 hidden h-full w-[92%] rounded-tl-[1.5rem] rounded-br-3xl bg-white/70 shadow-inner sm:-left-3 sm:-top-3 sm:block sm:rounded-tl-[2rem]"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-tl-[1.5rem] rounded-br-3xl border-[6px] border-edu-navy bg-edu-navy shadow-lg sm:rounded-tl-[2rem] sm:border-[10px]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80"
                    alt="Student with backpack"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-0 text-center lg:text-left">
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
                  EduVoyage partners with leading universities worldwide to help you choose the
                  right course, prepare your application, and navigate visas with confidence. Our
                  counsellors walk with you from the first conversation to your first day on campus.
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
          <svg
            className="pointer-events-none absolute bottom-6 right-10 hidden h-16 w-28 text-edu-navy/35 lg:block"
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
        </div>
      </div>
    </section>
  );
}
