import Image from "next/image";

const cards = [
  {
    title: "Scholarship",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "End to end Support",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Personalized counselling",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Visa Guidance",
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
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
        <div className="relative mt-8 min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-edu-panel to-edu-sky-soft/80 p-4 shadow-inner ring-1 ring-edu-navy/5 sm:mt-12 sm:rounded-[2.5rem] sm:p-6 md:p-8">
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=60"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-15"
            sizes="100vw"
          />
          <div className="relative grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {cards.map((c) => (
              <article
                key={c.title}
                className="group relative aspect-[3/5] min-h-[200px] overflow-hidden rounded-2xl bg-edu-navy shadow-lg sm:min-h-0 sm:rounded-3xl"
              >
                <Image
                  src={c.src}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-center sm:p-4">
                  <p className="text-xs font-bold text-white sm:text-sm">{c.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
