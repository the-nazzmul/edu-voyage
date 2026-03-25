import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/eduvoyage/social-icons";

const cols = [
  {
    title: null,
    links: null as string[] | null,
    text: "EduVoyage is a Dhaka-based study abroad consultancy helping Bangladeshi students choose universities, prepare applications, and secure visas—with honest advice and support from first chat to departure.",
  },
  {
    title: null,
    links: ["About Us", "Features", "Study In", "FAQ", "Contact"],
  },
  {
    title: null,
    links: [
      "Scholarship",
      "Personalized counselling",
      "End to end support",
      "Visa guidance",
    ],
  },
  {
    title: null,
    links: ["Countries", "University", "Courses"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-edu-primary text-edu-navy">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="text-center sm:text-left">
            <a
              href="#"
              className="mb-5 inline-flex items-center justify-center gap-2.5 sm:justify-start"
            >
              <Image
                src="/eduvoyage-logo-black.png"
                alt="EduVoyage"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-2xl object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-edu-navy">
                EduVoyage
              </span>
            </a>
            <p className="text-sm leading-relaxed text-edu-navy/90">
              {cols[0].text}
            </p>
            <div className="mt-6 flex justify-center gap-3 sm:justify-start">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-edu-navy shadow ring-1 ring-edu-navy/10"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-edu-navy shadow ring-1 ring-edu-navy/10"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                aria-label="X"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-edu-navy shadow ring-1 ring-edu-navy/10"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-edu-navy shadow ring-1 ring-edu-navy/10"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {cols.slice(1).map((col, i) => (
            <nav
              key={i}
              className="text-center sm:text-left"
              aria-label={`Footer column ${i + 2}`}
            >
              <ul className="space-y-3 text-sm font-semibold">
                {col.links?.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="text-center text-sm font-semibold leading-relaxed sm:text-left">
            <p>Dhaka, Bangladesh</p>
            <p className="mt-4">+880 1700-000000</p>
            <p className="mt-4">hello@eduvoyage.com</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-edu-navy/15 pt-8 text-center text-xs font-medium text-edu-navy/90 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>Copyright @2025 Eduvoyage</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end sm:gap-8">
            <a href="#" className="hover:underline">
              Language
            </a>
            <a href="#" className="hover:underline">
              Terms of use
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
