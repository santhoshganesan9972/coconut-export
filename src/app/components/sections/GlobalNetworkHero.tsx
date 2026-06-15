"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const trustIndicators = [
  { label: "15+ Countries Served" },
  { label: "Multi-Port Logistics" },
  { label: "End-to-End Documentation" },
  { label: "Quality Assured Supply" },
];

export default function GlobalNetworkHero() {
  return (
    <section
      id="global-network-hero"
      aria-label="Global Export Network"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0C1A12]"
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

      <div className="relative z-10 w-full min-h-[70vh] flex items-center">
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
                Global Network
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
              <span className="block">Coconut Exports</span>
              <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[#D4A017] mt-1">
                Worldwide
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[640px] font-medium">
              We export premium coconut products to buyers in 15+ countries. Reliable sourcing, quality assurance, and end-to-end logistics from India to your port.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {trustIndicators.map((indicator) => (
                <span
                  key={indicator.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                >
                  <span className="text-[#D4A017] text-xs">✓</span>
                  {indicator.label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/rfq"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
              >
                <span className="relative z-10">Request Quote</span>
                <svg aria-hidden="true" className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#countries-served"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Explore Markets
                <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
