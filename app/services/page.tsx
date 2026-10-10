import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/Sections";
import { CallButton, CtaBand, WaButton } from "@/components/ui";
import { FaqSection, FinalCta } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Dental Services in Abuja",
  description:
    "Teeth whitening, scaling & polishing, braces, implants, root canal, veneers, pediatric dentistry and emergency care at Trident Dental Clinic, Abuja.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        crumbs={[{ label: "Services" }]}
        title={<>8 treatments. <span className="text-gradient italic">One caring team.</span></>}
        sub="Complete, premium dental care in Abuja — from whitening and scaling to implants, veneers, braces and emergency care."
      >
        <WaButton label="Get Your Dream Smile Now" arrow />
        <CallButton />
      </PageHero>
      <ServicesSection />
      <CtaBand title="Not sure which treatment you need?" text="Book a check-up and we’ll explain your options in plain language." />
      <FaqSection />
      <FinalCta />
    </>
  );
}
