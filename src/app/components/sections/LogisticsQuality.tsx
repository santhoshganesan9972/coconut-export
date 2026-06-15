"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Quality pillars ─────────────────────────────────────────────────── */
const qualityPillars = [
  {
    title: "Packaging Standards",
    description:
      "Food-grade packaging selected for your product type, destination climate, and transit duration. Every package labelled with grade, weight, and batch number for full traceability.",
    details: [
      "Ventilated mesh bags for whole coconuts",
      "Jumbo PP bags for copra (50kg / custom)",
      "Compressed blocks for coco peat (5kg / 650g)",
      "Custom packaging and private labelling available",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Container Preparation",
    description:
      "Containers inspected for cleanliness, structural integrity, and ventilation before loading. Temperature and humidity monitored for sensitive products.",
    details: [
      "Pre-loading container integrity inspection",
      "Cleanliness and odour-free verification",
      "Ventilation management for fresh produce",
      "Container pre-cooling when required",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Inspection Process",
    description:
      "Inspected at farm intake, processing line, and pre-shipment. Each batch checked for size, weight, moisture, and appearance.",
    details: [
      "Farm-level maturity and quality screening",
      "In-process quality checks at each stage",
      "Pre-shipment inspection before container loading",
      "Third-party inspection (SGS) available on request",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Export Compliance",
    description:
      "Every shipment complies with Indian export regulations and destination country import requirements. Our team handles phytosanitary, customs, and regulatory clearance.",
    details: [
      "APEDA registered exporter compliance",
      "Phytosanitary certification for all shipments",
      "Certificate of Origin for trade agreements",
      "Destination-specific regulatory adherence",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function LogisticsQuality() {
  return (
    <section id="packaging-quality" aria-label="Packaging & Quality Control" className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)"
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Packaging & Quality</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Operational{" "}<span className="text-[#1B4332]">Excellence</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            From packaging specifications to container loading protocols — every detail is managed to ensure your shipment arrives in optimal condition.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {qualityPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex flex-col gap-2">
                    <div className="w-6 h-px bg-[#D4A017]" />
                    <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-[#111827] leading-tight mb-3">{pillar.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{pillar.description}</p>

                <ul className="space-y-2" role="list">
                  {pillar.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
