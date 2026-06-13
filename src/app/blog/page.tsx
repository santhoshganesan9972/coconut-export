import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogHero from "../components/sections/BlogHero";
import BlogArticles from "../components/sections/BlogArticles";
import BlogCTA from "../components/sections/BlogCTA";

export const metadata: Metadata = {
  title: "Coconut Export Blog | Global Coco Exports",
  description:
    "Expert articles on coconut exports, logistics, quality assurance, and international trade.",
  keywords: [
    "coconut export blog",
    "coconut industry insights",
    "export guides",
    "coconut market trends",
    "coconut logistics",
    "international trade blog",
  ],
  openGraph: {
    title: "Coconut Export Blog | Global Coco Exports",
    description:
      "Expert articles on coconut exports, logistics, quality assurance, and international trade.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Global Coco Exports — Blog" }],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogArticles />
      <BlogCTA />
      <Footer />
    </>
  );
}
