import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GlobalNetworkHero from "../components/sections/GlobalNetworkHero";
import GlobalNetworkCountries from "../components/sections/GlobalNetworkCountries";
import GlobalNetworkCapabilities from "../components/sections/GlobalNetworkCapabilities";
import GlobalNetworkProcess from "../components/sections/GlobalNetworkProcess";
import GlobalNetworkWhy from "../components/sections/GlobalNetworkWhy";
import GlobalNetworkCTA from "../components/sections/GlobalNetworkCTA";

export const metadata: Metadata = {
  title: "Global Export Network | Global Coco Exports",
  description:
    "Explore our international export capabilities, logistics expertise, and global supply network.",
  keywords: [
    "global export network",
    "coconut export network",
    "international coconut supplier",
    "B2B coconut exporter",
    "global supply chain coconut",
    "export logistics network",
    "coconut trade network",
  ],
  openGraph: {
    title: "Global Export Network | Global Coco Exports",
    description:
      "Explore our international export capabilities, logistics expertise, and global supply network spanning 15+ countries.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Global Coco Exports — Global Export Network" }],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/global-network",
  },
};

export default function GlobalNetworkPage() {
  return (
    <>
      <Navbar />
      <GlobalNetworkHero />
      <GlobalNetworkCountries />
      <GlobalNetworkCapabilities />
      <GlobalNetworkProcess />
      <GlobalNetworkWhy />
      <GlobalNetworkCTA />
      <Footer />
    </>
  );
}
