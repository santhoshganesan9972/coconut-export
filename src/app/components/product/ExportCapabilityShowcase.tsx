"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./ProductConstants";

/* ─── Capability features ─────────────────────────────────────────────── */
const capabilities = [
  {
    icon: "🚢",
    title: "Global Shipping",
    description:
      "Multi-port logistics from Chennai, Tuticorin, and Nhava Sheva — with FCL and LCL shipping to the Middle East, Europe, Americas, and Asia-Pacific.",
    details: [
      "Weekly FCL availability from 3 major Indian ports",
      "LCL consolidated shipping for trial orders",
      "Real-time container tracking end-to-end",
      "Flexible incoterms: FOB, CIF, CFR, DAP",
    ],
  },
  {
    icon: "📋",
    title: "Export Documentation",
    description:
      "Complete documentation for every shipment — ensuring smooth customs clearance and full regulatory compliance at origin and destination.",
    details: [
      "Bill of Lading & Packing List",
      "Certificate of Origin (COO)",
      "Phytosanitary Certification",
      "Customs clearance documentation",
    ],
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description:
      "Multi-stage quality control from farm screening to pre-shipment inspection. Every batch verified to your specifications before loading.",
    details: [
      "ISO 22000 & HACCP certified processing",
      "Weight and size calibration per grade",
      "Pre-shipment inspection reports",
      "Third-party SGS inspection available",
    ],
  },
  {
    icon: "📦",
    title: "Container Planning",
    description:
      "Optimised stowage for maximum container utilisation while maintaining product integrity. Custom packaging for your destination climate and transit.",
    details: [
      "Ventilated mesh bags for fresh coconuts",
      "Moisture-proof packaging for copra",
      "Compressed blocks for coco peat",
      "Private labelling and custom branding",
    ],
  },
];

export default function ExportCapabilityShowcase() {
  return (
    <section
      id="export-capabilities"
      aria-label="Export Capability Showcase"
      className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-20"
    >
      {/* ── Background decorations ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">
              Export Capabilities
            </span>
            <span className="w-5 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            End-to-End{" "}
            <span className="text-[#1B4332]">Export Excellence</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-sm max-w-lg mx-auto">
            From documentation to delivery — we ensure your shipment arrives on time, in full compliance, and in optimal condition.
          </p>
        </motion.div>

        {/* ── Feature cards grid ── */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.article
              key={cap.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-none overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              {/* Top gold accent bar */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
              />

              <div className="relative p-8 lg:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-6 h-px bg-[#D4A017]" />
                    <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                      <span className="text-lg" aria-hidden="true">
                        {cap.icon}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-4">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                  {cap.description}
                </p>

                {/* Detail items */}
                <ul className="space-y-2" role="list">
                  {cap.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-[#6B7280]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-7 border border-[#1B4332]/12 bg-[#1B4332]/[0.03]"
        >
          <div>
            <p className="text-lg font-bold text-[#111827]">
              Ready to start your export journey?
            </p>
            <p className="text-[#6B7280] text-sm mt-0.5">
              Our team is ready to support your procurement with full export
              capability — from documentation to door-step delivery.
            </p>
          </div>
          <a
            href="/rfq"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-[#1B4332] text-white text-sm font-semibold tracking-wide hover:bg-[#143a28] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(27,67,50,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
          >
            Request Bulk Quotation
            <svg
              aria-hidden="true"
              className="w-4 h-4"
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
      </div>
    </section>
  );
}
