"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Incoterms data ──────────────────────────────────────────────────── */
const incoterms = [
  {
    code: "FOB",
    full: "Free On Board",
    description:
      "Seller delivers goods on board at the named port of origin. Risk transfers once goods are on board. Buyer assumes all costs and risks from that point.",
    responsibility: "Buyer arranges and pays for main carriage, insurance, and destination costs.",
    sellerProvides: [
      "Goods to the port of origin",
      "Export customs clearance",
      "Loading onto the vessel",
    ],
    buyerProvides: [
      "Ocean freight and insurance",
      "Destination port charges",
      "Import customs clearance",
    ],
    bestFor: "Buyers with established freight partnerships and competitive shipping rates.",
    color: "#D4A017",
    gradient: "from-[#D4A017]/10 to-[#D4A017]/5",
  },
  {
    code: "CIF",
    full: "Cost, Insurance & Freight",
    description:
      "Seller covers cost, insurance, and freight to destination port. Risk transfers once on board, but seller pays transport and insurance.",
    responsibility: "Seller arranges and pays for carriage to destination port plus minimum insurance coverage.",
    sellerProvides: [
      "Goods to the destination port",
      "Export customs clearance",
      "Ocean freight charges",
      "Marine insurance (minimum coverage)",
    ],
    buyerProvides: [
      "Destination port charges",
      "Import customs clearance",
      "Onward transportation",
    ],
    bestFor: "Buyers who prefer a single-point logistics solution with included insurance.",
    color: "#1B4332",
    gradient: "from-[#1B4332]/10 to-[#1B4332]/5",
  },
  {
    code: "CFR",
    full: "Cost & Freight",
    description:
      "Seller covers cost and freight to destination port. Risk transfers once on board. Buyer arranges their own insurance.",
    responsibility: "Seller arranges and pays for carriage to destination port. Buyer arranges insurance.",
    sellerProvides: [
      "Goods to the destination port",
      "Export customs clearance",
      "Ocean freight charges",
    ],
    buyerProvides: [
      "Marine insurance",
      "Destination port charges",
      "Import customs clearance",
      "Onward transportation",
    ],
    bestFor: "Buyers who want freight included but prefer to arrange their own insurance coverage.",
    color: "#2D7D9A",
    gradient: "from-[#2D7D9A]/10 to-[#2D7D9A]/5",
  },
];

export default function LogisticsIncoterms() {
  return (
    <section id="incoterms" aria-label="Incoterms Guide" className="relative py-14 md:py-18 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Shipping Terms</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Incoterms{" "}<span className="text-[#D4A017]">Guide</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            We support the most common international shipping terms. Each option is designed to match your risk preference and logistics capability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {incoterms.map((term, i) => (
            <motion.article
              key={term.code}
              variants={fadeUp}
              initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" style={{ background: `linear-gradient(90deg, ${term.color} 0%, ${term.color}44 100%)` }} />

              <div className="p-7 lg:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-3xl font-bold" style={{ color: term.color }}>{term.code}</span>
                    <p className="text-sm text-gray-500 mt-1 font-medium">{term.full}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: `linear-gradient(135deg, ${term.color}, ${term.color}dd)` }}>
                    {i + 1}
                  </div>
                </div>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{term.description}</p>

                {/* Responsibility */}
                <div className="mb-5 p-3 bg-[#1B4332]/[0.04] border border-[#1B4332]/[0.08] rounded-lg">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: term.color }}>Responsibility</span>
                  <p className="text-[12px] text-[#111827] mt-1 leading-snug">{term.responsibility}</p>
                </div>

                {/* Split columns */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1B4332]">Seller</span>
                    <ul className="mt-2 space-y-1.5" role="list">
                      {term.sellerProvides.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                          <span className="w-1 h-1 rounded-full bg-[#1B4332] mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Buyer</span>
                    <ul className="mt-2 space-y-1.5" role="list">
                      {term.buyerProvides.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                          <span className="w-1 h-1 rounded-full bg-[#D4A017] mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Best for */}
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A017]">Best For</span>
                  <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">{term.bestFor}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note */}
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-[#1B4332]/5 border border-[#1B4332]/10">
            <span className="text-xl" aria-hidden="true">🚢</span>
            <p className="text-sm text-gray-600">
              Not sure which incoterm suits your needs?{" "}
              <a href="/rfq" className="text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors">
                Our team can advise you
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
