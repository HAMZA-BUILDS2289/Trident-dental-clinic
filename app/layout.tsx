import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets, LeadPopup } from "@/components/FloatingUI";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "Trident Dental Clinic | Best Dental Clinic in Abuja",
    template: "%s | Trident Dental Clinic Abuja",
  },
  description:
    "Trident Dental Clinic is a premium, 4.7★ rated dental clinic in Kado, Abuja — teeth whitening, braces, implants, veneers, root canal, scaling & polishing, pediatric and emergency care. Book on WhatsApp.",
  keywords: [
    "best dental clinic in Abuja",
    "dentist in Abuja",
    "dental clinic Kado Abuja",
    "teeth whitening Abuja",
    "dental implants Abuja",
    "veneers Abuja",
    "braces Abuja",
    "emergency dentist Abuja",
    "Trident Dental Clinic",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: BUSINESS.name,
    title: "Trident Dental Clinic | Abuja",
    description: BUSINESS.tagline,
    images: [{ url: "/images/reception-lounge.jpg", width: 1080, height: 1440, alt: "Trident Dental Clinic reception, Abuja" }],
  },
  twitter: { card: "summary_large_image", title: "Trident Dental Clinic", description: BUSINESS.tagline },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#082C5E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: BUSINESS.name,
  description: BUSINESS.tagline,
  telephone: BUSINESS.phoneTel,
  url: BUSINESS.siteUrl,
  image: `${BUSINESS.siteUrl}/images/reception-lounge.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 109, Ahmadu Bello Way, Cadastral zone B09",
    addressLocality: "Kado, Abuja",
    addressRegion: "Federal Capital Territory",
    postalCode: "900108",
    addressCountry: "NG",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS.rating, reviewCount: BUSINESS.reviewCount },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWidgets />
        <LeadPopup />
      </body>
    </html>
  );
}
