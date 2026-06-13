"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useCountUp, parseStatValue } from "@/lib/countUp";

/* ─── Animation variants ──────────────────────────────────────────────── */
const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

/* ─── Trust indicators ────────────────────────────────────────────────── */
const trustIndicators = [
  { label: "Export Ready" },
  { label: "Quality Assured" },
  { label: "Global Supply Network" },
  { label: "Commercial Scale Support" },
];

/* ─── Trust metrics ───────────────────────────────────────────────────── */
const trustMetrics = [
  { value: "15+", label: "Countries Served" },
  { value: "500+", label: "Containers Exported" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Partner Farms", highlight: true },
];

/* ─── Animated metric item ────────────────────────────────────────────── */
function AnimatedMetric({
  value,
  label,
  highlight,
  index,
  isVisible,
}: {
  value: string;
  label: string;
  highlight?: boolean;
  index: number;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1600 + index * 100, isVisible);

  return (
    <div className="flex flex-col">
      <span
        className={`text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-none tracking-tight ${
          highlight ? "text-[#D4A017]" : "text-white"
        }`}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          aria-label={`${value} ${label}`}
        >
          {isVisible ? counted : 0}
        </motion.span>
        <span className="text-[#D4A017]">{suffix}</span>
      </span>
      <span className="mt-1.5 text-[11px] text-white/50 font-medium uppercase tracking-[0.12em]">
        {label}
      </span>
    </div>
  );
}

export default function AboutHero() {
  const { scrollYProgress } = useScroll();
  const imageParallax = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  const metricsRef = useRef<HTMLDivElement>(null);
  const isMetricsVisible = useInView(metricsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about-hero"
      aria-label="About — Building Global Supply Relationships"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0C1A12]"
    >
      {/* ═══════════════════════════════════════════════════════════════
         BACKGROUND: layered depth (same as homepage Hero)
         ═══════════════════════════════════════════════════════════════ */}
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

      <div className="relative z-10 w-full min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* ═══ LEFT: Content — 3/5 cols ════════════════════ */}
            <motion.div
              variants={container}
              initial="initial"
              animate="animate"
              className="lg:col-span-3 max-w-[680px]"
            >
              {/* ── Premium Badge ── */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 mb-8"
              >
                <span className="block w-8 h-px bg-[#D4A017]" />
                <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                  About Global Coco Exports
                </span>
                <span className="block w-8 h-px bg-[#D4A017]/50" />
              </motion.div>

              {/* ── Heading ── */}
              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold"
              >
                <span className="block max-w-4xl">Building Global Supply</span>
                <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[#D4A017] mt-1">
                  Relationships Through Quality &amp; Reliability
                </span>
              </motion.h1>

              {/* ── Subheading ── */}
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[620px] font-medium"
              >
                Supporting international importers, distributors and industrial
                buyers through dependable sourcing, quality assurance and
                export-ready operations.
              </motion.p>

              {/* ── Trust indicator pills ── */}
              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2"
              >
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

              {/* ── CTAs ── */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/rfq"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                >
                  <span className="relative z-10">Request Quote</span>
                  <svg
                    aria-hidden="true"
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="#who-we-are"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  Learn More
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* ── Trust Metrics Row (animated) ── */}
              <motion.div
                ref={metricsRef}
                variants={fadeUp}
                className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4"
              >
                {trustMetrics.map((metric, i) => (
                  <AnimatedMetric
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    highlight={metric.highlight}
                    index={i}
                    isVisible={isMetricsVisible}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* ═══ RIGHT: Visual — 2/5 cols ════════════════════════ */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 relative hidden lg:block select-none h-[480px] xl:h-[540px]"
            >
              <div className="absolute inset-0 rounded-[2px] overflow-hidden">
                <motion.div
                  style={{ y: imageParallax }}
                  className="w-full h-[125%] -top-[12.5%] relative"
                >
                  <Image
                    src="/images/EachPage/About-page-image.png"
                    alt="Farmers harvesting premium coconuts in Tamil Nadu — direct farm sourcing from certified partner farms for global export"
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

              {/* ── Floating trust badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-[15%] right-[8%]"
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A017"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">
                    ISO &amp; HACCP Certified
                  </span>
                </div>
              </motion.div>

              {/* ── Floating export badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="absolute bottom-[15%] right-[18%]"
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A017"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">
                    15+ Export Markets
                  </span>
                </div>
              </motion.div>

              <div className="absolute top-4 right-4 z-10 opacity-40">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M20 0H0M20 0v20M20 0L0 20"
                    stroke="#D4A017"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
