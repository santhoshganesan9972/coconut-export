"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Buyer benefits ──────────────────────────────────────────────────── */
const buyerBenefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Consistent Supply",
    description:
      "Year-round supply from 200+ partner farms with multi-region sourcing. Buffer inventory manages seasonal fluctuations for uninterrupted deliveries.",
    stat: { value: "200+", label: "Partner Farms" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Export Expertise",
    description:
      "10+ years exporting to 15+ countries. Our team navigates customs, phytosanitary, and import regulations for hassle-free clearance at destination ports.",
    stat: { value: "10+", label: "Years Exporting" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Documentation Support",
    description:
      "Complete export documentation in-house — Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Packing List, and customs declarations. 100% accuracy guaranteed.",
    stat: { value: "100%", label: "Docs Accuracy" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Scalable Volumes",
    description:
      "From a single 20ft container to regular monthly multi-product shipments. Our supply chain scales with your needs without compromising quality.",
    stat: { value: "500+", label: "Containers/Year" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Long-Term Partnerships",
    description:
      "We build relationships, not transactions. Our team invests in understanding your business and growth plans — resulting in partnerships that last years.",
    stat: { value: "90%+", label: "Repeat Buyers" },
  },
];

/* ─── Single Benefit Card ─────────────────────────────────────────────── */
function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof buyerBenefits)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col"
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-4 -right-2 text-[6rem] leading-none text-[#1B4332]/[0.04] select-none pointer-events-none group-hover:text-[#1B4332]/[0.07] transition-colors duration-500"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

      <div className="relative flex flex-col h-full p-7 lg:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col gap-2">
            <div className="w-6 h-px bg-[#D4A017]" />
            <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
              {benefit.icon}
            </div>
          </div>
        </div>

        <h3 className="text-lg lg:text-xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-3">
          {benefit.title}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-1">
          {benefit.description}
        </p>

        <div className="flex items-center gap-2.5 pt-4 border-t border-[#E5E7EB]">
          <span className="text-xl font-bold text-[#1B4332]">
            {benefit.stat.value}
          </span>
          <span className="text-[10px] text-[#9CA3AF] uppercase tracking-[0.12em]">
            {benefit.stat.label}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-4 h-px bg-[#D4A017]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332] font-semibold">
            Buyer Value
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function AboutWhyBuyers() {
  return (
    <section
      id="why-buyers"
      aria-label="Why Buyers Work With Us"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
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

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Why Buyers Work With Us
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Built for Buyer{" "}
            <span className="text-[#D4A017]">Confidence</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            International buyers choose us for our operational consistency,
            export expertise, and commitment to long-term partnerships.
          </p>
        </motion.div>

        {/* ── Benefits Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {buyerBenefits.slice(0, 3).map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-4">
          {buyerBenefits.slice(3).map((benefit, i) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={i + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
