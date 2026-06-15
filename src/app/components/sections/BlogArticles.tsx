"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featured = {
  title: "How Fresh Brown Coconuts Are Exported",
  category: "Export Guides",    excerpt:
      "A complete walkthrough of the fresh brown coconut export process — from farm selection and harvesting to container loading and international shipping.",
  image: "/images/storytelling/CONTAINER LOADING-image.png",
  readTime: "8 min read",
};

const articles = [
  {
    title: "Understanding FOB vs CIF in Coconut Trade",
    category: "Export Guides",
    excerpt:
      "A breakdown of FOB versus CIF incoterms — helping buyers choose the right shipping terms for their coconut imports.",
    readTime: "5 min read",
  },
  {
    title: "How Coco Peat Supports Sustainable Agriculture",
    category: "Industry News",
    excerpt:
      "How coco peat is transforming horticulture as a renewable, biodegradable growing medium with excellent water retention properties.",
    readTime: "6 min read",
  },
  {
    title: "Global Coconut Market Trends",
    category: "Market Insights",
    excerpt:
      "Analysis of coconut market dynamics including regional demand shifts, price trends, and emerging export opportunities.",
    readTime: "7 min read",
  },
  {
    title: "Export Documentation Explained",
    category: "Logistics",
    excerpt:
      "A practical guide to the essential export documents every coconut shipment requires — from Bill of Lading to Phytosanitary Certificate.",
    readTime: "6 min read",
  },
  {
    title: "Quality Assurance in Coconut Export",
    category: "Quality Assurance",
    excerpt:
      "How multi-stage quality inspection ensures every coconut shipment meets international standards — from farm screening to pre-shipment inspection.",
    readTime: "5 min read",
  },
];

const categories = [
  { name: "Export Guides", count: 8 },
  { name: "Industry News", count: 12 },
  { name: "Market Insights", count: 6 },
  { name: "Logistics", count: 9 },
  { name: "Quality Assurance", count: 5 },
];

export default function BlogArticles() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="blog-articles"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]"
      aria-label="Blog Articles"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ═══ FEATURED ARTICLE ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Featured Article
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="group relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(27,67,50,0.10)] transition-all duration-300 mb-14"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-56 sm:h-72 md:h-full min-h-[240px] bg-[#1B4332] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold text-white bg-[#D4A017]/90 rounded-sm">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-7 md:p-9 flex flex-col justify-center">
              <span className="text-[10px] font-semibold text-[#D4A017] uppercase tracking-[0.15em] mb-2">{featured.readTime}</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-3 leading-tight group-hover:text-[#1B4332] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B4332] hover:text-[#D4A017] transition-colors group/link"
              >
                Read Article
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.article>

        {/* ═══ LATEST ARTICLES ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Latest Articles
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#1B4332] font-bold leading-tight">
            Knowledge for{" "}
            <span className="text-[#D4A017]">Global Buyers</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#D4A017] bg-[#D4A017]/10 px-2.5 py-1 rounded-sm">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#1B4332] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1B4332] hover:text-[#D4A017] transition-colors mt-auto group/link"
                >
                  Read More
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ═══ CATEGORIES ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold mb-3">
              Browse by Category
            </p>
            <h2 className="text-3xl sm:text-4xl text-[#1B4332] font-bold leading-tight">
              Explore{" "}
              <span className="text-[#D4A017]">Topics</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.name}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                className="group inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-[#E5E7EB] hover:border-[#D4A017]/40 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,160,23,0.10)]"
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#D4A017]/40 group-hover:bg-[#D4A017] transition-colors"
                />
                <span className="text-sm font-semibold text-[#111827] group-hover:text-[#1B4332] transition-colors">
                  {cat.name}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">({cat.count})</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
