"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/company";

/* ─── Per-cert metadata ───────────────────────────────────────────────── */
const certMeta: Record<string, { icon: React.ReactNode; descriptor: string }> = {
  "ISO 22000": {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    descriptor: "Food Safety Management",
  },
  HACCP: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
    descriptor: "Hazard Control Protocol",
  },
  APEDA: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    descriptor: "Agricultural Export Authority",
  },
  "SGS Verified": {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    descriptor: "Third-Party Quality Verified",
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutCertifications() {
  return (
    <section
      id="about-certifications"
      aria-label="Certifications and accreditations"
      className="relative overflow-hidden bg-[#1B4332]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-14">
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center text-[10px] uppercase tracking-[0.28em] text-[#D4A017]/70 font-semibold mb-6"
        >
          Our Certifications &amp; Accreditations
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] rounded-lg overflow-hidden border border-white/[0.08]">
          {certifications.map((cert, i) => {
            const meta = certMeta[cert.name];
            return (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col items-center justify-center gap-3 px-6 py-8 bg-[#1B4332] hover:bg-[#1e4e3a] transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D4A017]/30 text-[#D4A017] group-hover:border-[#D4A017]/60 group-hover:bg-[#D4A017]/[0.06] transition-all duration-300">
                  {meta?.icon}
                </div>
                <p className="text-white text-sm font-bold tracking-[0.08em] text-center leading-tight">
                  {cert.name}
                </p>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.15em] text-center leading-snug font-medium">
                  {meta?.descriptor}
                </p>
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/0 to-transparent group-hover:via-[#D4A017]/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom compliance note ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.36, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <span className="text-[10px] text-white/25 tracking-[0.12em] uppercase">
            Independently audited &amp; regularly renewed
          </span>
          <span className="text-white/10 text-[10px] hidden sm:inline">|</span>
          <a
            href="/rfq"
            className="text-[10px] text-[#D4A017]/70 hover:text-[#D4A017] uppercase tracking-wider font-semibold transition-colors"
          >
            Request certification documents →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
