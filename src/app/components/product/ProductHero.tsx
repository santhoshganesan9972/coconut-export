"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { fadeUpBig, fadeIn } from "./ProductConstants";
import type { Product } from "@/types";

const badgeColors = ["#D4A017", "#4A9E6B", "#2D7D9A", "#9B59B6"];

export default function ProductHero({ product }: { product: Product }) {
  const { scrollYProgress } = useScroll();
  const imageParallax = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section
      aria-label={`${product.name} — Premium Export Product`}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0C1A12]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A12] via-[#0F2218] to-[#162A1D]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.30] blur-[140px]" />
        <div className="absolute top-[30%] right-[-20%] w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/80 via-transparent to-[#0C1A12]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-24 md:py-0 min-h-[70vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center w-full">
            {/* Left: Content */}
            <motion.div initial="initial" animate="animate" className="lg:col-span-3 max-w-[640px]">
              {/* Breadcrumb */}
              <motion.div variants={fadeUpBig} className="flex items-center gap-2 text-[11px] text-white/40 font-medium mb-8">
                <a href="/" className="hover:text-[#D4A017] transition-colors">Home</a>
                <span className="text-white/20">/</span>
                <span className="text-white/60">Products</span>
                <span className="text-white/20">/</span>
                <span className="text-[#D4A017]">{product.name}</span>
              </motion.div>

              {/* Mobile: Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="lg:hidden -mx-6 mb-4"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full aspect-[6/7]"
                >
                  <Image src={product.images.hero.src} alt={product.images.hero.alt} fill className="object-contain object-center" sizes="100vw" priority />
                </motion.div>
              </motion.div>

              {/* Premium Badge */}
              <motion.div variants={fadeUpBig} className="inline-flex items-center gap-3 mb-8">
                <span className="block w-8 h-px bg-[#D4A017]" />
                <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">{product.category}</span>
                <span className="block w-8 h-px bg-[#D4A017]/50" />
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeUpBig} className="text-[clamp(2.6rem,5.5vw,4rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
                <span className="block">{product.name}</span>
                <span className="block text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.3] tracking-[-0.01em] text-[#D4A017] font-normal italic mt-2">{product.subtitle}</span>
              </motion.h1>

              <motion.p variants={fadeUpBig} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[560px] font-medium">
                {product.shortDescription} Sourced from certified farms in Tamil Nadu and processed under ISO 22000 & HACCP certified facilities.
              </motion.p>

              {/* Badges */}
              <motion.div variants={fadeUpBig} className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: product.specifications.exportGrade, color: badgeColors[0] },
                  { label: `MOQ: ${product.specifications.moq.split(" ").slice(0, 4).join(" ")}`, color: badgeColors[1] },
                  { label: "ISO 22000 Certified", color: badgeColors[2] },
                  { label: "HACCP Certified", color: badgeColors[3] },
                ].map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: badge.color }} />
                    {badge.label}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUpBig} className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`/rfq?product=${product.slug}&source=product-page`} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]">
                  <span className="relative z-10">Request Bulk Quotation</span>
                  <svg aria-hidden="true" className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a href="#specs" className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
                  View Specifications
                  <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeUpBig} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4">
                {product.heroStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-[clamp(1.3rem,2vw,1.8rem)] text-white font-bold leading-none tracking-tight">{stat.value}</span>
                    <span className="mt-1.5 text-[11px] text-white/50 font-medium uppercase tracking-[0.12em]">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div variants={fadeIn} initial="initial" animate="animate" className="lg:col-span-2 relative hidden lg:block select-none h-[500px] xl:h-[580px]">
              <div className="absolute inset-0 rounded-[2px] overflow-hidden">
                <motion.div style={{ y: imageParallax, willChange: "transform" }} className="w-full h-[125%] -top-[12.5%] relative">
                  <Image src={product.images.hero.src} alt={product.images.hero.alt} fill className="object-cover object-center" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 38vw" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-[#0C1A12]/10 to-[#0C1A12]/40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />
                <div className="absolute top-[15%] left-0 w-[2px] h-[30%] bg-gradient-to-b from-[#D4A017]/80 to-transparent" />
              </div>
              <div className="absolute top-8 left-8 z-20">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-white text-[13px] font-medium tracking-wide">Export Grade A</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-10 opacity-40">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M20 0H0M20 0v20M20 0L0 20" stroke="#D4A017" strokeWidth="1.5" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
