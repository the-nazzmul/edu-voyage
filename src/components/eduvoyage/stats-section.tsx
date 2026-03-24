const stats = [
  { value: "5000+", label: "Student Visa", icon: "passport", pos: "bottom" as const },
  { value: "75+", label: "Universities", icon: "building", pos: "top" as const },
  { value: "30+", label: "Countries", icon: "globe", pos: "bottom" as const },
  { value: "300+", label: "Courses", icon: "cap", pos: "top" as const },
];

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5 text-edu-navy";
  switch (name) {
    case "passport":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth="1.6" />
          <circle cx="12" cy="11" r="3" strokeWidth="1.6" />
          <path d="M8 17h8" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "building":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 20V10l8-4 8 4v10" strokeWidth="1.6" />
          <path d="M9 20v-6h6v6" strokeWidth="1.6" />
          <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
          <path d="M3 12h18M12 3a16 16 0 0 0 0 18 16 16 0 0 0 0-18Z" strokeWidth="1.6" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 3 4 7v2c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V7l-8-4Z" strokeWidth="1.6" />
        </svg>
      );
  }
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-w-0">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-12 -translate-y-1/2 text-edu-navy lg:block"
            viewBox="0 0 1200 48"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 28 C 120 8, 240 40, 360 22 S 600 6, 720 26 960 42, 1080 18 1200 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-8 md:gap-8 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-2 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-red-500">
                <path
                  d="M8 20 L32 18 L28 28 Z"
                  fill="currentColor"
                  fillOpacity="0.9"
                />
              </svg>
            </div>
            {stats.map((s) => (
              <div key={s.label} className="relative flex min-w-0 flex-col items-center text-center">
                <div className="relative aspect-square w-[5.25rem] max-w-full rounded-full bg-white shadow-[0_0_0_3px_white,0_0_0_6px_#162a6b] sm:w-24 sm:shadow-[0_0_0_4px_white,0_0_0_8px_#162a6b] md:w-28">
                  <div className="flex h-full flex-col items-center justify-center px-1.5 sm:px-2">
                    <span
                      className={`font-extrabold text-edu-navy ${s.pos === "top" ? "order-2 mt-1 text-xl sm:text-2xl md:text-3xl" : "order-1 text-xl sm:text-2xl md:text-3xl"}`}
                    >
                      {s.value}
                    </span>
                    <span
                      className={`max-w-[6.5rem] font-semibold leading-tight text-edu-navy sm:max-w-none ${s.pos === "top" ? "order-1 text-[9px] uppercase tracking-wide sm:text-[10px]" : "order-2 mt-1 text-[9px] uppercase tracking-wide sm:text-[10px]"}`}
                    >
                      {s.label}
                    </span>
                  </div>
                  <div
                    className={`absolute left-1/2 flex -translate-x-1/2 ${s.pos === "top" ? "-top-2.5 sm:-top-3" : "-bottom-2.5 sm:-bottom-3"}`}
                  >
                    <span className="rounded-full bg-white p-0.5 shadow ring-1 ring-edu-navy/10 sm:p-1">
                      <Icon name={s.icon} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
