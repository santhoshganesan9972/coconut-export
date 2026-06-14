"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/data/company";

/* ─────────────────────────────────────────────────────────────
   CERTIFICATION METADATA
   Each cert carries: description, issuer, scope, tier, colour
   Tier controls visual hierarchy (featured = large, standard = normal)
───────────────────────────────────────────────────────────────*/
interface CertMeta {
  description: string;
  issuer: string;
  scope: string;
  tier: "featured" | "standard";
  accent: string;       // border / ring colour
  tagline: string;      // one-line authority statement
  pillars: string[];    // 3 short compliance pillars shown as tags
}

const CERT_META: Record<string, CertMeta> = {
  "ISO 22000": {
    description:
      "International standard governing Food Safety Management Systems — the globally recognised benchmark for safe supply chains from farm to final buyer.",
    issuer: "ISO / International Organization for Standardization",
    scope: "Food Safety Management System",
    tier: "featured",
    accent: "#D4A017",
    tagline: "Global Food Safety Benchmark",
    pillars: ["FSMS Framework", "Hazard Control", "Continual Improvement"],
  },
  HACCP: {
    description:
      "Hazard Analysis & Critical Control Points — the science-based preventive approach mandated by international food trade bodies to identify, evaluate and control food-safety hazards.",
    issuer: "Codex Alimentarius Commission (FAO / WHO)",
    scope: "Preventive Food Safety Controls",
    tier: "featured",
    accent: "#2D7D9A",
    tagline: "FAO / WHO Preventive Standard",
    pillars: ["Hazard Analysis", "Critical Control Points", "Corrective Actions"],
  },
  APEDA: {
    description:
      "Registered exporter under the Agricultural & Processed Food Products Export Development Authority, Government of India — mandatory for all agricultural commodity exports.",
    issuer: "Ministry of Commerce & Industry, Government of India",
    scope: "Agricultural Export Compliance",
    tier: "standard",
    accent: "#4A9E6B",
    tagline: "Govt. of India Registered Exporter",
    pillars: ["Export Registration", "Agri. Compliance", "DGFT Aligned"],
  },
  "SGS Verified": {
    description:
      "Third-party product and process verification by SGS — the world's leading inspection, testing, and certification company operating in 140+ countries.",
    issuer: "SGS S.A. — Geneva, Switzerland",
    scope: "Independent Third-Party Verification",
    tier: "standard",
    accent: "#9B59B6",
    tagline: "World's #1 Inspection Body",
    pillars: ["Lab Testing", "Process Audit", "140+ Countries"],
  },
};

/* ─────────────────────────────────────────────────────────────
   SVG COMPLIANCE SEAL
   Renders a professional-looking round seal for each cert.
───────────────────────────────────────────────────────────────*/
function ComplianceSeal({
  name,
  accent,
  size = 96,
}: {
  name: string;
  accent: string;
  size?: number;
}) {
  const abbr = name.replace("SGS Verified", "SGS").split(" ")[0].toUpperCase();
  const r = size / 2;
  const innerR = r * 0.82;
  const textR = r * 0.66;

  // Build the circular text path
  const circumference = 2 * Math.PI * textR;
  const sealText = `✦  CERTIFIED  ✦  COMPLIANT  ✦  VERIFIED`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id={`sealBg-${abbr}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.04" />
        </radialGradient>
        <path
          id={`sealCircle-${abbr}`}
          d={`M ${r},${r} m -${textR},0 a ${textR},${textR} 0 1,1 ${textR * 2},0 a ${textR},${textR} 0 1,1 -${textR * 2},0`}
        />
        <filter id={`sealGlow-${abbr}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx={r} cy={r} r={r - 2} fill="url(#sealBg-${abbr})" stroke={accent} strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Inner ring */}
      <circle cx={r} cy={r} r={innerR} fill="none" stroke={accent} strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="3 2" />
      {/* Circular text */}
      <text
        fontSize={size * 0.065}
        fill={accent}
        fillOpacity="0.7"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1.4"
        fontWeight="600"
      >
        <textPath href={`#sealCircle-${abbr}`} startOffset="0%">
          {sealText}
        </textPath>
      </text>
      {/* Cert abbreviation */}
      <text
        x={r}
        y={r + size * 0.07}
        textAnchor="middle"
        fontSize={size * 0.18}
        fill={accent}
        fontWeight="700"
        filter={`url(#sealGlow-${abbr})`}
      >
        {abbr}
      </text>
      {/* Check mark */}
      <text
        x={r}
        y={r - size * 0.06}
        textAnchor="middle"
        fontSize={size * 0.14}
        fill={accent}
        fillOpacity="0.8"
        fontFamily="system-ui"
      >
        ✓
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   FEATURED CERT CARD  (ISO 22000, HACCP)
   Large horizontal layout — left: seal, right: detail block
───────────────────────────────────────────────────────────────*/
function FeaturedCertCard({
  name,
  meta,
  delay,
  isInView,
}: {
  name: string;
  meta: CertMeta;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border bg-white"
      style={{ borderColor: `${meta.accent}22` }}
      aria-label={`${name} certification`}
    >
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${meta.accent} 0%, ${meta.accent}44 100%)` }}
      />

      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23${meta.accent.replace('#', '')}' opacity='0.4'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23000' opacity='0.08'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23000' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-7 md:p-9">
        {/* Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.15, ease: "backOut" }}
          className="flex-shrink-0"
        >
          <ComplianceSeal name={name} accent={meta.accent} size={108} />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0 text-center sm:text-left">
          {/* Tagline badge */}
          <span
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[3px] font-bold px-3 py-1 rounded-full mb-3"
            style={{ background: `${meta.accent}14`, color: meta.accent }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: meta.accent }}
            />
            {meta.tagline}
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-2 tracking-tight">
            {name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-lg">
            {meta.description}
          </p>

          {/* Issuer */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[8px] font-bold"
                style={{ background: `${meta.accent}18`, color: meta.accent }}
              >
                ✦
              </span>
              <span className="font-medium text-gray-600">{meta.issuer}</span>
            </div>
          </div>

          {/* Compliance pillars */}
          <div className="flex flex-wrap gap-2">
            {meta.pillars.map((p) => (
              <span
                key={p}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-md border"
                style={{
                  color: meta.accent,
                  borderColor: `${meta.accent}30`,
                  background: `${meta.accent}08`,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Verified badge — top-right */}
        <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Verified
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   STANDARD CERT CARD  (APEDA, SGS Verified)
   Compact stacked card — seal top, content below
───────────────────────────────────────────────────────────────*/
function StandardCertCard({
  name,
  meta,
  delay,
  isInView,
}: {
  name: string;
  meta: CertMeta;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border bg-white flex flex-col"
      style={{ borderColor: `${meta.accent}22` }}
      aria-label={`${name} certification`}
    >
      {/* Accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${meta.accent} 0%, ${meta.accent}44 100%)` }}
      />

      {/* Header area */}
      <div
        className="relative flex flex-col items-center pt-6 pb-4 px-6"
        style={{ background: `linear-gradient(180deg, ${meta.accent}08 0%, transparent 100%)` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.65 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.18, ease: "backOut" }}
        >
          <ComplianceSeal name={name} accent={meta.accent} size={84} />
        </motion.div>

        {/* Verified badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 text-[9px] uppercase tracking-widest font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full px-2 py-0.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Active
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pb-6 pt-1">
        {/* Tagline */}
        <span
          className="inline-flex self-center items-center gap-1 text-[9px] uppercase tracking-[2.5px] font-bold px-2.5 py-1 rounded-full mb-3"
          style={{ background: `${meta.accent}12`, color: meta.accent }}
        >
          {meta.tagline}
        </span>

        <h3 className="text-lg font-bold text-[#111827] mb-2 text-center tracking-tight">
          {name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 text-center flex-1">
          {meta.description}
        </p>

        {/* Issuer */}
        <p className="text-[10px] text-center text-gray-400 mb-4 font-medium">
          {meta.issuer}
        </p>

        {/* Pillars */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {meta.pillars.map((p) => (
            <span
              key={p}
              className="text-[10px] font-semibold px-2 py-0.5 rounded border"
              style={{
                color: meta.accent,
                borderColor: `${meta.accent}28`,
                background: `${meta.accent}06`,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPLIANCE NARRATIVE BAR
   Horizontal progress-style bar explaining the trust chain
───────────────────────────────────────────────────────────────*/
const NARRATIVE = [
  { step: "01", label: "Quality Assurance", sub: "ISO 22000 FSMS" },
  { step: "02", label: "Food Safety Standards", sub: "HACCP Preventive Controls" },
  { step: "03", label: "Export Compliance", sub: "APEDA Registered" },
  { step: "04", label: "Independent Verification", sub: "SGS Third-Party Audit" },
];

function ComplianceNarrative({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mb-8 md:mb-10"
      aria-label="Compliance assurance chain"
    >
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-0 rounded-2xl overflow-hidden border border-[#1B4332]/10 bg-white shadow-sm">
        {NARRATIVE.map((item, i) => (
          <div
            key={item.step}
            className="relative flex-1 flex flex-col sm:flex-row items-center gap-3 px-5 py-4 sm:py-5 group"
          >
            {/* Connector line between items */}
            {i < NARRATIVE.length - 1 && (
              <div
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9h12M10 5l4 4-4 4" stroke="#D4A017" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}

            {/* Step number */}
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
              style={{ background: "linear-gradient(135deg, #1B4332 0%, #2d6a4f 100%)" }}
              aria-hidden="true"
            >
              {item.step}
            </span>

            {/* Text */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-[#111827] leading-snug">{item.label}</p>
              <p className="text-[10px] text-[#D4A017] font-semibold uppercase tracking-widest leading-snug mt-0.5">
                {item.sub}
              </p>
            </div>

            {/* Horizontal divider (mobile only) */}
            {i < NARRATIVE.length - 1 && (
              <div className="sm:hidden absolute bottom-0 left-5 right-5 h-px bg-gray-100" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────────*/
export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Split by tier
  const featured = certifications.filter((c) => CERT_META[c.name]?.tier === "featured");
  const standard = certifications.filter((c) => CERT_META[c.name]?.tier === "standard");

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-14 md:py-18 overflow-hidden"
      style={{ background: "linear-gradient(170deg, #FAFAFA 0%, #f4f8f5 50%, #FAFAFA 100%)" }}
      aria-label="Certifications and Compliance"
    >
      {/* ── Watermark — large faded "CERTIFIED" text ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[22vw] font-black uppercase tracking-widest text-[#1B4332]/[0.025] whitespace-nowrap"
        >
          CERTIFIED
        </span>
      </div>

      {/* ── Subtle top/bottom edge lines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-8 md:mb-10"
        >
          {/* Pre-label */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Compliance Center
            </p>
            <div className="w-8 h-px bg-[#D4A017]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Built on{" "}
            <span className="text-[#1B4332]">International</span>
            <br className="hidden sm:block" />{" "}
            <span className="text-[#D4A017]">Standards</span>
          </h2>
          <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every shipment we dispatch carries the weight of internationally recognised
            certifications — from food-safety mandates to third-party audit verification.
          </p>

          {/* Trust signal pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { icon: "🌐", text: "Globally Recognised" },
              { icon: "🔬", text: "Lab Tested" },
              { icon: "📋", text: "Audit Ready" },
              { icon: "✅", text: "Export Compliant" },
            ].map((pill) => (
              <span
                key={pill.text}
                className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1B4332] bg-[#1B4332]/6 border border-[#1B4332]/12 rounded-full px-3 py-1.5"
              >
                <span aria-hidden="true">{pill.icon}</span>
                {pill.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Compliance Chain Narrative ── */}
        <ComplianceNarrative isInView={isInView} />

        {/* ── Featured Certifications (ISO 22000, HACCP) ── */}
        <div className="space-y-4 mb-4">
          {featured.map((cert, i) => {
            const meta = CERT_META[cert.name];
            if (!meta) return null;
            return (
              <FeaturedCertCard
                key={cert.name}
                name={cert.name}
                meta={meta}
                delay={0.25 + i * 0.12}
                isInView={isInView}
              />
            );
          })}
        </div>

        {/* ── Standard Certifications (APEDA, SGS) ── */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8 md:mb-12">
          {standard.map((cert, i) => {
            const meta = CERT_META[cert.name];
            if (!meta) return null;
            return (
              <StandardCertCard
                key={cert.name}
                name={cert.name}
                meta={meta}
                delay={0.5 + i * 0.12}
                isInView={isInView}
              />
            );
          })}
        </div>

        {/* ── Bottom Compliance Footer Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              {
                icon: "🏛️",
                title: "Audit-Ready Documentation",
                desc: "Complete compliance records available for buyer audits, phytosanitary checks, and customs clearance.",
              },
              {
                icon: "🔏",
                title: "Certified at Every Stage",
                desc: "From farm sourcing through processing, packaging, and export — every step is under certified protocols.",
              },
              {
                icon: "📞",
                title: "Compliance Queries Welcome",
                desc: "Our team can provide certification documentation and scope letters to your procurement or QA department.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 md:p-6 hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
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
