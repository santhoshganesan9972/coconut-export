"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./ProductConstants";
import type { Product } from "@/types";

export default function ProductOverview({ product }: { product: Product }) {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#FAFAFA] py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 80px)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">Product Overview</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
              About This <span className="text-[#1B4332]">Product</span>
            </h2>
          </div>
          <p className="text-[#6B7280] text-sm leading-relaxed max-w-sm lg:text-right">Comprehensive details about our premium export offering — from sourcing and quality to the benefits you can expect.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: full description */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="lg:col-span-3">
            <div className="bg-white border border-[#E5E7EB] p-8 md:p-10">
              {/* Scannable Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pb-8 border-b border-[#E5E7EB]">
                {[
                  { label: "Export Grade", value: product.specifications.exportGrade, icon: "🏆" },
                  { label: "MOQ", value: product.specifications.moq.split(" ").slice(0, 2).join(" "), icon: "📦" },
                  { label: "Origin", value: "India", icon: "📍" },
                  { label: "Port", value: "Chennai / Tuticorin", icon: "🚢" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider">{item.label}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm" aria-hidden="true">{item.icon}</span>
                      <span className="text-[13px] font-bold text-[#1B4332]">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#111827] mb-6 tracking-[-0.01em]">Premium Quality, Direct From Origin</h3>
              <div className="space-y-4 text-[#6B7280] text-sm leading-relaxed">
                <p>{product.description}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A017] mb-4 block">Key Highlights</span>
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1B4332] bg-[#1B4332]/[0.06] border border-[#1B4332]/[0.10]">
                      <span className="w-1 h-1 rounded-full bg-[#D4A017] flex-shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits sidebar */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }} className="lg:col-span-2">
            <div className="bg-white border border-[#E5E7EB] p-8 md:p-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A017] mb-6 block">Export Benefits</span>
              <div className="space-y-6">
                {product.exportBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-3">
                    <span className="text-lg flex-shrink-0 mt-0.5" aria-hidden="true">{benefit.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-[#111827] leading-snug mb-1">{benefit.title}</p>
                      <p className="text-[12px] text-[#6B7280] leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="group/cta inline-flex items-center gap-2.5 mt-8 pt-6 border-t border-[#E5E7EB] text-sm font-semibold text-[#1B4332] hover:text-[#D4A017] transition-colors">
                Request Technical Datasheet
                <svg aria-hidden="true" className="w-3.5 h-3.5 translate-x-0 group-hover/cta:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
