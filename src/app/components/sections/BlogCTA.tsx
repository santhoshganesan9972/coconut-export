"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function BlogCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) throw new Error("Server error");

      setSubmitted(true);
      setEmail("");
    } catch {
      setSubmitted(true);
      setEmail("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="blog-cta"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)",
      }}
      aria-label="Stay Updated With Industry Insights"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)',
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4A017 30%, #f5c842 50%, #D4A017 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
            Newsletter
          </span>
          <span className="block w-8 h-px bg-[#D4A017]/50" />
        </motion.div>            <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-[1.12] tracking-[-0.02em]"
        >
          Stay Updated
          <br />
          <span className="text-[#D4A017]">Free Industry Insights</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Get export guides, market trends, and coconut industry updates delivered to your inbox.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="mt-8 max-w-lg mx-auto p-6 rounded-xl bg-white/[0.06] border border-[#D4A017]/30"
          >
            <p className="text-[#D4A017] font-semibold text-base">
              Thank you for subscribing. We will keep you updated with industry insights.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="mt-8 max-w-lg mx-auto"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={submitting}
                className="flex-1 px-5 py-3.5 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={submitting}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017] rounded-xl whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Subscribing..." : "Subscribe"}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            {error && (
              <p className="mt-2 text-[12px] text-red-400 text-left">{error}</p>
            )}
            <p className="mt-3 text-[11px] text-white/30">
              No spam. Unsubscribe anytime.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
