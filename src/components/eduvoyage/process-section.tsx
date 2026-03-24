import Image from "next/image";

const blurbs = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
  },
  {
    text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    text: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="relative grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0 space-y-8 sm:space-y-10">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-none"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 85%, 75% 100%, 0% 90%, 0% 20%)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="relative z-10 mt-4 rounded-2xl bg-edu-panel px-4 py-3 text-xs font-medium leading-relaxed text-edu-muted shadow-md ring-1 ring-edu-navy/10 sm:absolute sm:bottom-8 sm:right-0 sm:mt-0 sm:max-w-[min(100%,17rem)] sm:rounded-3xl md:-right-4 lg:max-w-[18rem]">
                {blurbs[0].text}
              </div>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-edu-muted lg:pl-8">
              {blurbs[2].text}
            </p>
          </div>
          <div className="min-w-0 space-y-8 sm:space-y-10 lg:pt-12">
            <p className="max-w-lg text-sm leading-relaxed text-edu-muted">
              {blurbs[1].text}
            </p>
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div
                className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-edu-panel"
                style={{
                  clipPath: "ellipse(90% 70% at 60% 40%)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] min-h-[12rem] overflow-hidden rounded-2xl bg-edu-panel sm:rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Team collaboration illustration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <p className="text-sm leading-relaxed text-edu-muted">{blurbs[3].text}</p>
            </div>
          </div>
        </div>
        <svg
          className="pointer-events-none absolute left-1/2 top-24 hidden h-[70%] w-32 -translate-x-1/2 text-edu-sky lg:block"
          viewBox="0 0 40 400"
          aria-hidden
        >
          <path
            d="M20 0 Q 40 100 20 200 T 20 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
        </svg>
      </div>
    </section>
  );
}
