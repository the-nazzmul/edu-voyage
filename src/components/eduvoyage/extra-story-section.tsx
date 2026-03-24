import Image from "next/image";

export function ExtraStorySection() {
  return (
    <section className="border-t border-edu-navy/5 bg-white py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80"
              alt=""
              width={420}
              height={520}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="relative z-10 mx-auto h-auto w-full max-h-[min(70vh,520px)] object-contain"
            />
          </div>
          <div className="relative w-full min-w-0 max-w-xl flex-1">
            <div
              className="rounded-2xl bg-edu-panel px-5 py-8 shadow-lg ring-1 ring-edu-navy/10 sm:rounded-3xl sm:px-8 sm:py-10 md:[transform:skewX(-6deg)]"
            >
              <div className="md:[transform:skewX(6deg)]">
                <h3 className="text-xl font-bold text-edu-navy sm:text-2xl">Lorem Ipsum</h3>
                <p className="mt-3 text-sm leading-relaxed text-edu-muted">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div
              className="pointer-events-none absolute -right-4 top-1/2 hidden h-40 w-40 -translate-y-1/2 lg:block"
              aria-hidden
            >
              <svg viewBox="0 0 160 160" className="h-full w-full text-edu-navy">
                {Array.from({ length: 18 }).map((_, i) => (
                  <line
                    key={i}
                    x1="20"
                    y1={10 + i * 8}
                    x2={40 + (i % 5) * 22}
                    y2={10 + i * 8}
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
