"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    theme: "Fresh Brown Coconut Export",
    headline: "Premium Export Quality Fresh Coconuts",
    subheading: "Supplying international markets with carefully selected export-grade coconuts from certified farms across Tamil Nadu.",
    image: "/images/products/fresh-brown-coconut/hero.jpg",
    cta: [
      { label: "Explore Products", href: "/products/fresh-brown-coconut", primary: false },
      { label: "Request Quote", href: "/#contact", primary: true },
    ],
  },
  {
    id: 2,
    theme: "Pollachi Origin",
    headline: "Sourced From The Coconut Capital Of India",
    subheading: "Premium coconuts from Pollachi farms trusted by global buyers for consistent quality and reliable supply.",
    image: "/images/storytelling/farm-sourcing.jpg",
  },
  {
    id: 3,
    theme: "Global Export",
    headline: "Reliable Global Coconut Supply Chain",
    subheading: "From sourcing and processing to container loading and worldwide delivery — end-to-end export logistics managed in-house.",
    image: "/images/storytelling/container-loading.jpg",
  },
  {
    id: 4,
    theme: "Copra & Processed Products",
    headline: "Premium Coconut Products For Industrial Applications",
    subheading: "Copra, coconut derivatives and value-added export products for food processing, cosmetic, and industrial buyers.",
    image: "/images/products/copra-coconut/hero.jpg",
  },
  {
    id: 5,
    theme: "Coco Peat",
    headline: "Sustainable Coco Peat Solutions For Agriculture",
    subheading: "High-quality growing media for horticulture and greenhouse cultivation — eco-friendly and export-ready.",
    image: "/images/products/coco-peat/hero.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = slides.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setInterval(next, 5000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, next]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-[80vh] sm:h-[85vh] lg:h-screen overflow-hidden bg-[#0C1A12] select-none"
      aria-label="Hero carousel — premium coconut export showcase"
      role="region"
    >
      {/* ── Slides ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].headline}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
          />

          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/90 via-[#0C1A12]/50 to-[#0C1A12]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/80 via-transparent to-transparent" />

          {/* Bottom gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center pt-20 sm:pt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="max-w-3xl"
              >
                {/* Theme badge */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="block w-8 h-px bg-[#D4A017]" />
                  <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                    {slides[current].theme}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] text-white font-bold leading-[1.08] tracking-[-0.02em]">
                  {slides[current].headline}
                </h2>

                {/* Subheading */}
                <p className="mt-5 text-[15px] sm:text-base lg:text-lg text-white/65 leading-relaxed max-w-[600px] font-light">
                  {slides[current].subheading}
                </p>

                {/* CTAs (slide 1 only) */}
                {slides[current].cta && (
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    {slides[current].cta.map((btn) =>
                      btn.primary ? (
                        <a
                          key={btn.label}
                          href={btn.href}
                          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                        >
                          <span className="relative z-10">{btn.label}</span>
                          <svg
                            aria-hidden="true"
                            className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      ) : (
                        <a
                          key={btn.label}
                          href={btn.href}
                          className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                        >
                          Explore Products
                          <svg
                            aria-hidden="true"
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      )
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Navigation Arrows ── */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-none px-4 sm:px-6 lg:px-8">
        <button
          onClick={prev}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm text-white/70 hover:bg-white/[0.12] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm text-white/70 hover:bg-white/[0.12] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Pagination Dots ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017] ${
              i === current
                ? "w-8 h-2 bg-[#D4A017]"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}: ${slide.headline}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 text-white/30 text-xs font-mono tracking-wider">
        <span className="text-white/60">0{current + 1}</span> / 0{totalSlides}
      </div>
    </section>
  );
}
