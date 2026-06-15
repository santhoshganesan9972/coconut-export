"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   MARKET REGIONS
───────────────────────────────────────────── */
interface MarketRegion {
  region: string;
  description: string;
  countries: string[];
  color: string;
  flag: string;
  pin: { x: number; y: number };
}

const marketRegions: MarketRegion[] = [
  {
    region: "Middle East",
    description:
      "Our most active corridor. Frequent sailings reach Gulf destinations within 5–10 days. Strong demand for premium coconut and coco peat.",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Bahrain"],
    color: "#D4A017",
    flag: "🌍",
    pin: { x: 630, y: 205 },
  },
  {
    region: "Europe",
    description:
      "Well-established routes via Nhava Sheva and Colombo. Serving organic food manufacturers, cosmetic buyers, and industrial processors.",
    countries: ["Germany", "Netherlands", "United Kingdom", "France", "Spain", "Belgium", "Italy"],
    color: "#4A9E6B",
    flag: "🌍",
    pin: { x: 500, y: 130 },
  },
  {
    region: "North America",
    description:
      "Growing demand for organic coco peat and coconut oil. FCL containers via Nhava Sheva with 20–28 day transit to US ports.",
    countries: ["United States", "Canada"],
    color: "#2D7D9A",
    flag: "🌍",
    pin: { x: 200, y: 175 },
  },
  {
    region: "Asia-Pacific",
    description:
      "Chennai Port offers excellent connectivity to Southeast Asia and Oceania. Serving copra buyers, oil refineries, and coco peat distributors.",
    countries: ["Singapore", "Malaysia", "China", "South Korea", "Australia"],
    color: "#9B59B6",
    flag: "🌍",
    pin: { x: 770, y: 270 },
  },
];

const ORIGIN = { x: 669, y: 202, label: "India (Origin)" };

/* ─── Shipping stats ─────────────────────────── */
const shippingStats = [
  { value: "4", label: "Market Regions" },
  { value: "17+", label: "Active Markets" },
  { value: "500+", label: "Containers Shipped" },
  { value: "24h", label: "Response Time" },
];

/* ─────────────────────────────────────────────
   WORLD MAP SVG
───────────────────────────────────────────── */
function WorldMapSVG({ animationsActive }: { animationsActive: boolean }) {
  return (
    <svg
      viewBox="0 0 960 500"
      className="w-full h-full"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 4px 24px rgba(27,67,50,0.18))" }}
    >
      <defs>
        <radialGradient id="mBgGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1B4332" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0a2818" stopOpacity="0" />
        </radialGradient>
        <filter id="mPinGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="960" height="500" fill="#0d2d1f" rx="12" />
      <rect width="960" height="500" fill="url(#mBgGlow)" rx="12" />

      {/* Grid lines */}
      {[100, 167, 222, 278, 333, 389, 444].map((y) => (
        <line key={y} x1="0" y1={y} x2="960" y2={y}
          stroke="#1B4332" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}
      {[96, 192, 288, 384, 480, 576, 672, 768, 864].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="500"
          stroke="#1B4332" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}

      {/* Continent outlines */}
      <path d="M 80,60 L 240,60 L 280,90 L 290,130 L 260,180 L 230,220 L 200,260 L 180,240 L 160,200 L 120,180 L 80,140 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 200,260 L 230,260 L 220,300 L 200,290 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 210,300 L 280,300 L 300,350 L 290,430 L 260,460 L 230,440 L 210,380 L 200,340 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 440,80 L 560,80 L 570,130 L 530,160 L 490,155 L 450,140 L 430,110 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 450,160 L 550,160 L 570,200 L 565,280 L 540,360 L 510,390 L 480,370 L 460,310 L 445,240 L 440,200 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 555,155 L 660,155 L 670,195 L 645,230 L 600,235 L 570,220 L 558,190 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 640,165 L 710,165 L 720,185 L 700,230 L 675,250 L 655,235 L 645,200 Z" fill="#22573e" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 720,190 L 790,190 L 810,220 L 790,250 L 760,260 L 740,240 L 725,215 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 740,100 L 870,100 L 880,150 L 850,180 L 800,195 L 760,185 L 740,155 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 560,40 L 960,40 L 960,110 L 880,110 L 800,100 L 700,95 L 620,85 L 560,80 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      <path d="M 780,300 L 900,300 L 910,360 L 880,400 L 830,410 L 790,380 L 770,340 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />

      {/* Trade routes */}
      {animationsActive && marketRegions.map((region, i) => {
        const mx = (ORIGIN.x + region.pin.x) / 2;
        const my = Math.min(ORIGIN.y, region.pin.y) - 50 - Math.abs(ORIGIN.x - region.pin.x) * 0.06;
        const d = `M ${ORIGIN.x} ${ORIGIN.y} Q ${mx} ${my} ${region.pin.x} ${region.pin.y}`;
        return (
          <motion.path
            key={region.region}
            d={d}
            fill="none"
            stroke={region.color}
            strokeWidth="1.2"
            strokeOpacity="0.55"
            strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.12, ease: "easeInOut" }}
          />
        );
      })}

      {/* Destination pins */}
      {animationsActive && marketRegions.map((region, i) => (          <motion.g
          key={region.region}
          filter="url(#mPinGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1, ease: "backOut" }}
          style={{ originX: `${region.pin.x}px`, originY: `${region.pin.y}px` }}
        >
          <motion.circle
            cx={region.pin.x} cy={region.pin.y} r="10"
            fill="none" stroke={region.color} strokeWidth="1"
            initial={{ r: 6, opacity: 0.8 }}
            animate={{ r: 18, opacity: 0 }}
            transition={{ duration: 1.8, delay: 1.6 + i * 0.1, repeat: Infinity, ease: "easeOut" }}
          />
          <circle cx={region.pin.x} cy={region.pin.y} r="5" fill={region.color} />
          <circle cx={region.pin.x} cy={region.pin.y} r="2.5" fill="#fff" />
        </motion.g>
      ))}

      {/* Origin pin */}
      {animationsActive && (          <motion.g
          filter="url(#mPinGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
          style={{ originX: `${ORIGIN.x}px`, originY: `${ORIGIN.y}px` }}
        >
          <motion.circle
            cx={ORIGIN.x} cy={ORIGIN.y} r="10"
            fill="none" stroke="#4ade80" strokeWidth="1.5"
            initial={{ r: 8, opacity: 0.9 }}
            animate={{ r: 24, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="7" fill="#4ade80" />
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="3.5" fill="#fff" />
          <rect x={ORIGIN.x + 10} y={ORIGIN.y - 18} width="92" height="20" rx="4"
            fill="#0d2d1f" stroke="#4ade80" strokeWidth="0.8" />
          <text x={ORIGIN.x + 14} y={ORIGIN.y - 4}
            fill="#4ade80" fontSize="9" fontFamily="system-ui" fontWeight="600">
            ● India (Origin)
          </text>
        </motion.g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function LogisticsShipping() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [animationsActive, setAnimationsActive] = useState(false);
  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimationsActive(true), 200);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <section
      id="shipping-network"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2d1f 0%, #102a1e 40%, #0a1f16 100%)" }}
      aria-label="Global Shipping Network"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Global Shipping Network</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Serving{" "}
            <span className="text-[#D4A017]">Four Continents</span>
            <br className="hidden sm:block" /> With Reliable Logistics
          </h2>
          <p className="mt-5 text-green-200/60 text-base sm:text-lg max-w-2xl mx-auto">
            From the coconut heartlands of Tamil Nadu, we ship to key markets in the
            Middle East, Europe, North America, and Asia-Pacific.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-10 md:mb-12 border border-white/10"
        >
          {shippingStats.map((stat, i) => (
            <div key={stat.label}
              className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.04] hover:bg-white/[0.08] transition-colors">
              <motion.span
                className="text-3xl sm:text-4xl font-bold text-[#D4A017] leading-none"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: "backOut" }}
              >
                {stat.value}
              </motion.span>
              <span className="text-green-200/50 text-xs uppercase tracking-widest mt-1.5">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Map + Regions layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-8 items-start">

          {/* World Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{ background: "#0d2d1f" }}
          >
            <WorldMapSVG animationsActive={animationsActive} />

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {marketRegions.map((r) => (
                <span key={r.region}
                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/60 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.color }} />
                  {r.region}
                </span>
              ))}
            </div>

            {/* Live badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
              </span>
              <span className="text-[10px] text-green-300 uppercase tracking-widest font-medium">Active Trade Routes</span>
            </div>
          </motion.div>

          {/* Region panels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="space-y-4"
          >
            {/* Route path */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] mb-3 font-semibold">Export Corridor</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                {["India", "Middle East", "Europe", "Americas", "Asia Pacific"].map((leg, i, arr) => (
                  <span key={leg} className="flex items-center gap-2">
                    <span className="text-white/80 font-medium">{leg}</span>
                    {i < arr.length - 1 && (
                      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                        <path d="M0 4h13M10 1l3 3-3 3" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Region cards */}
            {marketRegions.map((region, regionIndex) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + regionIndex * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: region.color }} />
                    <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] font-semibold">{region.region}</p>
                  </div>
                  <span className="text-[10px] text-white/30 bg-white/5 rounded-full px-2 py-0.5">
                    {region.countries.length} {region.countries.length === 1 ? "market" : "markets"}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-white/50 leading-relaxed mb-3 border-l-2 border-[#D4A017]/30 pl-3">
                    {region.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {region.countries.map((country) => (
                      <span key={country}
                        className="text-[10px] text-white/60 bg-white/[0.05] border border-white/10 rounded-full px-2.5 py-1 font-medium">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5 p-4 flex items-start gap-3"
            >
              <span className="text-xl mt-0.5" aria-hidden="true">🛳️</span>
              <div>
                <p className="text-white/90 text-sm font-semibold">Need a different routing?</p>
                <p className="text-white/40 text-xs mt-0.5 leading-relaxed">
                  We can arrange shipments from additional ports or via transshipment hubs based on your destination.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
        >
          {[
            {
              icon: "🛳️",
              title: "Multi-Port Loading",
              desc: "Chennai, Tuticorin & Nhava Sheva — flexible departure options to optimize transit times and freight costs.",
            },
            {
              icon: "📋",
              title: "End-to-End Documentation",
              desc: "Certificate of Origin, Phytosanitary, Bill of Lading & customs clearance handled by our export team.",
            },
            {
              icon: "🔒",
              title: "Secure Payment Terms",
              desc: "LC, TT & escrow-friendly. We work with your preferred trade finance and compliance requirements.",
            },
          ].map((item) => (
            <div key={item.title}
              className="flex items-start gap-4 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
