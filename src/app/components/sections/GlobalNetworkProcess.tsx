"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: 1,
    title: "Farm Sourcing",
    description: "Hand-selected from certified partner farms across Tamil Nadu's coconut-growing regions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2V20h12v-2.8c1.8-1.5 3-3.7 3-6.2 0-4.5-4.5-8-9-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-8m3 8v-5" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Processing",
    description: "Cleaned, sorted, graded, and prepared at ISO 22000 & HACCP certified facilities to export standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Quality Control",
    description: "Inspected at farm intake, processing, and pre-shipment to ensure every batch meets export specifications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Shipment",
    description: "Container loading, freight coordination, and real-time tracking from our facility to your destination port.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Documentation",
    description: "Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and customs clearance — all handled for you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Delivery",
    description: "Delivered to your port with real-time tracking, complete documentation, and our team on standby for support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
];

const stepBgGradients = [
  "from-[#1B4332] to-[#2d6a4f]",
  "from-[#2d6a4f] to-[#1B4332]",
  "from-[#1B4332] to-[#143a28]",
  "from-[#2a5016] to-[#1a3a1a]",
  "from-[#143a28] to-[#1B4332]",
  "from-[#1B4332] to-[#2d6a4f]",
];

export default function GlobalNetworkProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="export-process-overview"
      ref={ref}
      className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]"
      aria-label="Export Process Overview"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Export Process
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B4332] font-bold leading-tight">
            From Farm to{" "}
            <span className="text-[#D4A017]">Global Delivery</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            A streamlined six-step process designed for reliability, transparency, and efficiency at every stage.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B4332]/30 via-[#D4A017]/20 to-[#1B4332]/30" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-2 border-[#1B4332] flex items-center justify-center z-10 shadow-lg overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stepBgGradients[index]} opacity-10`}
                  />
                  <span className="text-[#1B4332]">{step.icon}</span>
                </div>

                <div
                  className={`ml-24 sm:ml-28 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#D4A017]/20 transition-all duration-300 p-6 md:p-7">
                    <div
                      className={`flex items-center gap-3 mb-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""
                      }`}
                    >
                      <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.2em]">
                        Step {step.step}
                      </span>
                      <span className="w-4 h-px bg-[#D4A017]/40" />
                    </div>
                    <h3
                      className={`text-base font-bold text-[#1B4332] mb-2 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm text-gray-500 leading-relaxed ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
