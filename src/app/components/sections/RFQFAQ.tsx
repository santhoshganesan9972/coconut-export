"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, itemFadeUpCustom } from "@/constants/animations";

/* ─── FAQ data ────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "How soon will I receive a quotation?",
    answer:
      "We review all RFQ submissions within 24 business hours and provide a detailed quotation including pricing, shipping, and delivery timelines within 1–2 business days.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "MOQs vary by product: Fresh Coconuts ~1 × 20ft FCL (24,000–25,000 nuts), Copra ~18 MT, Coco Peat ~500 blocks. Smaller trial orders available for qualified buyers on request.",
  },
  {
    question: "Can you support international shipping?",
    answer:
      "Yes — we ship worldwide from Chennai, Tuticorin, and Nhava Sheva ports. We handle container booking, freight, customs, and docs with FOB, CIF, or CFR terms.",
  },
  {
    question: "Can you provide technical specifications?",
    answer:
      "Yes — every quote includes detailed specs covering grades, size, moisture content, oil yield, packaging, and storage recommendations. Lab reports and nutritional analysis available on request.",
  },
  {
    question: "Can you provide export documentation?",
    answer:
      "Yes — we provide Bill of Lading, Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, and destination-specific customs docs for every shipment.",
  },
  {
    question: "Do you offer product samples before bulk orders?",
    answer:
      "Yes — samples available for all product categories. Costs are typically deducted from your first bulk order.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "We accept LC (confirmed at sight), TT (advance or partial against documents), and DP for established relationships. Terms negotiated based on incoterm, volume, and buyer history.",
  },
  {
    question: "Can I place trial orders before committing to full container loads?",
    answer:
      "Yes — trial orders available as LCL or smaller quantities. We provide transparent cost comparison against FCL pricing so you can plan your scale-up.",
  },
  {
    question: "Do you offer credit terms for established buyers?",
    answer:
      "Yes — 30–60 day terms post-shipment, deferred LC, and structured plans available for established buyers with verified credentials.",
  },
  {
    question: "How are pricing adjustments handled for long-term contracts?",
    answer:
      "Long-term contracts use 30–90 day validity with quarterly or semi-annual reviews tied to coconut commodity indices. Volume-based tier pricing with transparent adjustment mechanisms.",
  },
  {
    question: "Do you offer long-term supply contracts?",
    answer:
      "Yes — annual and multi-year contracts available. Includes guaranteed supply, locked-in pricing with adjustments, dedicated account management, and coordinated logistics. Contact us to discuss.",
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
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border-[#1B4332]/20 bg-white shadow-md"
          : "border-[#E5E7EB] bg-white hover:border-[#D4A017]/30 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4A017] rounded-2xl"
        aria-expanded={isOpen}
        aria-controls={`rfq-faq-answer-${index}`}
      >
        <div className="flex items-start gap-4">
          {/* Index number */}
          <span
            className={`text-[11px] font-bold tabular-nums mt-0.5 transition-colors duration-300 ${
              isOpen ? "text-[#D4A017]" : "text-[#9CA3AF]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
              isOpen ? "text-[#111827]" : "text-[#374151]"
            }`}
          >
            {question}
          </span>
        </div>

        {/* Chevron icon */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#1B4332] text-white rotate-180"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`rfq-faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="flex gap-4">
                {/* Vertical gold accent */}
                <div className="w-px bg-gradient-to-b from-[#D4A017]/60 to-transparent flex-shrink-0 ml-5" />
                <div className="text-sm text-gray-500 leading-relaxed pr-4">
                  {answer}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function RFQFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="rfq-faq"
      aria-label="Frequently Asked Questions — RFQ Process"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      {/* ── Subtle background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              FAQ
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Got <span className="text-[#D4A017]">Questions?</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Quick answers about our RFQ process, MOQs, shipping, and documentation.
          </p>
        </motion.div>

        {/* ── FAQ Accordion ── */}
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
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Still have questions? ── */}
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
              Still have questions?{" "}
              <a
                href="mailto:info@globalcocoexports.com"
                className="text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors"
              >
                Contact our export team
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
