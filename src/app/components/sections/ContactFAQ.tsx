"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── FAQ data ───────────────────────────────── */
const faqs = [
  {
    q: "How quickly do you respond to inquiries?",
    a: "We respond within 24 hours on email and within 2 hours on WhatsApp. Urgent inquiries before 2:00 PM IST are often answered the same day. Out-of-hours submissions get priority attention next business day.",
  },
  {
    q: "Can I request product specifications before placing an order?",
    a: "Yes. We provide detailed specifications, quality parameters, and certifications for all products — including moisture content, oil content, grading standards, and packaging options. Submit your inquiry and we'll share the documentation.",
  },
  {
    q: "Can I schedule a consultation with your export team?",
    a: "Yes. We offer consultation calls to discuss product selection, volumes, shipping terms, and documentation. Schedule via email or WhatsApp during business hours.",
  },
  {
    q: "Can you support international shipments?",
    a: "Yes — to the Middle East, Europe, North America, and Asia-Pacific. We handle FOB, CIF, and CFR terms from Chennai, Tuticorin, and Nhava Sheva ports. Full documentation included.",
  },
  {
    q: "Do you provide samples for quality evaluation?",
    a: "Yes, we can arrange samples for serious buyers. Costs and shipping can be discussed with our team. Requests are processed within 3–5 business days.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We accept Letter of Credit (LC), Telegraphic Transfer (TT), and Documents Against Payment (DP) for established relationships. Terms are negotiated based on order value and buyer history.",
  },
  {
    q: "Can I place trial orders before committing to bulk volumes?",
    a: "Yes — via LCL consolidation, palletized shipments, or sample courier depending on the product. Pricing is transparent, and we provide a comparison against FCL volume pricing for easy scale-up planning.",
  },
  {
    q: "What is the minimum order quantity for your products?",
    a: "MOQ varies by product: Fresh Coconut (1 × 20ft FCL ≈ 24,000–25,000 nuts), Copra (1 × 20ft FCL ≈ 18 MT), Coco Peat (1 × 20ft FCL ≈ 500 blocks). Trial orders and LCL shipments available on request.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="contact-faq" aria-label="Frequently Asked Questions" className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">FAQs</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Frequently Asked{" "}<span className="text-[#D4A017]">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-[#D4A017]/30 bg-white shadow-[0_4px_20px_rgba(212,160,23,0.06)]"
                  : "border-[#E5E7EB] bg-white hover:border-[#1B4332]/10 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]/40 focus-visible:ring-inset rounded-xl"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm sm:text-base font-semibold text-[#111827] pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  openIndex === i ? "bg-[#D4A017] text-white" : "bg-[#1B4332]/10 text-[#1B4332]"
                }`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                    className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="w-10 h-px bg-[#D4A017]/40 mb-3" />
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Still have questions?{" "}
            <a href="#contact-form" className="text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors">
              Send us a message
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
