"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./ProductConstants";
import { ProductIcon } from "./ProductIcons";
import type { Product } from "@/types";

export default function PackagingSection({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 80px)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 md:mb-16">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">Packaging & Logistics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            From Packing to <span className="text-[#1B4332]">Port</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {product.logisticsItems.map((item, i) => (
            <motion.article key={item.title} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-none overflow-hidden transition-all duration-400 hover:shadow-[0_16px_48px_rgba(27,67,50,0.09)]">
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="relative p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-6 h-px bg-[#D4A017]" />
                    <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                      <ProductIcon icon={item.icon} />
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#D4A017] uppercase tracking-[0.14em] text-right max-w-[120px] leading-tight">{item.stat}</span>
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-4">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
