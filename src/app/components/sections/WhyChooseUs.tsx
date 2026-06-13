"use client";

import { motion } from "framer-motion";
import { whyChooseUsItems } from "@/data/sections";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Icons — refined stroke treatment ───────────────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  farm: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2V20h12v-2.8c1.8-1.5 3-3.7 3-6.2 0-4.5-4.5-8-9-8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-8m3 8v-5" />
    </svg>
  ),
  quality: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  logistics: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  expertise: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

/* ─── Ordinal labels ──────────────────────────────────────────────────── */
const ordinals = ["01", "02", "03", "04"];

/* ─── Feature Panel — enhanced with key advantage, business benefit, stat ── */
function FeaturePanel({
  item,
  index,
}: {
  item: (typeof whyChooseUsItems)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-none overflow-hidden transition-all duration-400 hover:shadow-[0_16px_48px_rgba(27,67,50,0.09)] flex flex-col"
    >
      {/* Ghost ordinal — decorative depth layer */}
      <span
        aria-hidden="true"
        className="absolute -bottom-4 -right-2 font-serif font-bold text-[7rem] leading-none text-[#1B4332]/[0.04] select-none pointer-events-none group-hover:text-[#1B4332]/[0.07] transition-colors duration-500"
      >
        {ordinals[index]}
      </span>

      {/* Gold top-edge rule — slides in on hover */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

      <div className="relative flex flex-col h-full p-8 lg:p-10">
        {/* Icon + ordinal header row */}
        <div className="flex items-start justify-between mb-8">
          {/* Icon block */}
          <div className="flex flex-col gap-2.5">
            {/* Gold rule above icon */}
            <div className="w-6 h-px bg-[#D4A017]" />
            <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
              {iconMap[item.icon]}
            </div>
          </div>

          {/* Ordinal tag */}
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase tabular-nums">
            {ordinals[index]}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-4">
            {item.title}
          </h3>
          <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Key Advantage — new */}
          <div className="mb-4 p-3 bg-[#1B4332]/[0.04] border border-[#1B4332]/[0.08]">
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A017]">Key Advantage</span>
            <p className="text-[13px] text-[#111827] font-medium mt-1 leading-snug">{item.keyAdvantage}</p>
          </div>

          {/* Business Benefit — new */}
          <div className="mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Business Benefit</span>
            <p className="text-[12px] text-[#6B7280] mt-1 leading-snug">{item.businessBenefit}</p>
          </div>

          {/* Stat pill — new */}
          {item.stat && (
            <div className="mt-auto flex items-center gap-2.5 pt-4 border-t border-[#E5E7EB]">
              <span className="font-serif text-xl font-bold text-[#1B4332]">{item.stat.value}</span>
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-[0.12em]">{item.stat.label}</span>
            </div>
          )}

          {/* Bottom indicator */}
          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="w-4 h-px bg-[#D4A017]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332] font-semibold">
              Core Capability
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <section
      id="about"
      aria-label="Why choose us — core capabilities"
      className="relative overflow-hidden bg-[#FAFAFA] py-14 md:py-18"
    >
      {/* ── Background texture ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      {/* ═══ Mobile / tablet header (hidden on lg+) ═══════════════════════ */}
      <div className="lg:hidden px-6 pt-12 pb-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 justify-center mb-5"
        >
          <span className="w-5 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">
            Why Choose Us
          </span>
          <span className="w-5 h-px bg-[#D4A017]" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#111827] leading-tight tracking-[-0.02em]"
        >
          Built for Global{" "}
          <span className="text-[#1B4332] italic font-normal">Excellence</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
          className="mt-4 text-[#6B7280] text-sm leading-relaxed max-w-md mx-auto"
        >
          Decades of expertise, farm-fresh quality, and a logistics network built for international trade. Here is why global buyers trust us.
        </motion.p>
      </div>

      {/* ═══ Desktop two-column split: left anchor | right grid ══════════ */}
      <div className="relative max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-[380px_1fr]">

          {/* ── LEFT: Dark anchor column (desktop only) ── */}
          <div className="hidden lg:flex relative bg-[#1B4332] px-10 py-24 flex-col justify-between overflow-hidden">
            {/* Noise texture on dark column */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {/* Large ghost word — depth layer */}
            <span
              aria-hidden="true"
              className="absolute -bottom-6 -left-4 font-serif font-bold text-[9rem] leading-none text-white/[0.04] select-none pointer-events-none"
            >
              WHY
            </span>

            <div className="relative">
              {/* Label */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex items-center gap-2.5 mb-8"
              >
                <span className="w-5 h-px bg-[#D4A017]" />
                <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">
                  Why Choose Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                className="font-serif text-[2.25rem] lg:text-[2.5rem] font-bold text-white leading-[1.1] tracking-[-0.02em]"
              >
                Built for
                <br />
                Global{" "}
                <span className="text-[#D4A017] italic font-normal">
                  Excellence
                </span>
              </motion.h2>

              {/* Body */}
              <motion.p
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                className="mt-6 text-white/55 text-sm leading-relaxed"
              >
                Decades of expertise, farm-fresh quality, and a logistics network built for international trade. Here is why global buyers trust us for their coconut commodity needs.
              </motion.p>

              {/* Credential pills */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
                className="mt-10 flex flex-col gap-3"
              >
                {["ISO & HACCP Certified", "APEDA Registered", "SGS Verified"].map(
                  (pill) => (
                    <div key={pill} className="flex items-center gap-2.5">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-[#D4A017] flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-xs tracking-wide">{pill}</span>
                    </div>
                  )
                )}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
              className="relative mt-16 lg:mt-0"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-white border-b border-[#D4A017]/60 pb-1 hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A017]"
              >
                Discuss Your Requirements
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Feature grid ── */}
          <div className="grid sm:grid-cols-2 border-l border-[#E5E7EB]">
            {whyChooseUsItems.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "sm:border-r border-b border-[#E5E7EB]",
                  // Remove right border from every second item on sm+ (right column)
                  index % 2 === 1 ? "sm:border-r-0" : "",
                  // Remove bottom border from last two items
                  index >= whyChooseUsItems.length - 2 ? "border-b-0" : "",
                  // On mobile (single col), only last item has no bottom border
                  index === whyChooseUsItems.length - 1
                    ? "sm:border-b-0"
                    : "",
                ].join(" ")}
              >
                <FeaturePanel item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
