import Image from "next/image";

export function SuccessStoriesSection() {
  return (
    <section className="overflow-x-clip bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-edu-sky">
            Testimonials
          </p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Success Stories from Our Students
          </h2>
        </div>
        <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-w-0">
            <div
              className="absolute -left-4 bottom-0 top-12 w-[55%] bg-edu-navy"
              style={{ clipPath: "polygon(0 0, 100% 8%, 92% 100%, 0% 92%)" }}
              aria-hidden
            />
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-stretch">
              <div className="relative mx-auto h-64 w-full max-w-xs sm:mx-0 sm:h-72 md:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80"
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 320px"
                />
              </div>
              <div className="relative flex min-w-0 flex-1 items-center">
                <div
                  className="w-full rounded-2xl bg-edu-panel px-5 py-6 shadow-lg ring-1 ring-edu-navy/10 sm:rounded-3xl sm:px-6 sm:py-8 md:[transform:skewX(-4deg)]"
                >
                  <div className="md:[transform:skewX(4deg)]">
                    <h3 className="text-lg font-bold text-edu-navy sm:text-xl">
                      From Dhaka to Melbourne
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-edu-muted">
                      &ldquo;EduVoyage helped me align my grades and IELTS with courses that fit my
                      career plan. The application timeline was clear and I never missed a
                      deadline.&rdquo; — Rafi, postgraduate offer in Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 rounded-full border-4 border-edu-navy/30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #162a6b 0, #162a6b 2px, transparent 2px, transparent 6px)",
              }}
              aria-hidden
            />
          </div>
          <div className="relative flex min-w-0 items-center">
            <div className="absolute inset-y-8 right-4 hidden w-1/3 lg:block" aria-hidden>
              <div className="flex h-full flex-col items-center justify-center gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="block h-1 rounded-full bg-edu-navy"
                    style={{ width: `${40 + (i % 5) * 12}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10 w-full">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -right-2 -top-2 h-full w-full rounded-full border border-edu-navy/20" />
                <div className="relative overflow-hidden rounded-full bg-edu-panel p-2 shadow-xl">
                  <div className="relative aspect-square overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 80vw, 400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
