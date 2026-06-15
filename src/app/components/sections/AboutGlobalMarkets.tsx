"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp, parseStatValue } from "@/lib/countUp";

/* ─── Animated stat bar item ──────────────────────────────────────────── */
function AnimatedStatBarItem({
  value,
  label,
  index,
  isVisible,
}: {
  value: string;
  label: string;
  index: number;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1600 + index * 100, isVisible);

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.04] hover:bg-white/[0.08] transition-colors">
      <motion.span
        className="text-3xl sm:text-4xl font-bold text-[#D4A017] leading-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.08, ease: "backOut" }}
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        <span className="text-[#D4A017]">{suffix}</span>
      </motion.span>
      <span className="text-green-200/50 text-xs uppercase tracking-widest mt-1.5">
        {label}
      </span>
    </div>
  );
}

/* ─── Market regions ──────────────────────────────────────────────────── */
const markets = [
  {
    region: "Middle East",
    flag: "🌍",
    description:
      "Our largest market — weekly container shipments to GCC nations. Deep importer relationships ensure smooth customs clearance and distribution.",
    color: "#D4A017",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Bahrain"],
    stat: "Primary market",
  },
  {
    region: "Europe",
    flag: "🌍",
    description:
      "Growing demand for premium coconut products across the EU. Shipments to Rotterdam and Hamburg with full EU phytosanitary compliance.",
    color: "#4A9E6B",
    countries: ["Germany", "Netherlands", "United Kingdom"],
    stat: "Expanding presence",
  },
  {
    region: "North America",
    flag: "🌎",
    description:
      "Serving the natural foods sector, wholesale clubs, and processors in the USA and Canada. All shipments comply with FDA and USDA standards.",
    color: "#2D7D9A",
    countries: ["United States", "Canada"],
    stat: "Strategic growth",
  },
  {
    region: "Asia-Pacific",
    flag: "🌏",
    description:
      "Fast-growing markets across Southeast Asia, Oceania, and East Asia. Proximity to Singapore and Port Klang hubs enables rapid transit and cost-effective logistics.",
    color: "#9B59B6",
    countries: ["Malaysia", "Singapore", "Australia", "New Zealand", "South Korea", "Japan"],
    stat: "Rapid growth",
  },
];

export default function AboutGlobalMarkets() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="global-markets"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2d1f 0%, #102a1e 40%, #0a1f16 100%)" }}
      aria-label="Global Market Focus"
    >
      {/* ── Background dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)',
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ── Radial glows ── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Global Market Focus
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Serving Markets{" "}
            <span className="text-[#D4A017]">Across the Globe</span>
          </h2>
          <p className="mt-5 text-green-200/60 text-base sm:text-lg max-w-2xl mx-auto">
            From the Middle East to the Americas, our export network delivers
            consistent quality to premium buyers on four continents.
          </p>
        </motion.div>

        {/* ── Stats bar (animated) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-10 md:mb-12 border border-white/10"
        >
          {[
            { value: "4", label: "Continents" },
            { value: "17+", label: "Active Markets" },
            { value: "500+", label: "Containers Shipped" },
            { value: "24h", label: "Response Time" },
          ].map((stat, i) => (
            <AnimatedStatBarItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={i}
              isVisible={isInView}
            />
          ))}
        </motion.div>

        {/* ── Market regions grid ── */}
        <div className="grid sm:grid-cols-2 gap-4">
          {markets.map((market, i) => (
            <motion.div
              key={market.region}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.06] transition-colors group"
            >
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: market.color }}
                  />
                  <p className="text-xs uppercase tracking-[3px] text-[#D4A017] font-semibold">
                    {market.region}
                  </p>
                </div>
                <span className="text-[10px] text-white/30 bg-white/5 rounded-full px-2 py-0.5">
                  {market.countries.length} markets
                </span>
              </div>
              <div className="p-5">
                <p className="text-[12px] text-white/50 leading-relaxed mb-4 border-l-2 border-[#D4A017]/30 pl-3">
                  {market.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {market.countries.map((country) => (
                    <span
                      key={country}
                      className="text-[10px] text-white/60 bg-white/[0.05] border border-white/10 rounded-full px-2.5 py-1 font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <span className="text-[9px] uppercase tracking-widest text-[#D4A017]/60 font-semibold">
                    {market.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Capability footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5 p-4 flex items-start gap-3 max-w-3xl mx-auto"
        >
          <span className="text-2xl mt-0.5" aria-hidden="true">🌐</span>
          <div>
            <p className="text-white/90 text-sm font-semibold">
              Expanding to new markets?
            </p>
            <p className="text-white/40 text-xs mt-1 leading-relaxed">
              We regularly evaluate new trade corridors and can support shipments
              to destinations beyond our current active markets. Contact our team
              to discuss your specific import requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
