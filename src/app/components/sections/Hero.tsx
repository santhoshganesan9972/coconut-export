"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.9 },
  },
};

const cardReveal = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.5 + i * 0.18,
    },
  }),
};

/* ─── Floating trust cards data ───────────────────────────────────────── */
const floatingCards = [
  {
    label: "ISO 22000 Certified",
    icon: (
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
    ),
    top: "12%",
    right: "8%",
  },
  {
    label: "Global Export Network",
    icon: (
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
    ),
    top: "42%",
    left: "-8%",
  },
  {
    label: "Quality Assured",
    icon: (
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    bottom: "10%",
    right: "18%",
  },
];

/* ─── Trust metrics ───────────────────────────────────────────────────── */
const trustMetrics = [
  { value: "15+", label: "Countries Served" },
  { value: "500+", label: "Containers Exported" },
  { value: "10+", label: "Years Experience" },
];

/* ─── Trust indicator pills ───────────────────────────────────────────── */
const trustIndicators = [
  { icon: "✓", label: "Export Ready" },
  { icon: "🌐", label: "Global Supply Network" },
  { icon: "🔬", label: "Quality Assured" },
  { icon: "📦", label: "Bulk Order Support" },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imageParallax = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section
      id="home"
      aria-label="Hero — Premium Coconut Export Solutions"
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0C1A12]"
    >
      {/* ═══════════════════════════════════════════════════════════════
         BACKGROUND: layered depth
         ═══════════════════════════════════════════════════════════════ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Base dark gradient — deep green-black to warmer dark */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A12] via-[#0F2218] to-[#162A1D]" />

        {/* Subtle diagonal grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Primary radial glow — gold from top-right (warmth / luxury) */}
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />

        {/* Secondary glow — deep green from bottom-left (grounding) */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.30] blur-[140px]" />

        {/* Tertiary glow — warm amber accent on right */}
        <div className="absolute top-[30%] right-[-20%] w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />

        {/* Vignette overlay — darker edges for focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/80 via-transparent to-[#0C1A12]/60" />

        {/* Gold horizontal accent line — very subtle, near bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
         MAIN CONTENT
         ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* ═══ LEFT: Content — 3/5 cols (60%) ═══════════════════ */}
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
                  Direct From Origin
                </span>
                <span className="block w-8 h-px bg-[#D4A017]/50" />
              </motion.div>

              {/* ── Heading — direct, buyer-focused ── */}
              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold"
              >
                <span className="block max-w-4xl">Trusted Coconut</span>
                <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-white font-bold mt-1">
                  Export Partner
                </span>
                <span className="block text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.2] tracking-[-0.01em] text-[#D4A017] font-normal italic mt-2">
                  Serving Buyers in 15+ Countries
                </span>
              </motion.h1>

              {/* ── Supporting description — simplified ── */}
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[620px] font-medium"
              >
                We supply premium coconut, copra and coco peat to importers,
                distributors and industrial buyers worldwide. ISO &amp; HACCP
                certified. From farm to port — reliably delivered.
              </motion.p>

              {/* ── Trust indicator pills — new ── */}
              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2"
              >
                {trustIndicators.map((indicator) => (
                  <span
                    key={indicator.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                  >
                    <span className="text-[#D4A017] text-xs">{indicator.icon}</span>
                    {indicator.label}
                  </span>
                ))}
              </motion.div>

              {/* ── CTA Buttons — enterprise grade, not pills ── */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/rfq"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                >
                  <span className="relative z-10">Get Bulk Quotation</span>
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
                  {/* Subtle shine overlay on hover */}
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="/products/fresh-brown-coconut"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  Explore Products
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* ── Trust Metrics Row — elegantly below CTAs ── */}
              <motion.div
                variants={fadeUp}
                className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4"
              >
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="text-[clamp(1.5rem,2.5vw,2rem)] text-white font-bold leading-none tracking-tight">
                      {metric.value}
                    </span>
                    <span className="mt-1.5 text-[11px] text-white/50 font-medium uppercase tracking-[0.12em]">
                      {metric.label}
                    </span>
                  </div>
                ))}
                {/* New: 24h response metric */}
                <div className="flex flex-col">
                  <span className="text-[clamp(1.5rem,2.5vw,2rem)] text-[#D4A017] font-bold leading-none tracking-tight">
                    24h
                  </span>
                  <span className="mt-1.5 text-[11px] text-white/50 font-medium uppercase tracking-[0.12em]">
                    Response Time
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ═══ RIGHT: Visual — 2/5 cols (40%) ════════════════════ */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="lg:col-span-2 relative hidden lg:block select-none h-[520px] xl:h-[600px]"
            >
              {/* ── Single dominant hero image ── */}
              <div className="absolute inset-0 rounded-[2px] overflow-hidden">
                <motion.div style={{ y: imageParallax, willChange: "transform" }} className="w-full h-[125%] -top-[12.5%] relative">
                  <Image
                    src="/images/coconut-plantation.jpg"
                    alt="Premium coconut plantation — rows of tall palms emblematic of sustainable export agriculture"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 38vw"
                    priority
                  />
                </motion.div>

                {/* Gradient scrim — dark edges for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-[#0C1A12]/10 to-[#0C1A12]/40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />

                {/* Gold accent — left vertical stripe */}
                <div className="absolute top-[15%] left-0 w-[2px] h-[30%] bg-gradient-to-b from-[#D4A017]/80 to-transparent" />
              </div>

              {/* ── Floating glassmorphism trust cards ── */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  custom={i}
                  variants={cardReveal}
                  initial="initial"
                  animate="animate"
                  className={`absolute z-20 ${i === 0 ? 'animate-float' : i === 1 ? 'animate-float-delayed' : 'animate-float-slow'}`}
                  style={{
                    top: card.top,
                    right: card.right,
                    left: card.left,
                    bottom: card.bottom,
                  }}
                >
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)] hover:bg-white/[0.12] transition-colors duration-300">
                    <span className="flex-shrink-0">{card.icon}</span>
                    <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">
                      {card.label}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* ── Subtle decorative corner bracket (luxury detail) ── */}
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

      {/* ── Float keyframe for subtle card movement ── */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite 0.5s; }
      `}</style>
    </section>
  );
}
