"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Process steps ───────────────────────────────────────────────────── */
const processSteps = [
  {
    step: 1, title: "Inquiry", phase: "Step 1",
    description: "You submit product requirements, volume, destination, and preferred incoterm. Our team reviews within 2 business hours.",
    businessValue: "Structured intake ensures no details are missed and speeds up your response.",
    image: "/images/storytelling/INQUIRY-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    step: 2, title: "Quotation", phase: "Step 2",
    description: "Detailed quotation within 24 hours — product pricing, shipping costs, and delivery timeline based on your chosen incoterm.",
    businessValue: "Itemized pricing for informed procurement decisions.",
    image: "/images/storytelling/QUOTATION-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    step: 3, title: "Order Confirmation", phase: "Step 3",
    description: "Order received, confirmed, and logged. Container booking and material allocation begin immediately.",
    businessValue: "Fast confirmation locks in production slots and reduces lead time.",
    image: "/images/storytelling/ORDER CONFIRMATION-imge.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    step: 4, title: "Production & Packaging", phase: "Step 4",
    description: "Products processed, graded, and packed to your specifications. Packaging verified against your requirements.",
    businessValue: "Tailored packaging ensures product integrity in transit.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    step: 5, title: "Container Loading", phase: "Step 5",
    description: "Containers loaded under supervision. Photographed and documented for quality records and pre-shipment inspection.",
    businessValue: "Supervised loading minimizes damage and optimizes container space.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    step: 6, title: "Documentation", phase: "Step 6",
    description: "Complete documentation: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, and customs clearance.",
    businessValue: "Full documentation for smooth customs clearance at destination.",
    image: "/images/storytelling/QUOTATION-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    step: 7, title: "Shipment", phase: "Step 7",
    description: "Container gated in at port, loaded onto vessel, and departs on schedule. Real-time tracking shared with you.",
    businessValue: "Real-time tracking eliminates uncertainty during transit.",
    image: "/images/storytelling/SHIPMENT-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    step: 8, title: "Delivery", phase: "Step 8",
    description: "Vessel arrives at destination. Customs clearance supported with complete docs. Cargo ready for collection or last-mile delivery.",
    businessValue: "End-to-end management from farm gate to your port.",
    image: "/images/storytelling/DELIVERY-image.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
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
  "from-[#2d6a4f] to-[#1B4332]",
  "from-[#1B4332] to-[#143a28]",
];

export default function LogisticsProcess() {
  return (
    <section id="export-process" className="py-14 md:py-18 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Export Process</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1B4332] font-bold">
            End-to-End{" "}<span className="text-[#D4A017]">Export Process</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            From initial inquiry to final delivery — a structured 8-step process designed for reliability and transparency.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B4332]/30 via-[#D4A017]/20 to-[#1B4332]/30" />
          <div className="space-y-10 md:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="initial" whileInView="animate" viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-[#1B4332] flex items-center justify-center z-10 shadow-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stepBgGradients[index]} opacity-10`} />
                  <span className="text-[#1B4332]">{step.icon}</span>
                </div>
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
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}>
                      <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.2em]">Step {step.step}</span>
                      <span className="w-4 h-px bg-[#D4A017]/40" />
                    </div>
                    <h3 className={`text-lg font-bold text-[#1B4332] mb-3 ${index % 2 === 0 ? "md:text-right" : ""}`}>{step.title}</h3>
                    <p className={`text-sm text-gray-500 leading-relaxed mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>{step.description}</p>
                    <div className={`p-3 bg-[#1B4332]/[0.04] border border-[#1B4332]/[0.08] rounded-lg ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A017]">Operational Value</span>
                      <p className="text-[12px] text-[#111827] mt-0.5 leading-snug">{step.businessValue}</p>
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
