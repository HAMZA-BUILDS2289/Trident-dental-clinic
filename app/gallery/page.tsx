import type { Metadata } from "next";
import { GalleryClient } from "@/components/GalleryClient";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/Sections";
import { CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Trident Dental Clinic in Abuja: our reception and lounge, surgery and equipment, and happy patient smiles.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        crumbs={[{ label: "Gallery" }]}
        title={<>Inside <span className="text-gradient italic">Trident</span></>}
        sub="Reception & lounge, surgery & equipment, and smile results. Tap any photo to enlarge."
      />
      <section className="pb-24 lg:pb-32">
        <div className="container-wide">
          <GalleryClient />
        </div>
      </section>
      <CtaBand title="Love what you see?" text="Book a visit and see the clinic for yourself." />
      <FinalCta />
    </>
  );
}
