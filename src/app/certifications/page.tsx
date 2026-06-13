import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Certifications from "../components/sections/Certifications";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "Global Coco Exports holds ISO 22000, HACCP, APEDA, and SGS certifications — ensuring food safety, quality compliance, and traceability across every coconut export shipment from India.",
  keywords: [
    "coconut export certifications",
    "ISO 22000 certified coconut exporter",
    "HACCP certified coconut supplier India",
    "APEDA registered coconut exporter",
    "SGS verified coconut products",
  ],
  openGraph: {
    title: "Certifications & Compliance | Global Coco Exports",
    description:
      "ISO 22000, HACCP, APEDA, and SGS certified coconut export company. Food safety, quality compliance, and third-party verified traceability.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Global Coco Exports — Certifications & Compliance" }],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar solid={true} />
      <div className="h-16 sm:h-20" />
      <Certifications />
      <Footer />
    </>
  );
}
