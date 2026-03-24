import Image from "next/image";

const cards = [
  {
    title: "Scholarship",
    src: "/assets/features/features-student-laughing.jpg",
  },
  {
    title: "End to end Support",
    src: "/assets/features/features-end-to-end-support.jpg",
  },
  {
    title: "Personalized counselling",
    src: "/assets/features/features-counseling.jpg",
  },
  {
    title: "Visa Guidance",
    src: "/assets/features/feature-visa-guidance.jpg",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm italic text-edu-label">Features</p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
            Our impressive features
          </h2>
        </div>
        <div className="relative mt-8 min-w-0 overflow-hidden rounded-3xl shadow-inner ring-1 ring-edu-navy/5 sm:mt-12 sm:rounded-[2.5rem]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Image
              src="/assets/features/features-background.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-45"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-edu-panel/80 via-white/45 to-edu-sky-soft/70" />
          </div>
          <div className="relative z-10 grid min-w-0 gap-4 p-7 px-6 sm:grid-cols-2 sm:gap-5 sm:p-8 md:gap-6 md:p-10 lg:grid-cols-4 lg:p-12">
            {cards.map((c) => (
              <article
                key={c.title}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-edu-navy shadow-lg sm:rounded-3xl"
              >
                <Image
                  src={c.src}
                  alt=""
                  fill
                  className="z-0 object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Bottom scrim: radial gives side fade without mask (mask was hiding layer in some browsers) */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(52%,10.5rem)] sm:h-[min(48%,9.5rem)]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.24) 38%, transparent 100%), radial-gradient(ellipse 135% 100% at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 64%)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] flex justify-center px-4 pb-5 pt-7 text-center sm:px-5 sm:pb-6 sm:pt-9 md:px-6 md:pb-7 md:pt-10">
                  <p className="max-w-[95%] text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:max-w-none sm:text-sm md:text-base">
                    {c.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
