"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trackOutboundClick } from "@/lib/analytics";

export default function RFQFinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="rfq-final-cta"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)",
      }}
      aria-label="Ready To Start Your Import Process"
    >
      {/* ── Background: dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)',
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ── Top border accent ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4A017 30%, #f5c842 50%, #D4A017 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Radial glows ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(212,160,23,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 80%, rgba(27,67,50,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* ── Pre-label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
            Start Today
          </span>
          <span className="block w-8 h-px bg-[#D4A017]/50" />
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-[1.12] tracking-[-0.02em]"
        >
          Ready To Start Your
          <br />
          <span className="text-[#D4A017]">Import Process?</span>
        </motion.h2>

        {/* ── Sub copy ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Ready to source premium coconut products at competitive prices? Submit your RFQ or contact us to get started.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#rfq-form"
            onClick={() => trackOutboundClick({ type: "request_quote", label: "RFQ Page Submit RFQ" })}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          >
            <span className="relative z-10">Submit RFQ</span>
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
            href="mailto:info@globalcocoexports.com?subject=Export%20Consultation"
            onClick={() => trackOutboundClick({ type: "schedule_consultation", label: "RFQ Page Contact Export Team" })}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="2"
                width="13"
                height="11"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path d="M1 6h13" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M5 1v2M10 1v2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Contact Export Team
          </a>
        </motion.div>

        {/* ── Bottom stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8 max-w-3xl mx-auto"
        >
          {[
            { value: "15+", label: "Countries Served" },
            { value: "500+", label: "Containers Exported" },
            { value: "10+", label: "Years of Exporting" },
            { value: "24h", label: "Response Guarantee" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.6 + i * 0.07,
                ease: "backOut",
              }}
              className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <span className="text-2xl font-bold text-[#D4A017] leading-none">
                {s.value}
              </span>
              <span className="text-white/35 text-[9px] uppercase tracking-widest mt-1 text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
