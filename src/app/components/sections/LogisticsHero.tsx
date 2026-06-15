"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Animation variants ──────────────────────────────────────────────── */
const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ─── Trust indicators ────────────────────────────────────────────────── */
const trustIndicators = [
  { label: "Export Ready" },
  { label: "Global Shipping Support" },
  { label: "Documentation Assistance" },
  { label: "Container Planning Expertise" },
];

/* ─── Trust metrics ───────────────────────────────────────────────────── */
const trustMetrics = [
  { value: "500+", label: "Containers Shipped" },
  { value: "3", label: "Port Corridors", highlight: true },
  { value: "15+", label: "Destination Countries" },
  { value: "10+", label: "Years Experience" },
];

export default function LogisticsHero() {
  const { scrollYProgress } = useScroll();
  const imageParallax = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section
      id="logistics-hero"
      aria-label="Logistics — Global Logistics & Export Operations"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0C1A12]"
    >
      {/* BACKGROUND: layered depth */}
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
        <div className="absolute top-[30%] right-[-20%] w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/80 via-transparent to-[#0C1A12]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* LEFT: Content */}
            <motion.div
              variants={container}
              initial="initial"
              animate="animate"
              className="lg:col-span-3 max-w-[680px]"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
                <span className="block w-8 h-px bg-[#D4A017]" />
                <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Export Operations
                </span>
                <span className="block w-8 h-px bg-[#D4A017]/50" />
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
                <span className="block max-w-4xl">Shipping Coconut</span>
                <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[#D4A017] mt-1">
                  Worldwide
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[620px] font-medium">
                We handle shipping, documentation, container planning, and export
                coordination so you can receive your order without hassle.
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

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
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
                  href="#export-process"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  Explore Process
                  <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className={`text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-none tracking-tight ${metric.highlight ? "text-[#D4A017]" : "text-white"}`}>
                      {metric.value}
                    </span>
                    <span className="mt-1.5 text-[11px] text-white/50 font-medium uppercase tracking-[0.12em]">{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Visual */}
            <motion.div variants={fadeUp} className="lg:col-span-2 relative hidden lg:block select-none h-[520px] xl:h-[600px]">
              <div className="absolute inset-0 rounded-[2px] overflow-hidden">
                <motion.div style={{ y: imageParallax }} className="w-full h-[125%] -top-[12.5%] relative">
                  <Image
                    src="/images/logistics-hero.jpg"
                    alt="Container port and global shipping operations — multi-port logistics from Chennai, Tuticorin, and Nhava Sheva"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 38vw"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-[#0C1A12]/10 to-[#0C1A12]/40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />
                <div className="absolute top-[15%] left-0 w-[2px] h-[30%] bg-gradient-to-b from-[#D4A017]/80 to-transparent" />
              </div>

              <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className="absolute top-[15%] right-[8%]">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">Multi-Port Shipping</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.85 }} className="absolute bottom-[15%] right-[18%]">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">Full Documentation</span>
                </div>
              </motion.div>

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
