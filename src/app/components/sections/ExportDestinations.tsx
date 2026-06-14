"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { regionGroups } from "@/data/sections";

/* ─────────────────────────────────────────────
   DESTINATION DATA  (lat/lng → SVG x/y mapped
   onto a 960 × 500 equirectangular projection)
   x = (lng + 180) / 360 * 960
   y = (90  - lat)  / 180 * 500
───────────────────────────────────────────── */
interface DestinationPin {
  country: string;
  region: string;
  flag: string;
  x: number;
  y: number;
  continent: string;
}

const ORIGIN: { x: number; y: number; label: string } = {
  x: 694,  // 80.27°E (Chennai/Tamil Nadu)
  y: 213,  // 13.08°N
  label: "India (Origin)",
};

const destinationPins: DestinationPin[] = [
  // Middle East
  { country: "United Arab Emirates", region: "Middle East", flag: "🇦🇪", x: 627, y: 180, continent: "Middle East" },
  { country: "Saudi Arabia",         region: "Middle East", flag: "🇸🇦", x: 600, y: 184, continent: "Middle East" },
  // Southeast Asia
  { country: "Singapore",            region: "Southeast Asia", flag: "🇸🇬", x: 756, y: 246, continent: "Asia Pacific" },
  { country: "Malaysia",             region: "Southeast Asia", flag: "🇲🇾", x: 751, y: 238, continent: "Asia Pacific" },
  // Europe
  { country: "Germany",              region: "Europe",        flag: "🇩🇪", x: 507, y: 108, continent: "Europe" },
  { country: "Netherlands",          region: "Europe",        flag: "🇳🇱", x: 492, y: 105, continent: "Europe" },
  // North America
  { country: "United States",        region: "North America", flag: "🇺🇸", x: 282, y: 136, continent: "Americas" },
  // Oceania
  { country: "Australia",            region: "Oceania",       flag: "🇦🇺", x: 883, y: 343, continent: "Asia Pacific" },
];

/* Continents with colour bands used for the legend */
const REGIONS = [
  { label: "Middle East",  color: "#D4A017",  count: 2 },
  { label: "Europe",       color: "#4A9E6B",  count: 2 },
  { label: "Asia Pacific", color: "#2D7D9A",  count: 3 },
  { label: "Americas",     color: "#9B59B6",  count: 1 },
];

/* ─────────────────────────────────────────────
   COMPACT STATS DATA — emoji chips
───────────────────────────────────────────── */
const NETWORK_STATS = [
  { icon: "🌍", value: "15+", label: "Markets" },
  { icon: "🚢", value: "500+", label: "Containers" },
  { icon: "🏆", value: "10+", label: "Years" },
  { icon: "🤝", value: "200+", label: "Partners" },
];

/* ─────────────────────────────────────────────
   WORLD MAP SVG - Professional Realistic Map
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
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stopColor="#1B4332" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0a2818" stopOpacity="0" />
        </radialGradient>
        <filter id="pinGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ocean background */}
      <rect width="960" height="500" fill="#0d2d1f" rx="12" />
      <rect width="960" height="500" fill="url(#bgGlow)" rx="12" />

      {/* Latitude grid lines */}
      {[100, 167, 222, 278, 333, 389, 444].map((y) => (
        <line key={y} x1="0" y1={y} x2="960" y2={y}
          stroke="#1B4332" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}
      {/* Longitude grid lines */}
      {[96, 192, 288, 384, 480, 576, 672, 768, 864].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="500"
          stroke="#1B4332" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}

      {/* ── High-Fidelity Realistic World Map ── */}
      <g fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
        {/* North America */}
        <path d="M125,45 L155,40 L195,55 L220,100 L210,140 L180,175 L140,185 L95,170 L75,130 L85,85 Z" />
        <path d="M210,140 L245,150 L285,185 L300,230 L270,275 L225,260 L200,220 L200,165 Z" />
        <path d="M235,50 L265,40 L290,55 L295,95 L270,120 L240,110 Z" /> {/* Greenland */}
        <path d="M100,45 L120,35 L140,45 L135,65 L110,65 Z" /> {/* Alaska Islands */}

        {/* South America */}
        <path d="M275,275 L320,285 L360,325 L375,390 L350,490 L300,470 L265,420 L260,340 L250,290 Z" />

        {/* Africa */}
        <path d="M440,195 L490,180 L560,175 L615,200 L645,260 L655,340 L605,440 L520,480 L460,450 L435,350 L425,250 Z" />
        <path d="M635,340 L660,355 L675,400 L650,430 L620,420 L610,380 Z" /> {/* Madagascar */}

        {/* Europe */}
        <path d="M430,160 L470,140 L540,130 L590,150 L600,210 L565,260 L500,270 L445,245 Z" />
        <path d="M480,85 L515,80 L545,100 L540,140 L510,160 L480,140 Z" /> {/* Scandinavia */}
        <path d="M455,105 L480,100 L495,125 L485,155 L460,160 L445,135 Z" /> {/* UK */}

        {/* Asia */}
        <path d="M590,150 L680,120 L820,110 L940,150 L960,250 L920,380 L820,410 L650,400 L560,340 L550,210 Z" />
        <path d="M640,220 L695,235 L740,285 L720,355 L650,370 L610,320 L600,260 Z" /> {/* India */}
        <path d="M840,150 L880,165 L900,210 L885,260 L850,250 L830,200 Z" /> {/* Japan */}
        <path d="M770,300 L810,310 L840,350 L825,390 L780,380 L755,340 Z" /> {/* SE Asia Islands */}

        {/* Oceania */}
        <path d="M810,390 L895,380 L960,420 L940,500 L840,510 L780,460 L785,390 Z" />
        <path d="M940,430 L965,445 L955,490 L935,480 L925,445 Z" /> {/* NZ */}
      </g>

      {/* ── Trade Routes from Origin ── */}
      {animationsActive && destinationPins.map((pin, i) => {
        const mx = (ORIGIN.x + pin.x) / 2;
        const my = Math.min(ORIGIN.y, pin.y) - 55 - Math.abs(ORIGIN.x - pin.x) * 0.06;
        const d = `M ${ORIGIN.x} ${ORIGIN.y} Q ${mx} ${my} ${pin.x} ${pin.y}`;
        return (
          <motion.path
            key={pin.country}
            d={d}
            fill="none"
            stroke="#D4A017"
            strokeWidth="1.2"
            strokeOpacity="0.55"
            strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.12, ease: "easeInOut" }}
          />
        );
      })}

      {/* ── Destination Pins ── */}
      {animationsActive && destinationPins.map((pin, i) => (
        <motion.g
          key={pin.country}
          filter="url(#pinGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1, ease: "backOut" }}
          style={{ originX: `${pin.x}px`, originY: `${pin.y}px` }}
        >
          <motion.circle
            cx={pin.x} cy={pin.y} r="10"
            fill="none" stroke="#D4A017" strokeWidth="1"
            initial={{ r: 6, opacity: 0.8 }}
            animate={{ r: 18, opacity: 0 }}
            transition={{ duration: 1.8, delay: 1.6 + i * 0.1, repeat: Infinity, ease: "easeOut" }}
          />
          <circle cx={pin.x} cy={pin.y} r="5" fill="#D4A017" />
          <circle cx={pin.x} cy={pin.y} r="2.5" fill="#fff" />
        </motion.g>
      ))}

      {/* ── Origin Pin ── */}
      {animationsActive && (
        <motion.g
          filter="url(#pinGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
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
   COMPACT STAT CHIP — emoji inline with count-up
───────────────────────────────────────────── */
function StatChip({ icon, value, label, delay }: { icon: string; value: string; label: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const target = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(target)) {
      ref.current.textContent = value;
      return;
    }

    const suffix = value.replace(/[0-9]/g, "");
    let current = 0;
    const step = Math.max(1, Math.floor(target / 45));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      if (ref.current) ref.current.textContent = current + suffix;
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex items-center gap-2.5 bg-white/[0.05] border border-white/10 rounded-lg px-3.5 py-2.5 shadow-lg shadow-black/10 hover:bg-white/[0.08] transition-colors"
    >
      <span className="text-base" aria-hidden="true">{icon}</span>
      <span
        ref={ref}
        className="text-base font-bold text-[#D4A017] leading-none"
      >
        {value}
      </span>
      <span className="text-[11px] text-green-200/60 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function ExportDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [animationsActive, setAnimationsActive] = useState(false);
  const [activePin, setActivePin] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimationsActive(true), 200);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  /* Collect all unique countries for compact badges row */
  const allCountries = regionGroups.flatMap((g) => g.countries);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative py-10 md:py-14 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2d1f 0%, #102a1e 40%, #0a1f16 100%)" }}
      aria-label="Export Destinations"
    >
      {/* ── Background texture ── */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Radial accent glows ── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* ══════════════════════════════════════════════════════════════
            TWO-COLUMN LAYOUT — Desktop: left text+stats, right map
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10 items-center">

          {/* ── MAP COLUMN (order-first on mobile per user request) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden border border-white/10 order-first lg:order-none"
            style={{ background: "#0d2d1f" }}
          >
            <WorldMapSVG animationsActive={animationsActive} />

            {/* Region Legend overlay */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {REGIONS.map((r) => (
                <span key={r.label}
                  className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-white/60 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.color }} />
                  {r.label}
                </span>
              ))}
            </div>

            {/* "Live Network" badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ade80]" />
              </span>
              <span className="text-[9px] text-green-300 uppercase tracking-widest font-medium">Active Routes</span>
            </div>
          </motion.div>

          {/* ── CONTENT COLUMN: Heading + Description + Stats + Route (order-last on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-last lg:order-none"
          >
            <div className="space-y-5">
              {/* Small premium heading */}
              <p className="text-[#D4A017] uppercase tracking-[5px] text-xs font-semibold">
                Global Trade Network
              </p>

              {/* Main headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Shipping to{" "}
                <span className="text-[#D4A017]">Every Corner</span>
                {" "}of the World
              </h2>

              {/* Short supporting description (2 lines max) */}
              <p className="text-green-200/60 text-sm leading-relaxed max-w-md">
                From the coconut heartlands of Tamil Nadu, our export routes span 4 continents — delivering consistent quality to premium buyers worldwide.
              </p>

              {/* ── Premium Mini Stats Cards (2x2 grid) ── */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {NETWORK_STATS.map((stat, i) => (
                  <StatChip
                    key={stat.label}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    delay={0.2 + i * 0.08}
                  />
                ))}
              </div>

              {/* ── Compact Export Route Indicator ── */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <div className="flex items-center flex-wrap gap-x-1.5 gap-y-1 text-[11px] text-white/50">
                  <span className="text-[9px] uppercase tracking-[2px] text-[#D4A017]/80 font-semibold mr-1">Route:</span>
                  {["India", "Middle East", "Europe", "Americas", "Asia Pacific"].map((leg, i, arr) => (
                    <span key={leg} className="flex items-center gap-1">
                      <span className="text-white/70 font-medium">{leg}</span>
                      {i < arr.length - 1 && (
                        <svg width="14" height="7" viewBox="0 0 14 7" fill="none" aria-hidden="true" className="flex-shrink-0">
                          <path d="M0 3.5h11M8.5 1l3 2.5-3 2.5" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            COMPACT COUNTRY BADGES ROW (below map + text)
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[2px] text-[#D4A017]/60 font-semibold mr-1">
            Markets:
          </span>
          {allCountries.map((dest) => (
            <button
              key={dest.country}
              onClick={() => setActivePin(activePin === dest.country ? null : dest.country)}
              className={`
                flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium
                border transition-all duration-200 cursor-pointer
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]
                ${activePin === dest.country
                  ? "bg-[#D4A017]/15 border-[#D4A017]/50 text-white"
                  : "bg-white/[0.04] border-white/10 text-white/60 hover:border-[#D4A017]/30 hover:text-white hover:bg-white/[0.07]"
                }
              `}
              aria-pressed={activePin === dest.country}
            >
              <span className="text-sm leading-none" aria-hidden="true">{dest.flag}</span>
              <span>{dest.country}</span>
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
