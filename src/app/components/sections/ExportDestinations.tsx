"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { exportDestinations, regionGroups } from "@/data/sections";

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
  x: 669,  // ~80°E
  y: 202,  // ~13°N  (Tamil Nadu, India)
  label: "India (Origin)",
};

const destinationPins: DestinationPin[] = [
  // Middle East
  { country: "United Arab Emirates", region: "Middle East", flag: "🇦🇪", x: 632, y: 198, continent: "Middle East" },
  { country: "Saudi Arabia",         region: "Middle East", flag: "🇸🇦", x: 610, y: 210, continent: "Middle East" },
  // Southeast Asia
  { country: "Singapore",            region: "Southeast Asia", flag: "🇸🇬", x: 762, y: 255, continent: "Asia Pacific" },
  { country: "Malaysia",             region: "Southeast Asia", flag: "🇲🇾", x: 754, y: 248, continent: "Asia Pacific" },
  // Europe
  { country: "Germany",              region: "Europe",        flag: "🇩🇪", x: 490, y: 130, continent: "Europe" },
  { country: "Netherlands",          region: "Europe",        flag: "🇳🇱", x: 482, y: 123, continent: "Europe" },
  // North America
  { country: "United States",        region: "North America", flag: "🇺🇸", x: 200, y: 175, continent: "Americas" },
  // Oceania
  { country: "Australia",            region: "Oceania",       flag: "🇦🇺", x: 820, y: 345, continent: "Asia Pacific" },
];

/* Continents with colour bands used for the legend */
const REGIONS = [
  { label: "Middle East",  color: "#D4A017",  count: 2 },
  { label: "Europe",       color: "#4A9E6B",  count: 2 },
  { label: "Asia Pacific", color: "#2D7D9A",  count: 3 },
  { label: "Americas",     color: "#9B59B6",  count: 1 },
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

      {/* ── Realistic World Map Continents ── */}
      {/* North America */}
      <path d="M 38,70 C 48,62 62,57 78,55 C 92,52 108,48 125,44 C 142,40 158,37 172,36 C 185,35 194,37 202,40 L 212,43 C 220,45 226,50 230,55 C 234,60 235,66 230,72 C 225,78 218,80 210,78 C 204,76 198,70 192,62 L 186,56 C 180,58 182,66 186,72 C 190,78 192,84 186,90 L 180,94 C 172,100 166,106 160,112 C 154,118 150,125 148,132 C 146,138 150,140 156,138 L 163,136 C 167,132 166,128 162,125 L 156,127 C 162,134 170,140 178,142 C 186,144 192,148 190,154 C 184,162 176,170 168,178 C 160,186 154,194 150,200 C 146,206 142,210 140,214 C 138,218 136,222 138,226 C 140,230 144,232 146,226 C 150,218 154,210 158,202 C 162,194 164,188 162,182 C 158,174 152,166 146,160 C 140,154 134,148 130,142 C 126,136 120,130 116,124 C 110,116 104,108 98,100 C 92,92 86,84 78,78 C 70,72 62,72 54,74 C 46,76 40,74 38,70 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Greenland */}
      <path d="M 220,36 C 228,34 238,36 244,42 C 250,48 252,56 248,64 C 244,72 236,76 228,74 C 220,72 214,66 212,58 C 210,50 214,42 220,36 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* South America */}
      <path d="M 280,228 C 290,226 300,230 310,236 C 320,242 330,244 340,246 C 350,248 358,252 362,258 C 366,264 368,272 366,282 C 364,292 358,304 350,316 C 342,328 334,340 326,352 C 318,364 310,376 304,388 C 298,400 294,410 290,416 C 286,422 282,424 278,420 C 274,416 272,406 270,394 C 268,382 266,368 264,354 C 262,340 260,324 258,310 C 256,296 254,282 256,270 C 258,258 264,248 272,240 C 276,234 278,230 280,228 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Europe */}
      <path d="M 444,130 C 450,124 458,118 464,114 C 470,110 476,106 480,104 C 484,100 486,94 490,90 C 494,86 500,82 506,80 C 512,78 518,80 522,84 C 526,88 528,94 530,100 C 532,106 534,110 536,114 C 540,112 546,110 550,112 C 554,114 556,118 554,124 C 552,130 548,134 544,136 C 540,138 536,140 532,142 C 528,144 524,148 520,150 C 516,152 512,154 508,152 C 504,150 500,148 496,146 C 492,144 488,140 484,138 C 480,136 476,134 472,134 C 466,134 460,136 454,138 C 448,140 444,136 444,130 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* United Kingdom & Ireland */}
      <path d="M 464,100 C 468,96 474,94 478,98 C 482,102 480,108 476,112 C 472,116 466,114 464,110 C 462,106 462,102 464,100 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Scandinavia */}
      <path d="M 520,72 C 528,68 536,66 540,70 C 544,74 546,80 544,86 C 542,92 538,96 534,98 C 530,100 526,98 524,94 C 522,90 520,84 520,78 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Africa */}
      <path d="M 460,156 C 470,152 480,150 492,152 C 504,154 514,158 522,164 C 530,170 536,178 542,188 C 548,198 552,208 556,220 C 560,232 564,244 566,256 C 568,268 568,282 566,296 C 564,310 560,322 554,332 C 548,342 540,350 532,354 C 524,358 516,356 510,350 C 504,344 500,334 496,322 C 492,310 488,296 484,282 C 480,268 476,254 472,242 C 468,230 464,218 460,208 C 456,198 454,188 454,180 C 454,172 456,164 460,156 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Madagascar */}
      <path d="M 574,294 C 578,290 582,288 584,292 C 586,296 586,302 584,308 C 582,314 578,318 574,316 C 570,314 568,308 568,302 C 568,296 570,294 574,294 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Middle East — Arabian Peninsula */}
      <path d="M 576,168 C 584,164 594,162 604,164 C 614,166 622,172 628,180 C 634,188 636,198 632,206 C 628,214 622,218 614,220 C 606,222 598,220 592,216 C 586,212 582,206 580,198 C 578,190 576,180 576,168 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* India Subcontinent */}
      <path d="M 648,168 C 656,164 664,164 670,168 C 676,172 680,180 682,190 C 684,200 684,210 682,218 C 680,226 676,232 670,234 C 664,236 658,234 654,228 C 650,222 648,214 648,204 C 648,194 648,180 648,168 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Sri Lanka */}
      <path d="M 668,240 C 672,238 676,240 676,244 C 676,248 672,250 668,250 C 664,250 662,246 664,242 C 664,240 666,240 668,240 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Central Asia & Middle East (Iran / Afghanistan / Pakistan) */}
      <path d="M 598,158 C 608,154 618,152 628,154 C 638,156 646,160 650,166 C 654,172 654,178 650,182 C 646,186 640,186 634,184 C 628,182 620,178 612,176 C 604,174 598,170 596,166 C 594,162 596,160 598,158 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* East Asia - China & Korea & Southeast Asia mainland */}
      <path d="M 668,130 C 680,126 694,124 706,126 C 718,128 728,134 736,142 C 744,150 748,160 750,172 C 752,184 752,196 750,208 C 748,220 744,230 738,238 C 732,246 724,250 716,250 C 708,250 702,246 698,240 C 694,234 692,226 690,218 C 688,210 686,200 684,190 C 682,180 680,170 678,162 C 676,154 674,146 672,140 C 670,136 668,132 668,130 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Southeast Asian Peninsula (Indochina + Malay) */}
      <path d="M 718,244 C 726,240 734,238 742,240 C 750,242 756,248 760,256 C 764,264 764,274 760,280 C 756,286 750,288 744,286 C 738,284 732,278 728,270 C 724,262 720,254 718,244 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Japan */}
      <path d="M 778,118 C 782,114 786,112 788,116 C 790,120 790,128 788,136 C 786,144 782,148 778,146 C 774,144 772,138 772,130 C 772,122 774,118 778,118 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Korean Peninsula */}
      <path d="M 758,130 C 762,128 766,128 768,132 C 770,136 770,142 768,148 C 766,154 762,156 758,154 C 754,152 752,146 752,140 C 752,134 754,130 758,130 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Indonesia / Philippines / Island Southeast Asia */}
      <path d="M 740,272 C 748,268 756,266 764,268 C 772,270 778,276 784,284 C 790,292 794,300 796,308 C 798,316 796,320 792,320 C 788,320 784,316 780,310 C 776,304 770,298 764,294 C 758,290 750,286 744,284 C 738,282 734,278 740,272 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Sumatra */}
      <path d="M 724,270 C 728,266 732,264 734,268 C 736,272 736,278 734,282 C 732,286 728,288 724,286 C 720,284 718,278 718,274 C 718,270 720,270 724,270 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Borneo */}
      <path d="M 766,266 C 772,262 778,262 780,266 C 782,270 780,276 776,280 C 772,284 766,284 764,280 C 762,276 762,270 766,266 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* New Guinea */}
      <path d="M 810,264 C 818,260 826,260 830,264 C 834,268 834,274 830,278 C 826,282 818,282 814,278 C 810,274 808,268 810,264 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Philippines */}
      <path d="M 772,224 C 776,220 780,218 782,222 C 784,226 784,232 782,238 C 780,244 776,246 772,244 C 768,242 766,236 766,230 C 766,224 768,224 772,224 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Australia */}
      <path d="M 780,332 C 790,326 802,322 814,324 C 826,326 836,332 844,342 C 852,352 856,364 854,376 C 852,388 846,396 838,402 C 830,408 820,410 810,408 C 800,406 792,400 786,392 C 780,384 776,374 774,364 C 772,354 774,344 780,332 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Tasmania */}
      <path d="M 832,410 C 836,408 840,408 840,412 C 840,416 836,418 832,418 C 828,418 826,414 828,412 C 828,410 830,410 832,410 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* New Zealand */}
      <path d="M 902,362 C 906,358 910,358 912,362 C 914,366 914,372 912,378 C 910,384 906,388 902,386 C 898,384 896,378 896,372 C 896,366 898,362 902,362 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />
      {/* Russia / Northern Asia */}
      <path d="M 556,40 C 580,32 610,28 640,28 C 670,28 700,30 728,36 C 756,42 780,52 800,64 C 820,76 836,88 848,96 C 860,104 868,108 874,108 C 880,108 884,104 886,98 C 888,92 888,84 886,76 C 884,68 880,60 874,54 C 868,48 860,44 850,42 C 840,40 828,40 816,40 C 804,40 790,38 776,36 C 762,34 748,32 734,30 C 720,28 706,28 692,28 C 678,28 664,30 650,32 C 636,34 622,38 610,42 C 598,46 588,50 580,54 C 572,58 566,60 560,58 C 554,56 552,50 556,40 Z" fill="#1B4332" stroke="#2d6a4f" strokeWidth="0.8" />

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

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative py-14 md:py-18 overflow-hidden"
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

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-[#D4A017] uppercase tracking-[5px] text-xs font-semibold mb-4">
            Global Trade Network
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Shipping to{" "}
            <span className="text-[#D4A017]">Every Corner</span>
            <br className="hidden sm:block" /> of the World
          </h2>
          <p className="mt-5 text-green-200/60 text-base sm:text-lg max-w-2xl mx-auto">
            From the coconut heartlands of Tamil Nadu, our export routes span 4 continents —
            delivering consistent quality to premium buyers worldwide.
          </p>
        </motion.div>

        {/* ── Stats Bar ── */}
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
            { value: "10+", label: "Years Exporting" },
          ].map((stat, i) => (
            <div key={stat.label}
              className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.04] hover:bg-white/[0.08] transition-colors">
              <motion.span
                className="text-3xl sm:text-4xl font-bold text-[#D4A017] font-serif leading-none"
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

        {/* ── Map + Panel Layout ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-6 items-start">

          {/* ── SVG World Map ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{ background: "#0d2d1f" }}
          >
            <WorldMapSVG animationsActive={animationsActive} />

            {/* Region Legend overlay */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <span key={r.label}
                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/60 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.color }} />
                  {r.label}
                </span>
              ))}
            </div>

            {/* "Live Network" badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
              </span>
              <span className="text-[10px] text-green-300 uppercase tracking-widest font-medium">Active Trade Routes</span>
            </div>
          </motion.div>

          {/* ── Right Panel: Region Groups with descriptions ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="space-y-5"
          >
            {/* Route path indicator */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] mb-3 font-semibold">Export Route</p>
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

            {/* Region groups with descriptions */}
            {regionGroups.map((region, regionIndex) => (
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
                  {/* Region description — new */}
                  <p className="text-[11px] text-white/50 leading-relaxed mb-3 border-l-2 border-[#D4A017]/30 pl-3">
                    {region.description}
                  </p>
                  {/* Country pills */}
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((dest) => (
                      <button
                        key={dest.country}
                        onClick={() => setActivePin(activePin === dest.country ? null : dest.country)}
                        className={`
                          flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium
                          border transition-all duration-200 cursor-pointer
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]
                          ${activePin === dest.country
                            ? "bg-[#D4A017]/15 border-[#D4A017]/50 text-white"
                            : "bg-white/[0.04] border-white/10 text-white/70 hover:border-[#D4A017]/30 hover:text-white hover:bg-white/[0.07]"
                          }
                        `}
                        aria-pressed={activePin === dest.country}
                      >
                        <span className="text-sm leading-none" aria-hidden="true">{dest.flag}</span>
                        <span>{dest.country}</span>
                      </button>
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
              <span className="text-xl mt-0.5" aria-hidden="true">🌐</span>
              <div>
                <p className="text-white/90 text-sm font-semibold">Exploring a new market?</p>
                <p className="text-white/40 text-xs mt-0.5 leading-relaxed">
                  We ship to regions beyond this list. Reach out to discuss your destination.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom Trust Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
        >
          {[
            {
              icon: "🛳️",
              title: "Multi-Port Shipping",
              desc: "Chennai, Tuticorin & Nhava Sheva — flexible loading to cut your lead times.",
            },
            {
              icon: "📜",
              title: "Full Documentation",
              desc: "Certificate of Origin, Phytosanitary, BL & customs clearance handled end-to-end.",
            },
            {
              icon: "🔒",
              title: "Buyer Protection",
              desc: "LC, TT & escrow-friendly. We work with your payment and compliance terms.",
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
