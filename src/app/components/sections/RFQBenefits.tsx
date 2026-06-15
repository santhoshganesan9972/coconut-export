"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Benefit cards data ──────────────────────────────────────────────── */
const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Dedicated Export Support",
    description:
      "A single contact manages your account from inquiry to delivery — consistent communication, personalized service.",
    stat: { value: "24h", label: "Response Time" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Logistics Guidance",
    description:
      "Advice on shipping routes, freight, container optimization, and ports — reducing landed costs and avoiding pitfalls.",
    stat: { value: "3", label: "Port Corridors" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Technical Specifications",
    description:
      "Detailed datasheets with grades, moisture content, oil yield, sizing, and packaging for your market.",
    stat: { value: "5", label: "Product Grades" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M7.5 12h.75v-.75H7.5V12zm3 0h.75v-.75H10.5V12zm3 0h.75v-.75H13.5V12zm3 0h.75v-.75H16.5V12z" />
      </svg>
    ),
    title: "Bulk Pricing Assistance",
    description:
      "Competitive volume pricing with transparent breakdowns. We help you optimize orders for best value.",
    stat: { value: "500+", label: "Containers" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Documentation Support",
    description:
      "We handle all export docs — Certificate of Origin, Phytosanitary, Bill of Lading, Packing List, and customs declarations.",
    stat: { value: "100%", label: "Docs Accuracy" },
  },
];

/* ─── Single Benefit Card ─────────────────────────────────────────────── */
function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
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
      {/* Ghost ordinal */}
      <span
        aria-hidden="true"
        className="absolute -bottom-4 -right-2 text-[6rem] leading-none text-[#1B4332]/[0.04] select-none pointer-events-none group-hover:text-[#1B4332]/[0.07] transition-colors duration-500"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Gold top-edge rule */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

      <div className="relative flex flex-col h-full p-7 lg:p-8">
        {/* Icon */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col gap-2">
            <div className="w-6 h-px bg-[#D4A017]" />
            <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
              {benefit.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg lg:text-xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-3">
          {benefit.title}
        </h3>
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

        {/* Bottom indicator */}
        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-4 h-px bg-[#D4A017]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332] font-semibold">
            Value Add
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function RFQBenefits() {
  return (
    <section
      id="rfq-benefits"
      aria-label="Why Request A Quotation"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
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
              Why Request a Quotation
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            More Than Just a{" "}
            <span className="text-[#D4A017]">Price</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Get a complete export partnership — not just a price list.
          </p>
        </motion.div>

        {/* ── Benefits Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {benefits.slice(0, 3).map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-4">
          {benefits.slice(3).map((benefit, i) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={i + 3}
            />
          ))}
        </div>

        {/* ── Bottom trust bar ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-5xl mx-auto rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              {
                icon: "🏛️",
                title: "Trusted by Importers",
                desc: "Long-term partnerships in 15+ countries",
              },
              {
                icon: "📄",
                title: "Transparent Pricing",
                desc: "Itemized quotes, no hidden fees",
              },
              {
                icon: "🔒",
                title: "Secure Communication",
                desc: "Confidential handling by senior export team",
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
