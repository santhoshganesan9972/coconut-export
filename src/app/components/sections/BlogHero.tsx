"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const badges = [
  { label: "Export Guides" },
  { label: "Market Insights" },
  { label: "Industry News" },
  { label: "Logistics Knowledge" },
];

export default function BlogHero() {
  return (
    <section
      id="blog-hero"
      aria-label="Industry Insights & Export Knowledge"
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0C1A12]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A12] via-[#0F2218] to-[#162A1D]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.30] blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/80 via-transparent to-[#0C1A12]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 md:py-0">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="max-w-[800px]"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                Knowledge Center
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
              Export Knowledge
              <br />
              <span className="text-[#D4A017]">For Global Buyers</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[640px] font-medium">
              Export guides, market trends, and coconut industry insights for international buyers and importers.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                >
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
