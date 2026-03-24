import Image from "next/image";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative scroll-mt-20 overflow-hidden bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ff7f50]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-edu-sky/40 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-edu-sky">
            Reviews
          </p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Some valuable feedbacks from our students
          </h2>
        </div>
        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-16">
          <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative space-y-5 sm:space-y-6">
              <article className="relative z-10 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-edu-navy/10 sm:rounded-3xl sm:p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <p className="font-bold text-edu-navy">Student 1</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-edu-muted">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className="mt-2 text-sm text-amber-400">★★★★★</p>
              </article>
              <article className="relative z-0 -mt-2 ml-0 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-edu-navy/10 sm:-mt-4 sm:ml-6 sm:rounded-3xl lg:ml-12">
                <p className="font-bold text-edu-navy">Student 2</p>
                <p className="mt-2 text-sm leading-relaxed text-edu-muted">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className="mt-2 text-sm text-amber-400">★★★★★</p>
              </article>
            </div>
            <article className="relative flex min-w-0 flex-col justify-center rounded-2xl bg-white p-5 shadow-xl ring-1 ring-edu-navy/10 sm:rounded-3xl sm:p-6 lg:min-h-[280px]">
              <div className="flex flex-col gap-4 sm:flex-row-reverse sm:items-start md:items-center">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt=""
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold text-edu-navy">Student 3</p>
                  <p className="mt-3 text-sm leading-relaxed text-edu-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="mt-3 text-sm text-amber-400">★★★★★</p>
                </div>
              </div>
            </article>
          </div>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl bg-edu-navy px-5 py-3 text-white shadow-md sm:px-7">
              <span className="text-base font-bold sm:text-lg">4.5/5.0</span>
              <span className="shrink-0 text-amber-300">★★★★★</span>
              <span className="basis-full text-center text-[11px] font-medium opacity-90 sm:basis-auto sm:text-left sm:text-xs">
                Based on 2345 ratings
              </span>
            </div>
            <div className="hidden h-10 w-px shrink-0 bg-edu-navy/20 sm:block" aria-hidden />
            <a
              href="#reviews"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-edu-navy bg-white px-8 py-3 text-center text-sm font-semibold text-edu-navy shadow-sm transition hover:bg-edu-panel/80"
            >
              View Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
