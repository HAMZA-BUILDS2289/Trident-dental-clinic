import { Hero } from "@/components/Hero";
import {
  AboutSection,
  BlogPreview,
  EmergencyBanner,
  FaqSection,
  FinalCta,
  HowItWorks,
  MeetTeamSection,
  PricingSection,
  ReviewsSection,
  ServicesSection,
  SmileGallerySection,
  StatsBand,
  TrustMarquee,
  VideoTourSection,
  VisitSection,
  WhySection,
} from "@/components/Sections";
import { CtaBand } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsBand />
      <CtaBand
        title="Ready for a brighter, healthier smile?"
        text="Message us on WhatsApp and we’ll find a time that suits you."
      />
      <AboutSection />
      <WhySection />
      <CtaBand
        title="Premium dental care, without the dread."
        text="A calm, beautiful clinic and a team that listens."
        message="Hello Trident Dental Clinic, I want to book an appointment. I'd like a gentle, comfortable visit."
        label="See Why We Are 4.7 Stars"
      />
      <ServicesSection />
      <SmileGallerySection />
      <CtaBand
        title="Whitening, veneers, braces, implants — all in one place."
        text="Tell us what you’d like to change and we’ll build a plan around it."
        message="Hello Trident Dental Clinic, I want to book an appointment to discuss a treatment plan."
      />
      <MeetTeamSection />
      <VideoTourSection />
      <CtaBand
        title="Join our happy 4.7★ patients."
        text="Your first step is one WhatsApp message away."
        label="Join Our Happy Smiles"
      />
      <ReviewsSection />
      <HowItWorks />
      <CtaBand
        title="Free parking. Wheelchair accessible. Friendly faces."
        text="Everything you need for an easy, comfortable visit."
      />
      <EmergencyBanner />
      <PricingSection />
      <BlogPreview />
      <CtaBand title="Questions before you book?" text="Chat with us — we’re happy to help." label="Chat Us On WhatsApp" />
      <VisitSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
