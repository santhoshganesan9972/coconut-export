"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Quality pillars ─────────────────────────────────────────────────── */
const qualityPillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Product Inspection",
    description:
      "Multi-stage inspection from farm screening to container loading. Our team checks size, weight, moisture, and visual integrity against export-grade specifications.",
    details: [
      "Farm-level maturity and size assessment",
      "Processing line visual and dimensional checks",
      "Pre-shipment container loading inspection",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Quality Standards",
    description:
      "Aligned with ISO 22000 and HACCP frameworks. Every stage follows documented SOPs with defined control points, monitoring, and corrective action plans.",
    details: [
      "ISO 22000 Food Safety Management System",
      "HACCP hazard analysis and critical control points",
      "Documented SOPs with corrective action protocols",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Export Compliance",
    description:
      "Full regulatory compliance — phytosanitary certification, customs documentation, Certificate of Origin, and destination-specific import requirements across 15+ markets.",
    details: [
      "Phytosanitary certification for all shipments",
      "Certificate of Origin and customs documentation",
      "Destination-specific regulatory compliance",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Consistency Controls",
    description:
      "Every shipment meets the same specifications. Batch tracking provides full traceability from farm to port — covering sizing, weight, packaging, and documentation.",
    details: [
      "Batch-level traceability from source to shipment",
      "Weight and size calibration within defined tolerances",
      "Packaging integrity and labelling verification",
    ],
  },
];

export default function AboutQuality() {
  return (
    <section
      id="quality"
      aria-label="Quality Assurance"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
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
              Quality Assurance
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Built on{" "}
            <span className="text-[#1B4332]">Consistent Quality</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Quality is not a department — it is embedded in every stage of our
            operation, from farm selection to container loading.
          </p>
        </motion.div>

        {/* ── Quality grid ── */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {qualityPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="p-7 lg:p-8">
                {/* Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex flex-col gap-2">
                    <div className="w-6 h-px bg-[#D4A017]" />
                    <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-[#111827] leading-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Detail bullets */}
                <ul className="space-y-2" role="list">
                  {pillar.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom compliance bar ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-5xl mx-auto rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              {
                icon: "🔬",
                title: "Lab Tested",
                desc: "Regular third-party lab testing for quality verification",
              },
              {
                icon: "📋",
                title: "Audit Ready",
                desc: "Complete quality records available for buyer audits",
              },
              {
                icon: "✅",
                title: "Export Compliant",
                desc: "All shipments meet destination country import standards",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 md:p-7 hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
