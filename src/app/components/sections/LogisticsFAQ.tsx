"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, itemFadeUpCustom } from "@/constants/animations";

/* ─── FAQ data ────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "What shipping terms do you support?",
    answer:
      "FOB (Free On Board), CIF (Cost, Insurance & Freight), and CFR (Cost & Freight). FOB for buyers with freight partnerships. CIF/CFR for single-point logistics. Our team advises based on your needs.",
  },
  {
    question: "Can you arrange freight?",
    answer:
      "Yes — for CIF and CFR shipments. We work with Maersk, MSC, CMA CGM, and COSCO for competitive rates and reliable schedules. We handle booking, tracking, and coordination.",
  },
  {
    question: "Which ports do you export from?",
    answer:
      "Chennai Port — Southeast Asia, East Asia, US East Coast. Tuticorin — Middle East, Europe. Nhava Sheva — Europe, Africa, Americas, Australia. Multi-port strategy for optimal routing.",
  },
  {
    question: "What documentation is provided?",
    answer:
      "Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and Phytosanitary Certificate. SGS reports, fumigation, health certificates, and destination-specific docs arranged on request.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Middle East: 5–10 days. Southeast Asia: 7–14 days. Europe: 20–25 days. US East Coast: 20–30 days. Australia: 14–20 days. Estimates provided at quotation.",
  },
  {
    question: "Can you handle customs clearance at destination?",
    answer:
      "Our standard service covers Indian export customs. We can coordinate with clearing agents at select destination ports for import clearance. For others, we provide complete documentation for your customs broker.",
  },
  {
    question: "What payment terms do you accept for international shipments?",
    answer:
      "Letter of Credit (LC) at sight, Telegraphic Transfer (TT), Documents Against Payment (DP), and structured terms for long-term contracts. Finalized during quotation.",
  },
  {
    question: "What insurance coverage do you provide for cargo?",
    answer:
      "Under CIF: Institute Cargo Clauses (A) — broadest coverage, warehouse-to-warehouse, insured at 110% of CIF value. For FOB/CFR, insurance arranged by buyer. Additional coverage available on request.",
  },
  {
    question: "Do you offer temperature-controlled (reefer) container options?",
    answer:
      "Yes — reefer containers available for temperature-sensitive products. Set-point +2°C to +4°C for fresh coconuts with fresh air exchange. PTI certificate and temperature data logging included. Specify at quotation stage.",
  },
  {
    question: "Can you customize packaging for my market requirements?",
    answer:
      "Yes — custom bag sizes (5–25kg), private labelling, retail-ready packaging, special materials (jute, PP, cartons), and moisture barrier options available. Confirm at order stage for lead time.",
  },
  {
    question: "What happens if cargo is damaged during transit?",
    answer:
      "We take every precaution — container pre-inspection, proper stowage, ventilation. If damage occurs: under CIF, insurance covers it — file claim within 3–7 days. Under FOB/CFR, insurance is your responsibility. We provide supporting documentation for claims.",
  },
];

/* ─── Single Accordion Item ───────────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? "border-[#1B4332]/20 bg-white shadow-md" : "border-[#E5E7EB] bg-white hover:border-[#D4A017]/30 hover:shadow-sm"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4A017] rounded-2xl"
        aria-expanded={isOpen}
        aria-controls={`logistics-faq-answer-${index}`}
      >
        <div className="flex items-start gap-4">
          <span className={`text-[11px] font-bold tabular-nums mt-0.5 transition-colors duration-300 ${isOpen ? "text-[#D4A017]" : "text-[#9CA3AF]"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-sm font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-[#111827]" : "text-[#374151]"}`}>
            {question}
          </span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#1B4332] text-white rotate-180" : "bg-gray-100 text-gray-400"}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div key="content" id={`logistics-faq-answer-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="px-6 pb-6 pt-0">
              <div className="flex gap-4">
                <div className="w-px bg-gradient-to-b from-[#D4A017]/60 to-transparent flex-shrink-0 ml-5" />
                <div className="text-sm text-gray-500 leading-relaxed pr-4">{answer}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LogisticsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section id="logistics-faq" aria-label="Frequently Asked Questions — Logistics & Export Operations" className="relative py-14 md:py-18 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">FAQ</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Logistics{" "}<span className="text-[#D4A017]">FAQs</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Common questions about our shipping terms, ports, documentation, and transit times.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemFadeUpCustom}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AccordionItem question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => handleToggle(index)} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={faqs.length}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-[#1B4332]/5 border border-[#1B4332]/10">
            <span className="text-xl" aria-hidden="true">💬</span>
            <p className="text-sm text-gray-600">
              Have a specific logistics question?{" "}
              <a href="mailto:info@globalcocoexports.com" className="text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors">Contact our logistics team</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
