"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Process steps ───────────────────────────────────────────────────── */
const processSteps = [
  {
    step: 1,
    title: "Submit Inquiry",
    description:
      "Tell us your product, volume, and preferences so we can prepare an accurate quotation.",
    phase: "Inquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    businessValue:
      "We match you with the right product grade, packaging, and logistics from the start.",
  },
  {
    step: 2,
    title: "Export Consultation",
    description:
      "We review your requirements and reach out within 24 hours to discuss specs, compliance, and logistics.",
    phase: "Consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    businessValue:
      "Expert guidance on incoterms, documentation, and regulations for your market.",
  },
  {
    step: 3,
    title: "Receive Quotation",
    description:
      "Get a detailed quotation with pricing, volume discounts, shipping costs, and delivery timelines.",
    phase: "Quotation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    businessValue:
      "Transparent, itemized pricing — no hidden fees, ever.",
  },
  {
    step: 4,
    title: "Shipment Planning",
    description:
      "We coordinate container booking, cargo readiness, inspections, and documentation.",
    phase: "Planning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    businessValue:
      "Proactive planning ensures your cargo sails on schedule with complete docs.",
  },
  {
    step: 5,
    title: "Delivery",
    description:
      "Your cargo arrives with tracking, docs, and our team on standby for any last-mile needs.",
    phase: "Delivery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    businessValue:
      "Full visibility and support — you focus on business, we handle logistics.",
  },
];

/* ─── Step background gradient colors ─────────────────────────────────── */
const stepBgGradients = [
  "from-[#1B4332] to-[#2d6a4f]",
  "from-[#2d6a4f] to-[#1B4332]",
  "from-[#2a5016] to-[#1a3a1a]",
  "from-[#1B4332] to-[#143a28]",
  "from-[#143a28] to-[#1B4332]",
];

export default function RFQProcess() {
  return (
    <section id="rfq-process" className="py-14 md:py-18 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
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
              The Process
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1B4332] font-bold">
            How It <span className="text-[#D4A017]">Works</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            From inquiry to delivery — a transparent process built for global trade professionals.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B4332]/30 via-[#D4A017]/20 to-[#1B4332]/30" />

          <div className="space-y-6 md:space-y-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline circle with icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-[#1B4332] flex items-center justify-center z-10 shadow-lg overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stepBgGradients[index]} opacity-10`}
                  />
                  <span className="text-[#1B4332]">{step.icon}</span>
                </div>

                {/* Content card */}
                <div
                  className={`ml-24 sm:ml-28 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#D4A017]/20 transition-all duration-300">
                    {/* Step header */}
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse md:justify-end"
                          : ""
                      }`}
                    >
                      <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.2em]">
                        Step {step.step}
                      </span>
                      <span className="w-4 h-px bg-[#D4A017]/40" />
                      <span className="text-[#9CA3AF] text-[10px] font-semibold uppercase tracking-[0.16em]">
                        {step.phase}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-bold text-[#1B4332] mb-3 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm text-gray-500 leading-relaxed mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Business Value */}
                    <div
                      className={`mb-3 p-3 bg-[#1B4332]/[0.04] border border-[#1B4332]/[0.08] rounded-lg ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A017]">
                        Business Value
                      </span>
                      <p className="text-[12px] text-[#111827] mt-0.5 leading-snug">
                        {step.businessValue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for odd-indexed items on desktop */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: "⏱",
              label: "24-Hour Response",
              desc: "Initial consultation within one business day",
            },
            {
              icon: "📄",
              label: "Detailed Quotation",
              desc: "Transparent pricing with full cost breakdown",
            },
            {
              icon: "🤝",
              label: "Dedicated Support",
              desc: "Single point of contact throughout the process",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-bold text-[#1B4332] leading-snug">
                  {item.label}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
