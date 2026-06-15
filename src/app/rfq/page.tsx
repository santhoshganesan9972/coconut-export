import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { FAQSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RFQHero from "../components/sections/RFQHero";
import RFQProcess from "../components/sections/RFQProcess";
import RFQBenefits from "../components/sections/RFQBenefits";
import RFQFAQ from "../components/sections/RFQFAQ";
import RFQFinalCTA from "../components/sections/RFQFinalCTA";

// ═══ Code-split: heavy multi-step form with animations ═══
const RFQForm = dynamic(
  () => import("../components/sections/RFQForm"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Request a Quote — Bulk Coconut RFQ",    description:
    "Request a bulk quotation for coconut, copra, and coco peat. Get pricing, logistics support, and export consultation within 24 hours.",
  keywords: [
    "coconut export RFQ",
    "bulk coconut quotation",
    "coco peat bulk price",
    "coconut supplier quote",
    "B2B coconut procurement",
    "copra price request",
    "coconut RFQ form",
    "wholesale coconut quote",
  ],
  openGraph: {
    title: "Request a Quote — Bulk Coconut RFQ | Global Coco Exports",
    description:
      "Request a bulk quotation for coconut, copra, and coco peat. Get pricing and export consultation within 24 hours.",
    images: [
      {
        url: "/images/og-rfq.jpg",
        width: 1200,
        height: 630,
        alt: "Request a Quote — Bulk Coconut RFQ | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/rfq",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote — Bulk Coconut RFQ | Global Coco Exports",
    description:
      "Submit an RFQ for bulk coconut, copra, and coco peat. Get pricing and export consultation within 24 hours.",
    images: ["/images/og-rfq.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/rfq",
  },
};

export default function RFQPage() {
  return (
    <>
      <Navbar />
      <RFQHero />
      <RFQProcess />
      <Suspense fallback={
        <div className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/5 p-8">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-100 rounded w-1/3" />
                <div className="h-4 bg-gray-100 rounded w-1/2" />
                <div className="h-32 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      }>
        <RFQForm />
      </Suspense>
      <RFQBenefits />
      <RFQFAQ />
      <RFQFinalCTA />
      <FAQSchema questions={[
        { question: "How soon will I receive a quotation?", answer: "We typically respond to RFQ submissions within 24 hours during business days. Urgent requests received before 2:00 PM IST are often quoted the same day." },
        { question: "What is the minimum order quantity?", answer: "Minimum order quantities vary by product: Fresh Brown Coconut (1 × 20ft FCL ≈ 25,000 nuts), Copra (1 × 20ft FCL ≈ 18 MT), Coco Peat (1 × 20ft FCL ≈ 500 blocks). Smaller trial orders may be arranged on request." },
        { question: "Can you support international shipping?", answer: "Yes, we export to buyers across the Middle East, Europe, North America, and Asia-Pacific. We support FOB, CIF, and CFR terms from Chennai, Tuticorin, and Nhava Sheva ports with full documentation." },
        { question: "Can you provide technical specifications?", answer: "Yes, we provide detailed technical specifications including product grading, quality parameters, packaging details, and certification documents for all our coconut products." },
        { question: "Can you provide export documentation?", answer: "We provide complete export documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, and Packing List for every shipment." },
      ]} />
      <Footer />
    </>
  );
}
