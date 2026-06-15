"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { trackOutboundClick } from "@/lib/analytics";
import ConsultationModal from "./ConsultationModal";

/* ─────────────────────────────────────────────────────
   INQUIRY → SHIPMENT JOURNEY  (left panel storytelling)
───────────────────────────────────────────────────────*/
const JOURNEY = [
  { num: "01", label: "Inquiry",      sub: "Submit your requirements"  },
  { num: "02", label: "Consultation", sub: "Talk to our export team"   },
  { num: "03", label: "Quotation",    sub: "Receive competitive pricing"},
  { num: "04", label: "Shipment",     sub: "We handle door-to-port"    },
];

/* ─────────────────────────────────────────────────────
   TRUST SIGNALS
───────────────────────────────────────────────────────*/
const TRUST = [
  { icon: "⏱", text: "Response within 24 hours"         },
  { icon: "🌐", text: "Export Consultation Available"    },
  { icon: "📦", text: "Logistics Assistance"             },
  { icon: "📋", text: "Documentation Support"            },
];

/* ─────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────*/
export default function RFQCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" });
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-10 md:py-14 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)",
      }}
      aria-label="Request For Quotation"
    >
      {/* ── Background: subtle world map dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)',
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ── Background: faint continent silhouettes ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{ opacity: 0.04 }}
      >
        {/* North America */}
        <path d="M 80,100 L 280,100 L 320,150 L 330,220 L 290,290 L 250,340 L 210,310 L 170,260 L 120,230 Z" fill="#D4A017"/>
        {/* South America */}
        <path d="M 220,370 L 310,370 L 340,430 L 330,530 L 290,570 L 250,545 L 225,470 Z" fill="#D4A017"/>
        {/* Europe */}
        <path d="M 570,100 L 740,100 L 755,175 L 710,210 L 650,200 L 595,180 Z" fill="#D4A017"/>
        {/* Africa */}
        <path d="M 590,215 L 720,215 L 745,270 L 740,380 L 700,440 L 655,440 L 610,390 L 592,300 Z" fill="#D4A017"/>
        {/* Middle East */}
        <path d="M 730,190 L 870,190 L 880,250 L 845,290 L 785,295 L 745,265 Z" fill="#D4A017"/>
        {/* South Asia */}
        <path d="M 855,210 L 940,210 L 950,245 L 930,295 L 895,320 L 865,300 Z" fill="#4ade80"/>
        {/* SE Asia / Australia */}
        <path d="M 980,250 L 1080,250 L 1100,300 L 1060,340 L 1010,335 Z" fill="#D4A017"/>
        <path d="M 1060,380 L 1200,380 L 1215,455 L 1180,500 L 1120,510 L 1075,475 Z" fill="#D4A017"/>
      </svg>

      {/* ── Radial glow spots ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 20%, rgba(212,160,23,0.10) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 80%, rgba(27,67,50,0.25) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* ── Top border accent ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* ════════════════════════════════════
            SPLIT LAYOUT: Left brand | Right CTA
        ════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

          {/* ───────────────────────────
              LEFT PANEL — Brand & Journey
          ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Pre-label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A017] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A017]" />
                </span>
              </div>
              <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
                Export Enquiries Open
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-[1.12] mb-6">
              Start Your
              <br />
              <span className="text-[#D4A017]">Global Procurement</span>
              <br />
              Partnership
            </h2>

            {/* Sub-copy */}
            <p className="text-green-200/60 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              We work directly with importers and distributors in 15+ countries — delivering premium coconut commodities at commercial scale.
            </p>

            {/* ── Trust signals ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {TRUST.map((t) => (
                <div
                  key={t.text}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3 hover:bg-white/[0.07] transition-colors"
                >
                  <span className="text-base flex-shrink-0" aria-hidden="true">{t.icon}</span>
                  <span className="text-white/70 text-xs font-medium leading-snug">{t.text}</span>
                </div>
              ))}
            </div>

            {/* ── Export Services Strip ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
              {[
                { icon: "📋", label: "Free Consultation" },
                { icon: "📄", label: "Competitive Quotation" },
                { icon: "🚢", label: "Logistics Support" },
                { icon: "✅", label: "End-to-End Docs" },
              ].map((service) => (
                <div
                  key={service.label}
                  className="flex flex-col items-center text-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2 py-3 hover:bg-white/[0.06] transition-colors"
                >
                  <span className="text-lg" aria-hidden="true">{service.icon}</span>
                  <span className="text-white/50 text-[10px] font-semibold uppercase tracking-wide leading-tight">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Inquiry → Shipment journey ── */}
            <div>
              <p className="text-[10px] uppercase tracking-[4px] text-white/30 mb-5 font-semibold">
                How It Works
              </p>
              <div className="flex flex-col sm:flex-row gap-0 sm:gap-0">
                {JOURNEY.map((step, i) => (
                  <div key={step.num} className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 flex-1">
                    <div className="flex sm:flex-col items-start sm:items-start gap-3 flex-1 relative pb-6 sm:pb-0 sm:pr-4">
                      {i < JOURNEY.length - 1 && (
                        <div
                          className="absolute left-5 top-10 bottom-0 w-px bg-white/10 sm:hidden"
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 flex items-center justify-center">
                        <span className="text-[#D4A017] text-[11px] font-black tracking-tight">
                          {step.num}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <p className="text-white font-semibold text-sm leading-snug">{step.label}</p>
                        <p className="text-white/35 text-xs mt-0.5">{step.sub}</p>
                      </div>
                    </div>

                    {i < JOURNEY.length - 1 && (
                      <div className="hidden sm:flex flex-shrink-0 items-center self-center mb-4" aria-hidden="true">
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                          <path d="M0 5h16M13 2l3 3-3 3" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Certifications strip ── */}
            <div className="mt-10 flex flex-wrap items-center gap-3 pt-8 border-t border-white/8">
              <span className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mr-2">
                Certified
              </span>
              {["ISO 22000", "HACCP", "APEDA", "SGS Verified"].map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] font-bold text-white/50 border border-white/10 rounded-full px-2.5 py-1 bg-white/[0.04]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ─────────────────────────
              RIGHT PANEL — CTA to /rfq
          ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div                  onClick={() => {
                    trackOutboundClick({ type: "request_quote", label: "Homepage RFQ CTA Card" });
                    window.location.href = '/rfq';
                  }}
                  className="group block relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 cursor-pointer"
            >
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#f5c842] to-[#D4A017]" aria-hidden="true" />

              <div className="bg-white rounded-2xl">
                {/* Card header */}
                <div className="px-8 pt-8 pb-5 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#111827] leading-tight">
                        Request Bulk Quotation
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                        Complete the detailed RFQ form
                      </p>
                    </div>
                    {/* 24h response badge */}
                    <div className="flex-shrink-0 ml-4 flex flex-col items-center text-center bg-[#1B4332]/6 border border-[#1B4332]/12 rounded-xl px-3 py-2">
                      <span className="text-[#1B4332] font-black text-lg leading-none">24h</span>
                      <span className="text-[#1B4332]/60 text-[9px] uppercase tracking-wider font-semibold leading-none mt-0.5">Response</span>
                    </div>
                  </div>
                </div>

                {/* CTA body */}
                <div className="px-8 py-8">
                  {/* Feature list */}
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: "📦", text: "Multi-product selection with volume options" },
                      { icon: "🚢", text: "Shipping details & incoterm preferences" },
                      { icon: "🏢", text: "Company verification for priority response" },
                      { icon: "📄", text: "Customized quotation with full cost breakdown" },
                    ].map((feature) => (
                      <div key={feature.text} className="flex items-center gap-3">
                        <span className="text-lg flex-shrink-0" aria-hidden="true">{feature.icon}</span>
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Primary CTA */}
                  <div className="w-full flex items-center justify-center gap-2.5 bg-[#1B4332] text-white font-bold text-sm py-4 rounded-xl group-hover:bg-[#143a28] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#1B4332]/25">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Request Bulk Quotation
                  </div>

                  {/* Secondary CTA */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      trackOutboundClick({ type: "schedule_consultation", label: "Homepage Schedule Consultation" });
                      setConsultModalOpen(true);
                    }}
                    className="mt-3 w-full flex items-center justify-center gap-2 border border-[#1B4332]/20 text-[#1B4332] font-semibold text-sm py-3.5 rounded-xl hover:bg-[#1B4332]/5 hover:border-[#1B4332]/35 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <rect x="1" y="2" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M1 6h13" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M5 1v2M10 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    Schedule Consultation
                  </button>

                  {/* Privacy note */}
                  <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                    🔒 Your details are used only to respond to your enquiry. We do not share your information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════
            BOTTOM SOCIAL PROOF BAR
        ════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8"
        >
          {[
            { value: "15+",   label: "Countries Served"    },
            { value: "500+",  label: "Containers Exported" },
            { value: "10+",   label: "Years of Exporting"  },
            { value: "24 h",  label: "Response Guarantee"  },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.07, ease: "backOut" }}
              className="flex flex-col items-center justify-center py-7 px-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <span className="text-3xl font-bold text-[#D4A017] leading-none">
                {s.value}
              </span>
              <span className="text-white/35 text-[10px] uppercase tracking-widest mt-1.5 text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </section>
  );
}
