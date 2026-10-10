import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EmergencyBanner, FaqSection, FinalCta, VisitSection } from "@/components/Sections";
import { CallButton, WaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Find Trident Dental Clinic at Plot 109, Ahmadu Bello Way, Kado, Abuja. Call 0704 084 8555 or WhatsApp to book.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title={<>Let’s get you <span className="text-gradient italic">smiling.</span></>}
        sub="Call, WhatsApp or visit us at Plot 109, Ahmadu Bello Way, Kado, Abuja — free parking on site."
      >
        <WaButton label="Chat Us On WhatsApp" arrow />
        <CallButton label="Call Now" />
      </PageHero>
      <VisitSection />
      <EmergencyBanner />
      <FaqSection />
      <FinalCta />
    </>
  );
}
