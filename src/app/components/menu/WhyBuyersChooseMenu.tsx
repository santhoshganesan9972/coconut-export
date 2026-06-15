"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Benefit items ───────────────────────────────────────────────────── */
interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: { value: string; label: string };
}

const benefits: BenefitItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Quality Assurance",
    description:
      "ISO 22000 and HACCP certified — every shipment undergoes multi-stage inspection from farm screening to pre-shipment verification. Full traceability included.",
    stat: { value: "4", label: "Inspection Stages" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Export Ready Packaging",
    description:
      "Multiple packaging options for every climate and transit condition — ventilated mesh bags, moisture-proof bags, compressed blocks, and private labelling.",
    stat: { value: "5+", label: "Packaging Formats" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Shipping Support",
    description:
      "End-to-end logistics from Chennai, Tuticorin, and Nhava Sheva. FOB, CIF, and CFR terms with full export documentation.",
    stat: { value: "3", label: "Port Corridors" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Reliable Supply",
    description:
      "Year-round supply from 200+ certified partner farms across Tamil Nadu's prime coconut belt. Stable supply even during seasonal fluctuations.",
    stat: { value: "200+", label: "Partner Farms" },
  },
];

const ordinals = ["01", "02", "03", "04"];

export default function WhyBuyersChooseMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="why-buyers-choose"
      ref={sectionRef}
      aria-label="Why buyers choose our products"
      className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Why Choose Us
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Why Buyers Choose{" "}
            <span className="text-[#1B4332]">Our Products</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Importers and distributors worldwide trust us for consistent quality,
            reliable supply, and seamless export logistics.
          </p>
        </motion.div>

        {/* ── Benefits Grid ── */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-none overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col"
            >
              {/* Ghost ordinal */}
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-2 text-[7rem] leading-none text-[#1B4332]/[0.04] select-none pointer-events-none group-hover:text-[#1B4332]/[0.07] transition-colors duration-500"
              >
                {ordinals[index]}
              </span>

              {/* Gold hover top edge */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="relative flex flex-col h-full p-7 lg:p-9">
                {/* Icon + ordinal row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-6 h-px bg-[#D4A017]" />
                    <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase tabular-nums">
                    {ordinals[index]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-1">
                  {benefit.description}
                </p>

                {/* Stat */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-xl font-bold text-[#1B4332]">
                    {benefit.stat.value}
                  </span>
                  <span className="text-[10px] text-[#9CA3AF] uppercase tracking-[0.12em]">
                    {benefit.stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
