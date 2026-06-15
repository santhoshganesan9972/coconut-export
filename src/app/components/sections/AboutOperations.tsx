"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Operations steps ────────────────────────────────────────────────── */
const operationsSteps = [
  {
    step: 1,
    title: "Farm Sourcing",
    description:
      "Hand-selected from certified partner farms across Tamil Nadu. Our field team works directly with growers for optimal harvest timing and variety selection.",
    phase: "Origin",
    businessValue:
      "Direct farm relationships eliminate intermediaries, ensuring traceability and competitive pricing from source.",
    image: "/images/storytelling/Farm Sourcing2-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2V20h12v-2.8c1.8-1.5 3-3.7 3-6.2 0-4.5-4.5-8-9-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-8m3 8v-5" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Processing",
    description:
      "Cleaned, sorted, graded, and prepared at our ISO 22000 & HACCP certified facilities. Every step follows strict export standards.",
    phase: "Process",
    businessValue:
      "Certified processing guarantees compliance with international food safety standards and import regulations.",
    image: "/images/storytelling/processing-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Quality Control",
    description:
      "Inspected at farm intake, processing, and pre-shipment. Every batch checked for size uniformity, weight consistency, moisture content, and visual appearance.",
    phase: "Inspection",
    businessValue:
      "Rigorous QC reduces rejection rates and ensures every shipment meets your contractual specifications.",
    image: "/images/storytelling/QualityControl-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Packaging",
    description:
      "Export-grade packaging to your requirements — from mesh bags for whole coconuts to compressed blocks for coco peat. Custom labelling available.",
    phase: "Pack",
    businessValue:
      "Flexible packaging configurations reduce your secondary handling costs and ensure product arrives in optimal condition.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Export Logistics",
    description:
      "Container booking, freight, customs clearance, and documentation managed in-house. We ship from Chennai, Tuticorin, and Nhava Sheva for routing flexibility.",
    phase: "Logistics",
    businessValue:
      "Multi-port strategy and in-house logistics control reduce lead times and provide single-point accountability.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Global Delivery",
    description:
      "Delivered to your destination port with real-time tracking and complete documentation. Our team handles last-mile coordination and arrival formalities.",
    phase: "Delivery",
    businessValue:
      "End-to-end visibility and support ensure smooth customs clearance and timely delivery to your warehouse.",
    image: "/images/storytelling/DELIVERY-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

/* ─── Step background gradient colors ─────────────────────────────────── */
const stepBgGradients = [
  "from-[#1B4332] to-[#2d6a4f]",
  "from-[#2d6a4f] to-[#1B4332]",
  "from-[#1B4332] to-[#143a28]",
  "from-[#2a5016] to-[#1a3a1a]",
  "from-[#143a28] to-[#1B4332]",
  "from-[#1B4332] to-[#2d6a4f]",
];

export default function AboutOperations() {
  return (
    <section id="operations" className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
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
              Our Operations
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1B4332] font-bold">
            From Farm to{" "}
            <span className="text-[#D4A017]">Global Delivery</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            Every stage of our operation is designed for consistency, quality,
            and efficiency — from sourcing at partner farms to delivery at your
            destination port.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B4332]/30 via-[#D4A017]/20 to-[#1B4332]/30" />

          <div className="space-y-10 md:space-y-12">
            {operationsSteps.map((step, index) => (
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-[#1B4332] flex items-center justify-center z-10 shadow-lg overflow-hidden">
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
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#D4A017]/20 transition-all duration-300 overflow-hidden">
                    {/* Storytelling image at top of card */}
                    {step.image && (
                      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#1B4332]">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 hover:scale-105"
                          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#D4A017]/50" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#D4A017]/30" />
                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold text-white/90 bg-black/30 backdrop-blur-sm border border-white/20 rounded-sm">
                            {step.phase}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""
                      }`}
                    >
                      <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.2em]">
                        Step {step.step}
                      </span>
                      <span className="w-4 h-px bg-[#D4A017]/40" />
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

                    <div
                      className={`p-3 bg-[#1B4332]/[0.04] border border-[#1B4332]/[0.08] rounded-lg ${
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
