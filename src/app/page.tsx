import { AboutSection } from "@/components/eduvoyage/about-section";
import { ContactSection } from "@/components/eduvoyage/contact-section";
import { FaqSection } from "@/components/eduvoyage/faq-section";
import { FeaturesSection } from "@/components/eduvoyage/features-section";
import { Hero } from "@/components/eduvoyage/hero";
import { ProcessSection } from "@/components/eduvoyage/process-section";
import { ReviewsSection } from "@/components/eduvoyage/reviews-section";
import { StatsSection } from "@/components/eduvoyage/stats-section";
import { StudyInSection } from "@/components/eduvoyage/study-in-section";
import { SuccessStoriesSection } from "@/components/eduvoyage/success-stories-section";

export default function Home() {
  return (
    <div className="min-w-0">
      <Hero />
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <StudyInSection />
      <ReviewsSection />
      <SuccessStoriesSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
