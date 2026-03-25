import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/eduvoyage/social-icons";
import Image from "next/image";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-white pb-12 sm:scroll-mt-24 sm:pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-edu-navy sm:text-3xl md:text-4xl">
          Contact Us
        </h2>
        <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-edu-panel to-edu-sky-soft p-5 shadow-xl ring-1 ring-edu-navy/10 sm:mt-10 sm:rounded-[2.5rem] sm:p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-edu-navy sm:text-2xl">
                Get In Touch
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-edu-muted">
                Visit our office in Dhaka or reach out by phone or email. Tell
                us your goals and we&apos;ll help you plan your next
                step—whether it&apos;s choosing a country, shortlisting
                universities, or starting your visa paperwork.
              </p>
              <ul className="mt-6 space-y-4 text-sm font-semibold text-edu-navy sm:mt-8 sm:space-y-5">
                <li className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-edu-navy text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z"
                        strokeWidth="1.6"
                      />
                      <circle cx="12" cy="10" r="2.5" strokeWidth="1.6" />
                    </svg>
                  </span>
                  Dhaka, Bangladesh
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-edu-navy text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-.7a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  +880 1700-000000
                </li>
                <li className="flex min-w-0 items-start gap-3 break-all">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-edu-navy text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeWidth="1.6"
                      />
                      <path d="m3 7 9 6 9-6" strokeWidth="1.6" />
                    </svg>
                  </span>
                  hello@eduvoyage.com
                </li>
              </ul>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-edu-navy/10">
                <Image
                  src="https://images.unsplash.com/photo-1626285861696-9f73bf068148?auto=format&fit=crop&w=1200&q=80"
                  alt="Dhaka city"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="min-w-0 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-edu-navy/10 sm:rounded-[2rem] sm:p-8">
              <h3 className="text-lg font-bold text-edu-navy sm:text-xl">
                Send a Message
              </h3>
              <form
                className="mt-6 space-y-6 sm:mt-8 sm:space-y-8"
                action="#"
                method="post"
              >
                <div>
                  <label
                    className="text-sm font-semibold text-edu-navy"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="mt-2 min-h-[44px] w-full border-0 border-b-2 border-edu-navy bg-transparent py-2 text-base text-edu-navy focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-semibold text-edu-navy"
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 min-h-[44px] w-full border-0 border-b-2 border-edu-navy bg-transparent py-2 text-base text-edu-navy focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-semibold text-edu-navy"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 min-h-[44px] w-full border-0 border-b-2 border-edu-navy bg-transparent py-2 text-base text-edu-navy focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-edu-navy py-3 text-sm font-semibold text-white shadow-md transition hover:bg-edu-navy-dark sm:w-auto sm:px-12"
                >
                  Submit
                </button>
              </form>
              <p className="mt-8 text-sm font-semibold text-edu-navy sm:mt-10">
                Follow us :
              </p>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-6">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full bg-edu-navy text-white transition hover:bg-edu-navy-dark"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-full bg-edu-navy text-white transition hover:bg-edu-navy-dark"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com"
                  aria-label="X"
                  className="grid h-11 w-11 place-items-center rounded-full bg-edu-navy text-white transition hover:bg-edu-navy-dark"
                >
                  <XIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-full bg-edu-navy text-white transition hover:bg-edu-navy-dark"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
