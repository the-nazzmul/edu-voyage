import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/eduvoyage/site-header";
import { SiteFooter } from "@/components/eduvoyage/site-footer";
import { getSiteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteName = "EduVoyage";

const siteDescription =
  "Study abroad consultancy in Dhaka, Bangladesh—university guidance, course and university fit, applications, visa support, and pre-departure orientation for students planning overseas education.";

const siteUrl = getSiteUrl();
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${siteName} — Study Abroad Consultancy`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "study abroad Bangladesh",
    "study abroad consultancy Dhaka",
    "university applications Bangladesh",
    "student visa guidance",
    "international education counselling",
    "EduVoyage",
    "overseas education",
    "Gulshan",
  ],
  authors: [{ name: siteName, url: metadataBase.href }],
  creator: siteName,
  publisher: siteName,
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    alternateLocale: ["en_US"],
    url: metadataBase.href,
    siteName,
    title: `${siteName} — Study Abroad Consultancy`,
    description: siteDescription,
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} — study abroad consultancy, Dhaka: university guidance, applications, and visa support`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Study Abroad Consultancy`,
    description: siteDescription,
    images: ["/meta-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#73d7fe" },
    { media: "(prefers-color-scheme: dark)", color: "#162a6b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const origin = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${origin}/#organization`,
    name: siteName,
    description: siteDescription,
    url: origin,
    logo: `${origin}/eduvoyage-logo-black.png`,
    image: `${origin}/meta-image.jpg`,
    slogan: "Study Abroad Consultancy",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
      addressCountry: "BD",
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    knowsAbout: [
      "University admissions",
      "Student visa",
      "Study abroad counselling",
      "International education",
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-dvh min-h-[100svh] bg-white text-edu-navy pb-[env(safe-area-inset-bottom)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
