import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import HeroCarousel from "./components/sections/HeroCarousel";
import Hero from "./components/sections/Hero";
import TrustStrip from "./components/sections/TrustStrip";
import Stats from "./components/sections/Stats";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import SupplyChainJourney from "./components/sections/SupplyChainJourney";
import RFQCTA from "./components/sections/RFQCTA";

// ═══ Code-split: heavy below-fold sections ═══
const ProductEcosystem = dynamic(
  () => import("./components/sections/ProductEcosystem"),
  { ssr: true }
);

const ExportDestinations = dynamic(
  () => import("./components/sections/ExportDestinations"),
  { ssr: true }
);

const Certifications = dynamic(
  () => import("./components/sections/Certifications"),
  { ssr: true }
);

export const metadata: Metadata = {
  description:
    "Premium coconut exporter in India supplying bulk fresh brown coconut, Pollachi coconut, copra, and coco peat to importers and distributors in UAE, Europe, USA, and Asia-Pacific. ISO & HACCP certified.",
  openGraph: {
    description:
      "Premium coconut exporter in India supplying bulk fresh coconut, copra, and coco peat to importers and distributors worldwide. ISO & HACCP certified.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Global Coco Exports — Premium Coconut Export Solutions" }],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Hero />
      <TrustStrip />
      <Stats />
      <WhyChooseUs />
      <ProductEcosystem />
      <SupplyChainJourney />
      <ExportDestinations />
      <Certifications />
      <RFQCTA />
      <Footer />
    </>
  );
}
