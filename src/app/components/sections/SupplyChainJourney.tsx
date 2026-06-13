"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";
import { supplyChainSteps } from "@/data/sections";

/* ─── Step icons ──────────────────────────────────────────────────────── */
const stepIcons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2V20h12v-2.8c1.8-1.5 3-3.7 3-6.2 0-4.5-4.5-8-9-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-8m3 8v-5" />
      </svg>
    ),
    bg: "from-[#1B4332] to-[#2d6a4f]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    bg: "from-[#2d6a4f] to-[#1B4332]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    bg: "from-[#2a5016] to-[#1a3a1a]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    bg: "from-[#1B4332] to-[#143a28]",
  },
];

export default function SupplyChainJourney() {
  return (
    <section id="logistics" className="py-14 md:py-18 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-medium mb-4">Supply Chain</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1B4332] font-bold">
            From Farm to <span className="text-[#D4A017]">Global Market</span>
          </h2>
          <p className="mt-4 text-gray-500">An integrated supply chain that ensures freshness, quality, and timely delivery at every stage — from carefully selected sourcing regions to your destination port.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B4332]/30 via-[#D4A017]/20 to-[#1B4332]/30" />

          <div className="space-y-10 md:space-y-12">
            {supplyChainSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline circle with icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-[#1B4332] flex items-center justify-center z-10 shadow-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stepIcons[index].bg} opacity-10`} />
                  <span className="text-[#1B4332]">{stepIcons[index].icon}</span>
                </div>

                {/* Content card */}
                <div className={`ml-24 sm:ml-28 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
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
                        {/* Gold corner accent */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#D4A017]/50" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#D4A017]/30" />
                        {/* Phase label overlay */}
                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold text-white/90 bg-black/30 backdrop-blur-sm border border-white/20 rounded-sm">
                            {index === 0 ? "Origin" : index === 1 ? "Process" : index === 2 ? "Pack" : "Deliver"}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                    {/* Step header */}
                    <div className="flex items-center gap-3 mb-3 md:justify-start">
                      <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.2em]">
                        Step {step.step}
                      </span>
                      <span className="w-4 h-px bg-[#D4A017]/40" />
                    </div>

                    <h3 className="text-lg font-bold text-[#1B4332] mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.description}</p>

                    {/* Business Value — new */}
                    <div className="mb-3 p-3 bg-[#1B4332]/[0.04] border border-[#1B4332]/[0.08] rounded-lg">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A017]">Business Value</span>
                      <p className="text-[12px] text-[#111827] mt-0.5 leading-snug">{step.businessValue}</p>
                    </div>

                    {/* Quality Relevance — new */}
                    <div className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-[#D4A017] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
                      </svg>
                      <span className="text-[11px] text-gray-500 leading-snug">{step.qualityRelevance}</span>
                    </div>
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
          className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: "🌱", label: "Farm-Level Traceability", desc: "Every batch traceable to source farm and harvest date" },
            { icon: "🔬", label: "Certified Processing", desc: "ISO 22000 & HACCP controlled environment" },
            { icon: "🚢", label: "Real-Time Tracking", desc: "Container-level tracking from loading to arrival" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
              <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="text-xs font-bold text-[#1B4332] leading-snug">{item.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
