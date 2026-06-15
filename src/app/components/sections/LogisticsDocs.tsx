"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Document categories ─────────────────────────────────────────────── */
const documents = [
  {
    title: "Certificate of Origin",
    description:
      "Official document certifying country of origin for customs and tariff purposes. Issued by authorized chambers of commerce under APEDA.",
    usage: "Required by destination customs for duty assessment and trade agreement benefits.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    color: "#D4A017",
  },
  {
    title: "Phytosanitary Certificate",
    description:
      "Government-issued certificate confirming the consignment meets the importing country's plant health requirements.",
    usage: "Mandatory for agricultural product imports. Required by most destination country quarantine authorities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "#2D7D9A",
  },
  {
    title: "Bill of Lading",
    description:
      "Legal document from the shipping line confirming receipt of goods. Serves as contract of carriage and title document.",
    usage: "Required for the buyer to take possession of cargo at destination. Key document for letter of credit transactions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    color: "#1B4332",
  },
  {
    title: "Commercial Invoice",
    description:
      "Official invoice detailing transaction value, product description, quantity, unit price, and total amount. Used by customs for duty assessment.",
    usage: "Essential for customs clearance at both export and import stages. Required for payment processing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    color: "#4A9E6B",
  },
  {
    title: "Packing List",
    description:
      "Lists contents of each package — weight, dimensions, and markings. Complements the commercial invoice for customs.",
    usage: "Used by customs for physical verification. Helps buyers verify shipment contents against order.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    color: "#9B59B6",
  },
  {
    title: "SGS Inspection Report",
    description:
      "Independent third-party inspection report by SGS verifying product quality, quantity, and loading conditions.",
    usage: "Provides independent quality assurance for buyers. Often required for letter of credit compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    color: "#D4A017",
  },
];

export default function LogisticsDocs() {
  return (
    <section id="export-docs" aria-label="Export Documentation Center" className="relative py-14 md:py-18 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 40px)" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Documentation Center</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Export Documentation{" "}<span className="text-[#D4A017]">Vault</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Every shipment includes a complete documentation package. Our team manages all paperwork so you can focus on your core business.
          </p>
        </motion.div>

        {/* Document grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.title}
              variants={fadeUp}
              initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" style={{ background: `linear-gradient(90deg, ${doc.color} 0%, ${doc.color}44 100%)` }} />
              <div className="p-6 lg:p-7">
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon in colored ring */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" style={{ background: `${doc.color}12`, color: doc.color }}>
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-[#111827] leading-snug">{doc.title}</h3>
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#9CA3AF] uppercase flex-shrink-0">DOC-{String(i + 1).padStart(2, "0")}</span>
                </div>

                <p className="text-[#6B7280] text-xs leading-relaxed mb-3">{doc.description}</p>

                {/* Usage tag */}
                <div className="p-2.5 rounded-lg" style={{ background: `${doc.color}08`, borderColor: `${doc.color}15`, border: "1px solid" }}>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: doc.color }}>Purpose</span>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{doc.usage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Document assurance bar */}
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-10 max-w-4xl mx-auto rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { icon: "✅", title: "100% Accuracy", desc: "Double-checked documentation before every shipment" },
              { icon: "📬", title: "Digital Copies", desc: "All documents shared electronically before cargo arrival" },
              { icon: "🌐", title: "Destination Compliant", desc: "Documents prepared per destination country requirements" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 md:p-7 hover:bg-white/[0.04] transition-colors">
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
