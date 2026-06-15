"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0C1A12 0%, #0d2d1f 40%, #0a1f16 100%)" }}
      aria-label="Contact Hero"
    >
      {/* Background texture */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-semibold">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight"
            >
              Connect With Our{" "}
              <span className="text-[#D4A017]">Export Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-green-200/60 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Ready to source premium coconut products? Our export team is here to help with
              quotations, logistics, and documentation.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {[
                "Dedicated Export Support",
                "Global Buyer Assistance",
                "Fast Response",
                "Commercial Scale Expertise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-[#e0b52a] transition-all duration-300 shadow-lg shadow-[#D4A017]/20"
              >
                Send Inquiry
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M8 1l5 5-5 5M1 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact-options"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Contact Options
              </a>
            </motion.div>
          </div>

          {/* Right visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Floating contact cards */}
            <div className="relative w-full aspect-[4/3]">
              {/* Background image – Contact page hero visual */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/images/EachPage/Contact-image.png"
                  alt="Professional export consultation and support — dedicated team for international buyer inquiries"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 38vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A12]/80 via-[#0d2d1f]/60 to-[#0a1f16]/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-transparent to-[#0C1A12]/20" />
              </div>

              {/* Card 1 - WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[5%] right-[8%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 w-[170px] xl:w-[200px] shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-lg">💬</div>
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">WhatsApp</p>
                    <p className="text-white text-sm font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                  <span className="text-[10px] text-green-300/70">Typically replies within 2 hours</span>
                </div>
              </motion.div>

              {/* Card 2 - Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[15%] left-[5%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 w-[180px] xl:w-[220px] shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/20 flex items-center justify-center text-lg">✉️</div>
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm font-semibold">exports@globalcoco.com</p>
                  </div>
                </div>
                <p className="text-white/40 text-[10px]">Business queries only</p>
              </motion.div>

              {/* Card 3 - 24h */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-[35%] right-[15%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-[160px] shadow-2xl"
              >
                <p className="text-[#D4A017] text-2xl font-bold">24h</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Response Time</p>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
                    className="h-full rounded-full bg-[#D4A017]"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full border border-[#D4A017]/20" />
              <div className="absolute bottom-[40%] right-[5%] w-12 h-12 rounded-full border border-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
